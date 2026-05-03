<script setup>
import { computed, defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  conceptMap,
  fundamentals,
  glossaryTerms,
  implementationTimeline,
  legislationItems,
  newsItems,
  refreshDate,
  sourceGroups,
  tabs,
} from './data/policyTracker'

const activeTab = ref('watch')
const activeLane = ref('All')
const activeSourceType = ref('All')
const activeLegislationId = ref(legislationItems[0].id)
const activeMechanismTitle = ref(conceptMap[0].title)
const activeGlossaryTerm = ref(glossaryTerms[0].term)
const glossarySearch = ref('')
const floatingGlossarySearch = ref('')
const activeFloatingGlossaryTerm = ref(glossaryTerms[0].term)
const isFloatingGlossaryMinimized = ref(false)
const showSectionNav = ref(false)
const sectionNavRevealPoint = 360
let sectionNavScrollFrame = null

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const glossaryAliases = computed(() => {
  const aliases = []

  glossaryTerms.forEach((term) => {
    const labels = new Set([term.term])

    if (!/s$/i.test(term.term)) {
      labels.add(`${term.term}s`)
    }

    if (term.term === 'Machine-readable file') {
      labels.add('MRF')
      labels.add('MRFs')
    }

    labels.forEach((label) => {
      aliases.push({
        label,
        normalized: label.toLowerCase(),
        term,
      })
    })
  })

  return aliases.sort((a, b) => b.label.length - a.label.length)
})

const glossaryAliasLookup = computed(
  () => new Map(glossaryAliases.value.map((alias) => [alias.normalized, alias.term])),
)

const glossaryPattern = computed(() => {
  const escapedAliases = glossaryAliases.value.map((alias) => escapeRegExp(alias.label))

  return new RegExp(`(^|[^A-Za-z0-9])(${escapedAliases.join('|')})(?=$|[^A-Za-z0-9])`, 'gi')
})

const glossarySegments = (text = '') => {
  if (!text) {
    return []
  }

  const segments = []
  const pattern = glossaryPattern.value
  let cursor = 0
  let match

  pattern.lastIndex = 0

  while ((match = pattern.exec(text)) !== null) {
    const prefix = match[1] || ''
    const label = match[2]
    const start = match.index + prefix.length
    const end = start + label.length
    const term = glossaryAliasLookup.value.get(label.toLowerCase())

    if (start > cursor) {
      segments.push({
        key: `${cursor}-${start}`,
        text: text.slice(cursor, start),
      })
    }

    segments.push({
      key: `${start}-${end}`,
      text: label,
      term,
    })

    cursor = end
  }

  if (cursor < text.length) {
    segments.push({
      key: `${cursor}-${text.length}`,
      text: text.slice(cursor),
    })
  }

  return segments
}

const GlossaryText = defineComponent({
  name: 'GlossaryText',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  emits: ['define'],
  setup(props, { emit }) {
    return () =>
      glossarySegments(props.text).map((segment) =>
        segment.term
          ? h(
              'button',
              {
                type: 'button',
                class: 'glossary-inline',
                onClick: () => emit('define', segment.term),
              },
              segment.text,
            )
          : segment.text,
      )
  },
})

const lanes = computed(() => [
  'All',
  ...Array.from(new Set(newsItems.map((item) => item.lane))),
])

const sourceTypes = computed(() => [
  'All',
  ...Array.from(new Set(newsItems.map((item) => item.sourceType))),
])

const filteredNews = computed(() =>
  newsItems.filter((item) => {
    const laneMatch = activeLane.value === 'All' || item.lane === activeLane.value
    const sourceMatch =
      activeSourceType.value === 'All' || item.sourceType === activeSourceType.value

    return laneMatch && sourceMatch
  }),
)

const leadNews = computed(() => filteredNews.value[0])
const secondaryNews = computed(() => filteredNews.value.slice(1, 5))
const briefingNews = computed(() => filteredNews.value.slice(5))

