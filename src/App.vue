<script setup>
import { computed, ref } from 'vue'
import {
  conceptMap,
  fundamentals,
  glossaryTerms,
  implementationTimeline,
  legislationItems,
  newsItems,
  policyLibraryIntro,
  refreshDate,
  tabs,
  watchChannels,
} from './data/policyTracker'

const activeTab = ref('watch')
const activeLane = ref('All')
const activeSourceType = ref('All')
const activeLegislationId = ref(legislationItems[0].id)

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

const selectedLegislation = computed(() =>
  legislationItems.find((item) => item.id === activeLegislationId.value),
)

const enactedCount = computed(
  () => legislationItems.filter((item) => item.status === 'Enacted').length,
)

const proposedCount = computed(
  () => legislationItems.filter((item) => item.status !== 'Enacted').length,
)
</script>

<template>
  <main class="policy-desk">
    <section class="masthead" aria-labelledby="page-title">
      <div class="masthead-copy">
        <p class="eyebrow">Federal scope only</p>
        <h1 id="page-title">Healthcare transparency and cost policy tracker</h1>
        <p>
          A working desk for people already following the issue: latest federal
          movement on pricing data, patient billing protections, drug costs,
          commercial plan transparency, and the statutes behind them.
        </p>
      </div>

      <div class="scope-brief" aria-label="Tracker scope">
        <span>Research refresh</span>
        <strong>{{ refreshDate }}</strong>
        <dl>
          <div>
            <dt>Tracked signals</dt>
            <dd>{{ newsItems.length }}</dd>
          </div>
          <div>
            <dt>Enacted anchors</dt>
            <dd>{{ enactedCount }}</dd>
          </div>
          <div>
            <dt>Active proposals</dt>
            <dd>{{ proposedCount }}</dd>
          </div>
        </dl>
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

        <div class="news-grid">
          <article v-for="item in filteredNews" :key="item.id" class="news-item">
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
              <h3>{{ item.title }}</h3>
              <p>{{ item.summary }}</p>
              <p class="why">{{ item.whyItMatters }}</p>
              <div class="tag-row">
                <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
              </div>
              <a :href="item.url" target="_blank" rel="noreferrer">Primary or source link</a>
            </div>
          </article>
        </div>
      </section>

    </section>

    <section
      v-if="activeTab === 'learn'"
      class="tab-panel policy-library"
      aria-label="Policy library"
    >
      <section class="library-overview" aria-labelledby="library-title">
        <div>
          <p class="eyebrow">Policy library</p>
          <h2 id="library-title">A cleaner reading room for the federal stack</h2>
        </div>

        <div class="library-overview-grid">
          <article v-for="item in policyLibraryIntro" :key="item.label">
            <strong>{{ item.label }}</strong>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

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
              <h3>Pick the legal anchor, then read what it unlocks.</h3>
              <p>
                These are not all the same kind of object. Some are enacted laws,
                some are proposed bills, and several matter because agencies use
                them to write rules.
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
              <h3>{{ selectedLegislation.name }}</h3>
              <p>{{ selectedLegislation.explainer }}</p>

              <div class="deep-explainer">
                <h4>Policy mechanics</h4>
                <p>{{ selectedLegislation.policyMechanics }}</p>
              </div>

              <div class="detail-columns">
                <div>
                  <h4>Use it for</h4>
                  <p>{{ selectedLegislation.usefulFor }}</p>
                </div>
                <div>
                  <h4>Watch next</h4>
                  <p>{{ selectedLegislation.watch }}</p>
                </div>
              </div>

              <div class="provision-list">
                <h4>What to understand</h4>
                <ul>
                  <li
                    v-for="provision in selectedLegislation.provisions"
                    :key="provision"
                  >
                    {{ provision }}
                  </li>
                </ul>
              </div>

              <div class="connection-row" aria-label="Connected policy areas">
                <span
                  v-for="connection in selectedLegislation.connections"
                  :key="connection"
                >
                  {{ connection }}
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
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
          </article>
        </div>
      </section>
    </section>

    <section v-if="activeTab === 'reference'" class="tab-panel" aria-label="Reference">
      <section class="source-board" aria-labelledby="sources-title">
        <div class="source-copy">
          <p class="eyebrow">Capture universe</p>
          <h2 id="sources-title">Sources to monitor</h2>
        </div>

        <div class="source-list">
          <a
            v-for="channel in watchChannels"
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
      </section>

      <section class="reference-board" aria-labelledby="mechanisms-title">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">Mechanism map</p>
            <h2 id="mechanisms-title">The six policy mechanisms to separate</h2>
          </div>
        </div>

        <div class="concept-grid reference-wide">
          <article v-for="concept in conceptMap" :key="concept.title">
            <h3>{{ concept.title }}</h3>
            <p>{{ concept.examples }}</p>
            <span>{{ concept.risk }}</span>
          </article>
        </div>
      </section>

      <section class="reference-board" aria-labelledby="reference-title">
        <div class="section-heading compact">
          <div>
            <p class="eyebrow">Reference shelf</p>
            <h2 id="reference-title">Timeline and terms</h2>
          </div>
        </div>

        <div class="reference-layout balanced">
          <div class="reference-pane">
            <div class="pane-heading">
              <h3>Implementation timeline</h3>
              <p>The short version of how the federal stack built up.</p>
            </div>

            <ol class="timeline-list">
              <li v-for="item in implementationTimeline" :key="item.year + item.title">
                <span>{{ item.year }}</span>
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.detail }}</p>
                </div>
              </li>
            </ol>
          </div>

          <div class="reference-pane">
            <div class="pane-heading">
              <h3>Glossary</h3>
              <p>Terms that show up constantly in this policy area.</p>
            </div>

            <div class="glossary-grid">
              <article v-for="term in glossaryTerms" :key="term.term">
                <h3>{{ term.term }}</h3>
                <p>{{ term.meaning }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>