const selectedLegislation = computed(() =>
  legislationItems.find((item) => item.id === activeLegislationId.value),
)

const selectedMechanism = computed(() =>
  conceptMap.find((item) => item.title === activeMechanismTitle.value),
)

const termMatchesQuery = (term, query) =>
  [term.term, term.category, term.meaning, term.context].some((value) =>
    String(value || '').toLowerCase().includes(query),
  )

const filteredGlossaryTerms = computed(() => {
  const query = glossarySearch.value.trim().toLowerCase()

  if (!query) {
    return glossaryTerms
  }

  return glossaryTerms.filter((term) => termMatchesQuery(term, query))
})

const selectedGlossaryTerm = computed(() =>
  filteredGlossaryTerms.value.find((item) => item.term === activeGlossaryTerm.value) ||
  filteredGlossaryTerms.value[0] ||
  glossaryTerms.find((item) => item.term === activeGlossaryTerm.value),
)

const floatingGlossaryResults = computed(() => {
  const query = floatingGlossarySearch.value.trim().toLowerCase()

  if (!query) {
    return []
  }

  return glossaryTerms.filter((term) => termMatchesQuery(term, query)).slice(0, 6)
})

const selectedFloatingGlossaryTerm = computed(() => {
  const query = floatingGlossarySearch.value.trim()

  if (query) {
    return (
      floatingGlossaryResults.value.find(
        (term) => term.term === activeFloatingGlossaryTerm.value,
      ) ||
      floatingGlossaryResults.value[0] ||
      null
    )
  }

  return (
    glossaryTerms.find((term) => term.term === activeFloatingGlossaryTerm.value) ||
    glossaryTerms[0]
  )
})

const showFloatingGlossaryTerm = (term) => {
  activeFloatingGlossaryTerm.value = term.term
  activeGlossaryTerm.value = term.term
  floatingGlossarySearch.value = term.term
  isFloatingGlossaryMinimized.value = false
}

const openGlossaryPopup = (term) => {
  showFloatingGlossaryTerm(term)
}

const clearFloatingGlossarySearch = () => {
  floatingGlossarySearch.value = ''
}

const updateSectionNavVisibility = () => {
  if (sectionNavScrollFrame) {
    return
  }

  sectionNavScrollFrame = window.requestAnimationFrame(() => {
    showSectionNav.value = window.scrollY > sectionNavRevealPoint
    sectionNavScrollFrame = null
  })
}

onMounted(() => {
  updateSectionNavVisibility()
  window.addEventListener('scroll', updateSectionNavVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateSectionNavVisibility)

  if (sectionNavScrollFrame) {
    window.cancelAnimationFrame(sectionNavScrollFrame)
  }
})
</script>

<template>
  <main class="policy-desk" @keyup.escape.window="clearFloatingGlossarySearch">
    <section class="masthead" aria-labelledby="page-title">
      <div class="masthead-copy">
        <p class="eyebrow">Federal scope only</p>
        <h1 id="page-title">State of Care Costs</h1>
        <p>
          A working desk for people already following the issue: latest federal
          movement on pricing data, patient billing protections, drug costs,
          commercial plan transparency, and the statutes behind them.
        </p>
      </div>

      <div class="scope-brief" aria-label="Tracker scope">
        <span class="publication-mark">Care costs</span>
        <div>
          <p>Research refresh</p>
          <strong>{{ refreshDate }}</strong>
        </div>
        <p>
          A federal-only briefing file for price transparency, commercial-plan
          disclosure, surprise billing, drug costs, and the policy machinery around
          them.
        </p>
      </div>
    </section>

    <nav class="top-tabs" aria-label="Tracker sections">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        <strong>{{ tab.label }}</strong>
        <span>{{ tab.dek }}</span>
      </button>
    </nav>

    <section v-if="activeTab === 'watch'" class="tab-panel" aria-label="Latest federal watch">
      <section class="news-board" aria-labelledby="news-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Latest federal watch</p>
            <h2 id="news-title">News and rulemaking signals</h2>
          </div>

          <div class="filter-stack">
            <div class="lane-filter" aria-label="Filter latest items by source type">
              <button
                v-for="sourceType in sourceTypes"
                :key="sourceType"
                type="button"
                :class="{ active: activeSourceType === sourceType }"
                @click="activeSourceType = sourceType"
              >
                {{ sourceType }}
              </button>
            </div>

            <div class="lane-filter" aria-label="Filter latest items by lane">
              <button
                v-for="lane in lanes"
                :key="lane"
                type="button"
                :class="{ active: activeLane === lane }"
                @click="activeLane = lane"
              >
                {{ lane }}
              </button>
            </div>
          </div>
        </div>

        <div class="result-bar">
          <strong>{{ filteredNews.length }}</strong>
          <span>items match the current filters</span>
        </div>

        <div v-if="leadNews" class="front-page-grid">
          <article class="lead-story">
            <div class="news-meta">
              <span>{{ leadNews.source }}</span>
              <span>{{ leadNews.sourceType }}</span>
              <span>{{ leadNews.lane }}</span>
            </div>
            <p class="lead-kicker">{{ leadNews.date }} / {{ leadNews.label }}</p>
            <h3>
              <GlossaryText :text="leadNews.title" @define="openGlossaryPopup" />
            </h3>
            <p>
              <GlossaryText :text="leadNews.summary" @define="openGlossaryPopup" />
            </p>

            <div class="evidence-box">
              <strong>Why it matters</strong>
              <p>
                <GlossaryText :text="leadNews.whyItMatters" @define="openGlossaryPopup" />
              </p>
            </div>

            <div class="tag-row">
              <span v-for="tag in leadNews.tags" :key="tag">
                <GlossaryText :text="tag" @define="openGlossaryPopup" />
              </span>
            </div>
            <a :href="leadNews.url" target="_blank" rel="noreferrer">Primary or source link</a>
          </article>

          <aside class="brief-rail" aria-label="Briefing rail">
            <div class="rail-heading">
              <p class="eyebrow">Briefing rail</p>
              <h3>More signals to scan</h3>
            </div>

            <article v-for="item in secondaryNews" :key="item.id">
              <span>{{ item.date }} / {{ item.source }}</span>
              <h4>
                <GlossaryText :text="item.title" @define="openGlossaryPopup" />
              </h4>
              <p>
                <GlossaryText :text="item.whyItMatters" @define="openGlossaryPopup" />
              </p>
              <a :href="item.url" target="_blank" rel="noreferrer">Read source</a>
            </article>
          </aside>
        </div>

        <div v-if="briefingNews.length" class="briefing-list">
          <div class="briefing-list-heading">
            <p class="eyebrow">Briefing file</p>
            <h3>All other matching items</h3>
          </div>

          <div class="news-grid">
            <article v-for="item in briefingNews" :key="item.id" class="news-item">
              <div class="news-date">
                <span>{{ item.date }}</span>
                <strong>{{ item.label }}</strong>
              </div>
              <div class="news-body">
                <div class="news-meta">
                  <span>{{ item.source }}</span>
                  <span>{{ item.sourceType }}</span>
                  <span>{{ item.lane }}</span>
                </div>
                <h3>
                  <GlossaryText :text="item.title" @define="openGlossaryPopup" />
                </h3>
                <p>
                  <GlossaryText :text="item.summary" @define="openGlossaryPopup" />
                </p>
                <p class="why">
                  <GlossaryText :text="item.whyItMatters" @define="openGlossaryPopup" />
                </p>
                <div class="tag-row">
                  <span v-for="tag in item.tags" :key="tag">
                    <GlossaryText :text="tag" @define="openGlossaryPopup" />
                  </span>
                </div>
                <a :href="item.url" target="_blank" rel="noreferrer">Primary or source link</a>
              </div>
            </article>
          </div>
        </div>

        <div v-if="!filteredNews.length" class="no-results">
          <h3>No items match those filters.</h3>
          <p>Reset either source type or lane to All to widen the briefing.</p>
        </div>
      </section>

    </section>

    <section
      v-if="activeTab === 'learn'"
      class="tab-panel policy-library"
      aria-label="Policy library"
    >
      <section class="legislation-board" aria-labelledby="legislation-title">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">Statutory anchors</p>
            <h2 id="legislation-title">Legislation and statutory anchors</h2>
          </div>
        </div>

        <div class="legislation-layout">
          <aside class="legislation-sidebar">
            <div class="legislation-sidebar-copy">
              <p class="eyebrow">How to scan</p>
              <h3>
                <GlossaryText
                  text="Pick the legal anchor, then read what it unlocks."
                  @define="openGlossaryPopup"
                />
              </h3>
              <p>
                <GlossaryText
                  text="These are not all the same kind of object. Some are enacted laws, some are proposed bills, and several matter because agencies use them to write rules."
                  @define="openGlossaryPopup"
                />
              </p>
            </div>

            <nav class="legislation-list" aria-label="Legislation list">
              <button
                v-for="item in legislationItems"
                :key="item.id"
                type="button"
                :class="{ active: activeLegislationId === item.id }"
                @click="activeLegislationId = item.id"
              >
                <span>{{ item.shortName }}</span>
                <strong>{{ item.status }}</strong>
                <small>{{ item.sidebarBlurb }}</small>
              </button>
            </nav>
          </aside>

          <article class="legislation-detail">
            <div>
              <div class="detail-topline">
                <span>{{ selectedLegislation.year }}</span>
                <span>{{ selectedLegislation.status }}</span>
                <span>{{ selectedLegislation.domain }}</span>
              </div>
              <h3>
                <GlossaryText :text="selectedLegislation.name" @define="openGlossaryPopup" />
              </h3>
              <p>
                <GlossaryText :text="selectedLegislation.explainer" @define="openGlossaryPopup" />
              </p>

              <div class="deep-explainer">
                <h4>Policy mechanics</h4>
                <p>
                  <GlossaryText
                    :text="selectedLegislation.policyMechanics"
                    @define="openGlossaryPopup"
                  />
                </p>
              </div>

              <div class="detail-columns">
                <div>
                  <h4>Use it for</h4>
                  <p>
                    <GlossaryText
                      :text="selectedLegislation.usefulFor"
                      @define="openGlossaryPopup"
                    />
                  </p>
                </div>
                <div>
                  <h4>Watch next</h4>
                  <p>
                    <GlossaryText :text="selectedLegislation.watch" @define="openGlossaryPopup" />
                  </p>
                </div>
              </div>

              <div class="provision-list">
                <h4>What to understand</h4>
                <ul>
                  <li
                    v-for="provision in selectedLegislation.provisions"
                    :key="provision"
                  >
                    <GlossaryText :text="provision" @define="openGlossaryPopup" />
                  </li>
                </ul>
              </div>

              <div class="connection-row" aria-label="Connected policy areas">
                <span
                  v-for="connection in selectedLegislation.connections"
                  :key="connection"
                >
                  <GlossaryText :text="connection" @define="openGlossaryPopup" />
                </span>
              </div>
            </div>

            <div class="source-row">
              <a
                v-for="source in selectedLegislation.sources"
                :key="source.url"
                :href="source.url"
                target="_blank"
                rel="noreferrer"
              >
                {{ source.label }}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="fundamentals-board" aria-labelledby="framework-title">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">Core principles</p>
            <h2 id="framework-title">How to read this policy universe</h2>
          </div>
        </div>

        <div class="fundamental-grid expanded">
          <article v-for="item in fundamentals" :key="item.title">
            <h3>
              <GlossaryText :text="item.title" @define="openGlossaryPopup" />
            </h3>
            <p>
              <GlossaryText :text="item.detail" @define="openGlossaryPopup" />
            </p>
          </article>
        </div>
      </section>
    </section>

    <section v-if="activeTab === 'reference'" class="tab-panel" aria-label="Reference">
      <div class="sectioned-layout">
        <aside
          class="section-nav"
          :class="{ visible: showSectionNav }"
          aria-label="Reference sections"
        >
          <p class="eyebrow">Reference</p>
          <a href="#reference-sources">Sources</a>
          <a href="#reference-mechanisms">Mechanisms</a>
          <a href="#reference-timeline">Timeline</a>
          <a href="#reference-glossary">Glossary</a>
        </aside>

        <div class="section-stack">
          <section id="reference-sources" class="source-board" aria-labelledby="sources-title">
            <div class="source-copy">
              <p class="eyebrow">Capture universe</p>
              <h2 id="sources-title">Sources to monitor</h2>
              <p>
                Start with official records, then use research, reporting, and
                stakeholder channels to interpret the policy story around them.
              </p>
            </div>

            <div class="source-groups">
              <div v-for="group in sourceGroups" :key="group.name" class="source-group">
                <div class="source-group-heading">
                  <h3>{{ group.name }}</h3>
                  <p>{{ group.note }}</p>
                </div>

                <div class="source-directory">
                  <a
                    v-for="channel in group.channels"
                    :key="channel.name"
                    :href="channel.url"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{{ channel.type }}</span>
                    <strong>{{ channel.name }}</strong>
                    <small>{{ channel.focus }}</small>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            id="reference-mechanisms"
            class="reference-section"
            aria-labelledby="mechanisms-title"
          >
            <div class="section-heading compact">
              <div>
                <p class="eyebrow">Mechanism map</p>
                <h2 id="mechanisms-title">The six policy mechanisms to separate</h2>
              </div>
            </div>

            <div class="reference-detail-layout">
              <div class="reference-index" role="list" aria-label="Policy mechanisms">
                <button
                  v-for="concept in conceptMap"
                  :key="concept.title"
                  type="button"
                  :class="{ active: activeMechanismTitle === concept.title }"
                  @click="activeMechanismTitle = concept.title"
                >
                  <strong>{{ concept.title }}</strong>
                  <span>{{ concept.summary }}</span>
                  <small>{{ concept.examples }}</small>
                </button>
              </div>

              <aside class="reference-detail" aria-live="polite">
                <p class="eyebrow">Mechanism detail</p>
                <h3>{{ selectedMechanism.title }}</h3>
                <p>{{ selectedMechanism.summary }}</p>

                <dl class="mechanism-detail-list">
                  <div>
                    <dt>Where it shows up</dt>
                    <dd>{{ selectedMechanism.examples }}</dd>
                  </div>
                  <div>
                    <dt>Who can use it</dt>
                    <dd>{{ selectedMechanism.audience }}</dd>
                  </div>
                  <div>
                    <dt>What to inspect</dt>
                    <dd>{{ selectedMechanism.watchFor }}</dd>
                  </div>
                </dl>

                <div class="evidence-box compact">
                  <strong>Risk to watch</strong>
                  <p>{{ selectedMechanism.risk }}</p>
                </div>
              </aside>
            </div>
          </section>

          <section
            id="reference-timeline"
            class="reference-section"
            aria-labelledby="timeline-title"
          >
            <div class="section-heading compact">
              <div>
                <p class="eyebrow">Implementation timeline</p>
                <h2 id="timeline-title">How the federal stack built up</h2>
              </div>
            </div>

            <ol class="timeline-list standalone">
              <li v-for="item in implementationTimeline" :key="item.year + item.title">
                <span>{{ item.year }}</span>
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.detail }}</p>
                </div>
              </li>
            </ol>
          </section>

          <section
            id="reference-glossary"
            class="reference-section"
            aria-labelledby="glossary-title"
          >
            <div class="section-heading compact">
              <div>
                <p class="eyebrow">Glossary</p>
                <h2 id="glossary-title">Terms informed readers still need handy</h2>
              </div>

              <label class="glossary-search" for="glossary-search">
                <span>Search glossary</span>
                <input
                  id="glossary-search"
                  v-model="glossarySearch"
                  type="search"
                  autocomplete="off"
                  placeholder="Term, category, or definition"
                />
              </label>
            </div>

            <div class="reference-detail-layout glossary-detail-layout">
              <div class="reference-index glossary-index" role="list" aria-label="Glossary terms">
                <button
                  v-for="term in filteredGlossaryTerms"
                  :key="term.term"
                  type="button"
                  :class="{ active: selectedGlossaryTerm?.term === term.term }"
                  @click="activeGlossaryTerm = term.term"
                >
                  <span class="term-category">{{ term.category }}</span>
                  <strong>{{ term.term }}</strong>
                </button>
              </div>

              <aside
                v-if="selectedGlossaryTerm"
                class="reference-detail glossary-detail"
                aria-live="polite"
              >
                <span class="term-category">{{ selectedGlossaryTerm.category }}</span>
                <h3>{{ selectedGlossaryTerm.term }}</h3>
                <p>{{ selectedGlossaryTerm.meaning }}</p>
                <div class="term-context">
                  <strong>In practice</strong>
                  <p>{{ selectedGlossaryTerm.context }}</p>
                </div>
              </aside>

              <aside v-else class="reference-detail glossary-detail" aria-live="polite">
                <span class="term-category">No match</span>
                <h3>No glossary terms found</h3>
                <p>Try a broader phrase or clear the search field.</p>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </section>

    <aside
      class="floating-glossary"
      :class="{ minimized: isFloatingGlossaryMinimized }"
      aria-labelledby="floating-glossary-title"
    >
      <div class="floating-glossary-header">
        <div>
          <p class="eyebrow">Glossary</p>
          <h2 id="floating-glossary-title">Jargon lookup</h2>
        </div>
        <div class="floating-glossary-actions">
          <span>{{ glossaryTerms.length }} terms</span>
          <button
            type="button"
            :aria-expanded="!isFloatingGlossaryMinimized"
            :aria-label="isFloatingGlossaryMinimized ? 'Expand glossary lookup' : 'Minimize glossary lookup'"
            @click="isFloatingGlossaryMinimized = !isFloatingGlossaryMinimized"
          >
            {{ isFloatingGlossaryMinimized ? '+' : '-' }}
          </button>
        </div>
      </div>

      <label
        v-show="!isFloatingGlossaryMinimized"
        class="floating-glossary-search"
        for="floating-glossary-search"
      >
        <span>Look up a term</span>
        <input
          id="floating-glossary-search"
          v-model="floatingGlossarySearch"
          type="search"
          autocomplete="off"
          placeholder="Try PBM, QPA, site of care..."
        />
      </label>

      <div
        v-if="selectedFloatingGlossaryTerm && !isFloatingGlossaryMinimized"
        class="floating-term"
        aria-live="polite"
      >
        <span class="term-category">{{ selectedFloatingGlossaryTerm.category }}</span>
        <h3>{{ selectedFloatingGlossaryTerm.term }}</h3>
        <p>{{ selectedFloatingGlossaryTerm.meaning }}</p>
        <div class="term-context">
          <strong>In practice</strong>
          <p>{{ selectedFloatingGlossaryTerm.context }}</p>
        </div>
      </div>

      <div
        v-if="floatingGlossarySearch.trim() && !isFloatingGlossaryMinimized"
        class="floating-glossary-results"
        aria-label="Glossary search results"
      >
        <button
          v-for="term in floatingGlossaryResults"
          :key="term.term"
          type="button"
          :class="{ active: selectedFloatingGlossaryTerm?.term === term.term }"
          @click="showFloatingGlossaryTerm(term)"
        >
          <span>{{ term.category }}</span>
          <strong>{{ term.term }}</strong>
        </button>
        <p v-if="!floatingGlossaryResults.length">No matches. Try a broader term.</p>
      </div>
    </aside>
  </main>
</template>
