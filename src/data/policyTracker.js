export const refreshDate = 'May 3, 2026'

export const tabs = [
  {
    id: 'watch',
    label: 'Latest federal watch',
    dek: 'News, rulemaking, litigation, enforcement, and research signals.',
  },
  {
    id: 'learn',
    label: 'Policy library',
    dek: 'Durable explainers, statutory anchors, and core principles.',
  },
  {
    id: 'reference',
    label: 'Reference',
    dek: 'Sources, mechanism map, timeline, and glossary for quick lookup.',
  },
]

export const watchChannels = [
  {
    name: 'CMS Newsroom',
    type: 'Federal',
    focus: 'Rules, fact sheets, enforcement updates, Medicare drug negotiation',
    url: 'https://www.cms.gov/newsroom',
  },
  {
    name: 'HHS Press Room',
    type: 'Federal',
    focus: 'Department-wide releases, ONC/ASTP interoperability, drug access policy',
    url: 'https://www.hhs.gov/press-room/index.html',
  },
  {
    name: 'Federal Register',
    type: 'Federal',
    focus: 'Proposed rules, final rules, notices, comment windows',
    url: 'https://www.federalregister.gov/agencies/centers-for-medicare-medicaid-services',
  },
  {
    name: 'Congress.gov',
    type: 'Federal',
    focus: 'Bill introductions, committee movement, enacted public laws',
    url: 'https://www.congress.gov/',
  },
  {
    name: 'DOL EBSA',
    type: 'Federal',
    focus: 'Employer health plans, ERISA, PBM fee disclosure, plan fiduciaries',
    url: 'https://www.dol.gov/agencies/ebsa',
  },
  {
    name: 'FTC Health Care',
    type: 'Federal',
    focus: 'PBM enforcement, drug-market competition, health care competition reports',
    url: 'https://www.ftc.gov/industry/health-care',
  },
  {
    name: 'HHS OIG',
    type: 'Federal oversight',
    focus: 'Audits and reviews of CMS transparency oversight and enforcement',
    url: 'https://oig.hhs.gov/',
  },
  {
    name: 'KFF Health News',
    type: 'Journalism',
    focus: 'Reporting on hospital transparency, patient impact, industry use of data',
    url: 'https://kffhealthnews.org/',
  },
  {
    name: 'Peterson-KFF Tracker',
    type: 'Research',
    focus: 'Affordability trends, price variation, transparency analysis',
    url: 'https://www.healthsystemtracker.org/',
  },
  {
    name: 'AJMC',
    type: 'Research',
    focus: 'Managed care research, Transparency in Coverage completeness, payer data',
    url: 'https://www.ajmc.com/',
  },
  {
    name: 'Axios Health',
    type: 'Journalism',
    focus: 'Fast signals on Congress, litigation, health system market power',
    url: 'https://www.axios.com/health-care',
  },
  {
    name: 'AHA',
    type: 'Industry',
    focus: 'Hospital-sector position, compliance resources, stakeholder proposals',
    url: 'https://www.aha.org/topics/price-transparency',
  },
]

const sourceByName = new Map(watchChannels.map((channel) => [channel.name, channel]))

export const sourceGroups = [
  {
    name: 'Primary federal record',
    note: 'Use these first to confirm whether something actually changed: agency releases, rulemaking dockets, bill text, and oversight work.',
    channels: [
      'CMS Newsroom',
      'HHS Press Room',
      'Federal Register',
      'Congress.gov',
      'DOL EBSA',
      'FTC Health Care',
      'HHS OIG',
    ].map((name) => sourceByName.get(name)).filter(Boolean),
  },
  {
    name: 'Research and reporting',
    note: 'Use these to understand consequences, data quality, patient impact, and how the policy is being interpreted outside government.',
    channels: ['KFF Health News', 'Peterson-KFF Tracker', 'AJMC', 'Axios Health']
      .map((name) => sourceByName.get(name))
      .filter(Boolean),
  },
  {
    name: 'Stakeholder signal',
    note: 'Use these to read institutional position, compliance posture, lobbying priorities, and likely implementation friction.',
    channels: ['AHA'].map((name) => sourceByName.get(name)).filter(Boolean),
  },
]

export const newsItems = [
  {
    id: 'billing-code-copyright-fight',
    date: '2026-04-30',
    label: 'Litigation signal',
    title: 'Billing-code copyright fight becomes a price-transparency story',
    source: 'Axios',
    sourceType: 'Journalism',
    lane: 'Litigation',
    tags: ['billing codes', 'hospital prices', 'data access', 'copyright'],
    summary:
      'Axios reported on a copyright dispute over a hospital billing manual that patient advocates argue is essential to making price transparency data understandable and usable.',
    whyItMatters:
      'Price files are only useful when users can decode the billing language. The legal fight turns code access into a transparency issue.',
    url: 'https://www.axios.com/2026/04/30/hospital-price-transparency-lawsuit-patients',
  },
  {
    id: 'prior-auth-drugs-proposed-rule',
    date: '2026-04-10',
    label: 'Proposed rule',
    title: 'CMS proposes prior authorization reforms for drugs',
    source: 'CMS',
    sourceType: 'Federal',
    lane: 'Rulemaking',
    tags: ['prior authorization', 'interoperability', 'Medicare Advantage', 'Medicaid', 'QHP'],
    summary:
      'CMS proposed the Interoperability Standards and Prior Authorization for Drugs rule, including shorter decision windows, drug authorization data through APIs, and more public reporting.',
    whyItMatters:
      'Access friction is a cost issue. A covered drug can still be expensive in practice if authorization delays, denials, or missing data block timely use.',
    url: 'https://www.cms.gov/newsroom/fact-sheets/2026-cms-interoperability-standards-prior-authorization-drugs-proposed-rule',
  },
  {
    id: 'hpt-2026-enforcement',
    date: '2026-04-01',
    label: 'Enforcement',
    title: 'CMS begins enforcement of updated 2026 hospital transparency requirements',
    source: 'CMS',
    sourceType: 'Federal',
    lane: 'Enforcement',
    tags: ['hospital price transparency', 'machine-readable files', 'enforcement'],
    summary:
      'CMS says enforcement of new and updated Hospital Price Transparency requirements finalized in the CY 2026 OPPS/ASC final rule starts April 1, 2026.',
    whyItMatters:
      'Hospital transparency is moving from file availability toward more standardized, comparable, actual-dollar reporting.',
    url: 'https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency',
  },
  {
    id: 'idr-march-2026-update',
    date: '2026-03-31',
    label: 'Data release',
    title: 'Federal IDR updates show No Surprises Act dispute volume still enormous',
    source: 'CMS',
    sourceType: 'Federal',
    lane: 'Implementation',
    tags: ['No Surprises Act', 'IDR', 'out-of-network billing', 'QPA'],
    summary:
      'The federal IDR update for March 2026 reports 313,828 disputes initiated in March and 285,766 disputes closed, with cumulative initiations above 5.7 million since the portal launched.',
    whyItMatters:
      'The No Surprises Act protects patients from many surprise bills, but the provider-payer payment dispute machinery remains a major cost-policy story.',
    url: 'https://www.cms.gov/nosurprises/policies-and-resources/Reports',
  },
  {
    id: 'kff-2026-cost-trends',
    date: '2026-03-17',
    label: 'Research',
    title: 'Peterson-KFF flags price transparency as a 2026 affordability trend',
    source: 'Peterson-KFF',
    sourceType: 'Research',
    lane: 'Analysis',
    tags: ['health costs', 'price variation', 'employer plans', '2026 trends'],
    summary:
      'Peterson-KFF identified price transparency momentum among the major forces shaping 2026 health costs, while noting that current data still remain hard for consumers and employers to use.',
    whyItMatters:
      'This helps the tracker connect day-to-day rulemaking with the broader affordability debate.',
    url: 'https://www.healthsystemtracker.org/chart-collection/eight-trends-shaping-2026-healthcare-costs/',
  },
  {
    id: 'kff-drug-negotiation-facts',
    date: '2026-03-11',
    label: 'Explainer',
    title: 'KFF updates key facts on Medicare drug price negotiation',
    source: 'KFF',
    sourceType: 'Research',
    lane: 'Analysis',
    tags: ['Inflation Reduction Act', 'Medicare', 'drug negotiation'],
    summary:
      'KFF updated its primer on Medicare drug negotiation to reflect second-round results and third-cycle drugs selected for prices that will take effect in 2028.',
    whyItMatters:
      'Drug negotiation is the most concrete federal cost-reduction program in the tracker, with recurring milestones every year.',
    url: 'https://www.kff.org/page/6/?p=0',
  },
  {
    id: 'pbm-comment-extension',
    date: '2026-02-27',
    label: 'Comment window',
    title: 'DOL extends comment period for PBM fee disclosure proposal',
    source: 'DOL EBSA',
    sourceType: 'Federal',
    lane: 'Rulemaking',
    tags: ['PBM', 'ERISA', 'employer plans', 'drug costs'],
    summary:
      'DOL extended the comment period for its proposed PBM fee disclosure rule to April 15, citing new ERISA provisions added by the Consolidated Appropriations Act, 2026.',
    whyItMatters:
      'Employer plan fiduciaries are becoming a central audience for drug-cost transparency, especially in self-insured plans.',
    url: 'https://www.dol.gov/newsroom/releases/ebsa/ebsa20260227',
  },
  {
    id: 'kff-health-news-hpt-industry-use',
    date: '2026-02-17',
    label: 'Reporting',
    title: 'KFF Health News reports industry is using hospital price data more than patients',
    source: 'KFF Health News',
    sourceType: 'Journalism',
    lane: 'Market use',
    tags: ['hospital price transparency', 'patients', 'employers', 'data vendors'],
    summary:
      'KFF Health News reported that federal hospital price files have become more useful to vendors, employers, and industry users than to everyday patients trying to shop for care.',
    whyItMatters:
      'This is the central product tension: transparency can be real and still fail consumers unless the app layer translates it.',
    url: 'https://kffhealthnews.org/news/article/price-transparency-trump-hospitals-insurers-health-care-costs/',
  },
  {
    id: 'ftc-express-scripts-settlement',
    date: '2026-02-04',
    label: 'Enforcement',
    title: 'FTC settlement with Express Scripts targets insulin rebate practices',
    source: 'FTC',
    sourceType: 'Federal',
    lane: 'Market oversight',
    tags: ['PBM', 'FTC', 'insulin', 'rebates', 'drug costs'],
    summary:
      'FTC announced a proposed settlement resolving allegations against Express Scripts over insulin rebating practices, with required business-practice changes and new transparency obligations.',
    whyItMatters:
      'Not all cost policy is CMS rulemaking. Competition enforcement can also reshape drug-pricing incentives.',
    url: 'https://search.ftc.gov/news-events/news/press-releases/2026/02/ftc-secures-landmark-settlement-express-scripts-lower-drug-costs-american-patients',
  },
  {
    id: 'ajmc-ghost-rates-podcast',
    date: '2026-01-20',
    label: 'Research discussion',
    title: 'AJMC digs into ghost rates and gaps in Transparency in Coverage files',
    source: 'AJMC',
    sourceType: 'Research',
    lane: 'Analysis',
    tags: ['Transparency in Coverage', 'ghost rates', 'payer data', 'data quality'],
    summary:
      'AJMC discussed how Transparency in Coverage files can include large numbers of rates for provider-service combinations that may never realistically occur.',
    whyItMatters:
      'The next generation of transparency policy has to solve data usefulness, not just data publication.',
    url: 'https://www.ajmc.com/view/transparency-in-coverage-data-to-expose-ghost-rates-and-hold-payers-accountable-david-muhlestein-phd',
  },
  {
    id: 'dol-pbm-proposed-rule',
    date: '2026-01-29',
    label: 'Proposed rule',
    title: 'DOL proposes PBM compensation disclosures for self-insured employer plans',
    source: 'DOL EBSA',
    sourceType: 'Federal',
    lane: 'Rulemaking',
    tags: ['PBM', 'ERISA', 'self-insured plans', 'drug rebates'],
    summary:
      'DOL proposed requiring PBMs and related service providers to disclose compensation, rebates, spread-pricing income, and other arrangements to plan fiduciaries.',
    whyItMatters:
      'The rule would give employers more leverage to evaluate whether pharmacy benefit contracts are reasonable under ERISA.',
    url: 'https://www.dol.gov/newsroom/releases/ebsa/ebsa20260129',
  },
  {
    id: 'ira-third-cycle-drug-selection',
    date: '2026-01-27',
    label: 'Drug pricing',
    title: 'CMS selects 15 drugs for third Medicare negotiation cycle',
    source: 'CMS',
    sourceType: 'Federal',
    lane: 'Implementation',
    tags: ['Inflation Reduction Act', 'drug prices', 'Part B', 'Part D'],
    summary:
      'CMS selected 15 high-cost drugs covered under Medicare Part D and, for the first time, drugs payable under Medicare Part B for the third cycle of Medicare drug price negotiation.',
    whyItMatters:
      'Part B inclusion expands the practical reach of the negotiation program beyond retail pharmacy benefits.',
    url: 'https://www.cms.gov/newsroom/press-releases/cms-announces-selection-drugs-third-cycle-medicare-drug-price-negotiation-program-including-first',
  },
  {
    id: 'hti-5-proposed-rule',
    date: '2025-12-22',
    label: 'Proposed rule',
    title: 'HHS proposes HTI-5 changes to certification and information blocking',
    source: 'HHS',
    sourceType: 'Federal',
    lane: 'Rulemaking',
    tags: ['21st Century Cures', 'information blocking', 'FHIR', 'health IT'],
    summary:
      'HHS, through ASTP/ONC, proposed HTI-5 changes intended to streamline certification, update information-blocking regulations, and emphasize FHIR-based APIs.',
    whyItMatters:
      'Transparency tools depend on health data moving cleanly. Information blocking and API policy shape what future cost tools can ingest.',
    url: 'https://www.hhs.gov/press-room/hhs-proposes-hti-5-rule.html',
  },
  {
    id: 'tic-proposed-rule',
    date: '2025-12-19',
    label: 'Proposed rule',
    title: 'Departments propose Transparency in Coverage standardization changes',
    source: 'CMS / DOL / Treasury',
    sourceType: 'Federal',
    lane: 'Rulemaking',
    tags: ['Transparency in Coverage', 'commercial insurance', 'machine-readable files'],
    summary:
      'CMS, DOL, and Treasury proposed payer transparency changes intended to improve accessibility, standardization, and reliability of public pricing disclosures.',
    whyItMatters:
      'The current TiC files are public but difficult to use. Standardization is the difference between raw compliance and usable market intelligence.',
    url: 'https://www.cms.gov/newsroom/fact-sheets/transparency-coverage-proposed-rule-cms-9882-p',
  },
  {
    id: 'ajmc-tic-completeness',
    date: '2025-12-09',
    label: 'Research',
    title: 'AJMC study finds major gaps in payer Transparency in Coverage data',
    source: 'AJMC',
    sourceType: 'Research',
    lane: 'Analysis',
    tags: ['Transparency in Coverage', 'payer compliance', 'data completeness'],
    summary:
      'An AJMC study of 2025 Transparency in Coverage files from Aetna, Cigna, and UnitedHealthcare found physician and outpatient data were more usable than inpatient data, with wide variation by payer and service line.',
    whyItMatters:
      'This gives the app a research-backed reason to track data quality separately from legal compliance.',
    url: 'https://www.ajmc.com/view//view/price-transparency-with-gaps-assessing-the-completeness-of-payer-transparency-in-coverage-data',
  },
  {
    id: 'hpt-cy2026-final-rule',
    date: '2025-11-21',
    label: 'Final rule',
    title: 'CY 2026 OPPS/ASC final rule updates hospital price transparency',
    source: 'CMS',
    sourceType: 'Federal',
    lane: 'Rulemaking',
    tags: ['hospital price transparency', 'OPPS', 'ASC'],
    summary:
      'CMS finalized changes intended to make hospital standard charge information more meaningful, accurate, and comparable across hospitals.',
    whyItMatters:
      'This is the regulatory backbone behind the April 2026 hospital transparency enforcement beat.',
    url: 'https://www.cms.gov/newsroom/fact-sheets/cy-2026-opps-ambulatory-surgical-center-final-rule-hospital-price-transparency-policy-changes',
  },
  {
    id: 'eo-14221',
    date: '2025-02-25',
    label: 'Executive order',
    title: 'White House directs agencies to strengthen price transparency enforcement',
    source: 'White House',
    sourceType: 'Federal',
    lane: 'Executive action',
    tags: ['Executive Order 14221', 'hospital prices', 'health plan prices'],
    summary:
      'Executive Order 14221 directed Treasury, Labor, and HHS to require actual prices rather than estimates, improve standardization, and update enforcement policies.',
    whyItMatters:
      'The order explains why 2025 and 2026 rulemaking has focused on actual-dollar prices, standardization, and compliance.',
    url: 'https://www.whitehouse.gov/presidential-actions/2025/02/making-america-healthy-again-by-empowering-patients-with-clear-accurate-and-actionable-healthcare-pricing-information/',
  },
]

const legislationBaseItems = [
  {
    id: 'aca',
    name: 'Affordable Care Act',
    shortName: 'ACA',
    status: 'Enacted',
    year: '2010',
    domain: 'Insurance transparency and accountability',
    explainer:
      'The ACA is the root statute for several consumer-facing and market-facing transparency tools, including rate review, medical loss ratio rebates, Summary of Benefits and Coverage, Open Payments, and the statutory basis for hospital standard-charge disclosure.',
    usefulFor:
      'Understanding why price transparency sits inside broader insurance market reform, not just hospital billing policy.',
    watch:
      'Rate review changes, marketplace affordability rules, MLR policy, SBC updates, Open Payments releases.',
    sources: [
      {
        label: 'CMS Medical Loss Ratio',
        url: 'https://www.cms.gov/marketplace/private-health-insurance/medical-loss-ratio',
      },
      {
        label: 'CMS Rate Review',
        url: 'https://www.cms.gov/marketplace/private-health-insurance/review-insurance-rates',
      },
    ],
  },
  {
    id: 'phsa',
    name: 'Public Health Service Act transparency authorities',
    shortName: 'PHSA',
    status: 'Enacted',
    year: '1944 onward',
    domain: 'Health plan and hospital disclosure authority',
    explainer:
      'Many modern insurance and transparency requirements are implemented by amending or interpreting the Public Health Service Act, often in parallel with ERISA and the Internal Revenue Code.',
    usefulFor:
      'Reading why hospital and insurer requirements often appear in joint HHS, Labor, and Treasury rules.',
    watch:
      'Bills that amend PHSA sections to codify hospital and insurer price transparency.',
    sources: [
      {
        label: 'Congress.gov H.R.267',
        url: 'https://www.congress.gov/bill/119th-congress/house-bill/267',
      },
    ],
  },
  {
    id: 'erisa',
    name: 'Employee Retirement Income Security Act',
    shortName: 'ERISA',
    status: 'Enacted',
    year: '1974',
    domain: 'Employer plan fiduciary duties',
    explainer:
      'ERISA governs many employer-sponsored health plans and gives DOL a central role in plan fiduciary duties, service-provider compensation, and access to plan information.',
    usefulFor:
      'Understanding why employer plans and PBM contracts are increasingly part of federal cost transparency.',
    watch:
      'PBM fee disclosures, gag-clause attestations, claims-data access, fiduciary litigation, service-provider compensation rules.',
    sources: [
      {
        label: 'DOL fiduciary responsibilities',
        url: 'https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/publications/understanding-your-fiduciary-responsibilities-under-a-group-health-plan',
      },
      {
        label: 'DOL PBM fee disclosure fact sheet',
        url: 'https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/fact-sheets/proposed-pharmacy-benefit-manager-fee-disclosure-rule',
      },
    ],
  },
  {
    id: 'hipaa-admin',
    name: 'HIPAA Administrative Simplification',
    shortName: 'HIPAA Admin',
    status: 'Enacted',
    year: '1996',
    domain: 'Health transaction standards',
    explainer:
      'HIPAA is not just privacy. Administrative Simplification gives HHS authority over electronic health care transaction standards, which matters for prior authorization and cost-related data exchange.',
    usefulFor:
      'Understanding why FHIR, eligibility, prior authorization, and pharmacy benefit transactions keep appearing in cost-policy rulemaking.',
    watch:
      'FHIR standards, prior authorization transaction standards, attachments, eligibility and benefit transactions.',
    sources: [
      {
        label: 'CMS prior authorization for drugs proposed rule',
        url: 'https://www.cms.gov/newsroom/fact-sheets/2026-cms-interoperability-standards-prior-authorization-drugs-proposed-rule',
      },
    ],
  },
  {
    id: 'bba-2015',
    name: 'Bipartisan Budget Act of 2015, Section 603',
    shortName: 'BBA 2015',
    status: 'Enacted',
    year: '2015',
    domain: 'Site-neutral Medicare payment',
    explainer:
      'Section 603 changed Medicare payment for certain new off-campus hospital outpatient departments so covered services would be paid under an applicable non-OPPS payment system.',
    usefulFor:
      'Understanding why site of care can change price, and why hospital outpatient departments are a recurring cost-policy topic.',
    watch:
      'Site-neutral payment proposals, off-campus outpatient department identifiers, payment parity bills, OPPS rulemaking.',
    sources: [
      {
        label: 'CMS 2017 OPPS final rule fact sheet',
        url: 'https://www.cms.gov/newsroom/fact-sheets/cms-finalizes-hospital-outpatient-prospective-payment-changes-2017',
      },
    ],
  },
  {
    id: 'cures',
    name: '21st Century Cures Act',
    shortName: 'Cures',
    status: 'Enacted',
    year: '2016',
    domain: 'Data access and interoperability',
    explainer:
      'The Cures Act and follow-on CMS and ONC rules matter because usable cost tools need claims, clinical, directory, and authorization data to move between systems.',
    usefulFor:
      'Connecting price transparency to data rights and app infrastructure.',
    watch:
      'Patient Access APIs, information blocking, provider directory APIs, payer-to-payer exchange, prior authorization APIs.',
    sources: [
      {
        label: 'CMS Patient Access final rule',
        url: 'https://www.cms.gov/about-cms/obrhi/interoperability/policies-and-regulations/cms-interoperability-and-patient-access-final-rule-cms-9115-f',
      },
      {
        label: 'HHS information blocking release',
        url: 'https://www.hhs.gov/press-room/hhs-crackdown-health-data-blocking.html',
      },
    ],
  },
  {
    id: 'creates-act',
    name: 'CREATES Act',
    shortName: 'CREATES',
    status: 'Enacted',
    year: '2019',
    domain: 'Generic drug competition',
    explainer:
      'The CREATES Act created a pathway for generic and biosimilar developers to address tactics that block access to samples needed for product development.',
    usefulFor:
      'Tracking cost policy that works by increasing competition rather than publishing prices.',
    watch:
      'Generic and biosimilar access, FDA competition policy, drug-market litigation.',
    sources: [
      {
        label: 'FDA generic competition overview',
        url: 'https://www.fda.gov/drugs/generic-drugs/generic-competition-and-drug-prices',
      },
    ],
  },
  {
    id: 'caa-2021',
    name: 'Consolidated Appropriations Act, 2021',
    shortName: 'CAA 2021',
    status: 'Enacted',
    year: '2020',
    domain: 'Surprise billing and commercial transparency',
    explainer:
      'Division BB contains the No Surprises Act and a transparency title. Beyond surprise billing, it created gag-clause prohibitions, prescription drug and health care spending data collection, air ambulance reporting, and related plan and provider obligations.',
    usefulFor:
      'Separating No Surprises consumer protections from the broader transparency infrastructure that affects employer plans and commercial coverage.',
    watch:
      'Gag Clause Prohibition Compliance Attestation, RxDC reporting, IDR operations, Advanced Explanation of Benefits implementation.',
    sources: [
      {
        label: 'CMS CAA 2021',
        url: 'https://www.cms.gov/marketplace/about/oversight/other-insurance-protections/consolidated-appropriations-act-2021-caa',
      },
      {
        label: 'CMS Federal IDR reports',
        url: 'https://www.cms.gov/nosurprises/policies-and-resources/Reports',
      },
    ],
  },
  {
    id: 'ira',
    name: 'Inflation Reduction Act',
    shortName: 'IRA',
    status: 'Enacted',
    year: '2022',
    domain: 'Medicare drug costs',
    explainer:
      'The IRA gave Medicare authority to negotiate prices for selected high-spend drugs and changed Medicare Part D cost exposure through provisions such as the annual out-of-pocket cap and insulin cost limits.',
    usefulFor:
      'Tracking concrete cost-reduction implementation, not just disclosure policy.',
    watch:
      'Selected drug lists, negotiation guidance, maximum fair prices, renegotiations, effective price years, Part D redesign effects.',
    sources: [
      {
        label: 'CMS negotiated prices for 2026',
        url: 'https://www.cms.gov/newsroom/fact-sheets/medicare-drug-price-negotiation-program-negotiated-prices-initial-price-applicability-year-2026',
      },
      {
        label: 'CMS third cycle selection',
        url: 'https://www.cms.gov/newsroom/press-releases/cms-announces-selection-drugs-third-cycle-medicare-drug-price-negotiation-program-including-first',
      },
    ],
  },
  {
    id: 'caa-2026',
    name: 'Consolidated Appropriations Act, 2026',
    shortName: 'CAA 2026',
    status: 'Enacted',
    year: '2026',
    domain: 'PBM and employer plan transparency',
    explainer:
      'DOL says the 2026 appropriations law amended ERISA to add provisions relating to pharmacy benefit management services, prompting DOL to extend comment on its PBM fee disclosure proposal.',
    usefulFor:
      'Watching the next stage of PBM transparency as employer plan fiduciary obligations become more specific.',
    watch:
      'DOL harmonization with new statutory PBM provisions, final PBM disclosure rule, plan sponsor implementation.',
    sources: [
      {
        label: 'DOL comment extension',
        url: 'https://www.dol.gov/newsroom/releases/ebsa/ebsa20260227',
      },
    ],
  },
  {
    id: 'price-act',
    name: 'Health Care PRICE Transparency Act',
    shortName: 'H.R.267',
    status: 'Introduced',
    year: '2025',
    domain: 'Proposed transparency statute',
    explainer:
      'This 119th Congress bill would provide statutory authority for hospital and insurer price transparency requirements, including standard charges, cash discounts, billing codes, plan charges, and consumer search tools.',
    usefulFor:
      'Watching whether regulatory transparency requirements become more explicit statutory mandates.',
    watch:
      'Committee activity in House Energy and Commerce, cosponsors, companion bills, CBO estimates.',
    sources: [
      {
        label: 'Congress.gov H.R.267',
        url: 'https://www.congress.gov/bill/119th-congress/house-bill/267',
      },
    ],
  },
  {
    id: 'patients-price-tags',
    name: 'Patients Deserve Price Tags Act',
    shortName: 'S.2355 / H.R.5582',
    status: 'Introduced',
    year: '2025',
    domain: 'Proposed transparency expansion',
    explainer:
      'House and Senate versions introduced in the 119th Congress would amend the Public Health Service Act to provide for hospital and insurer price transparency.',
    usefulFor:
      'Tracking a bipartisan framing around upfront price tags and expansion beyond the current compliance regime.',
    watch:
      'House committee referrals, Senate HELP movement, related bill links to broader cost packages.',
    sources: [
      {
        label: 'Congress.gov S.2355',
        url: 'https://www.congress.gov/bill/119th-congress/senate-bill/2355',
      },
      {
        label: 'Congress.gov H.R.5582',
        url: 'https://www.congress.gov/bill/119th-congress/house-bill/5582',
      },
    ],
  },
  {
    id: 'lowering-costs-americans-act',
    name: 'Lowering Health Care Costs for Americans Act',
    shortName: 'S.3389',
    status: 'Introduced',
    year: '2025',
    domain: 'Proposed cost and transparency package',
    explainer:
      'This 119th Congress Senate bill is a broad cost proposal. Its text includes price transparency provisions for settings such as clinical diagnostic laboratories and related services.',
    usefulFor:
      'Tracking whether Congress broadens transparency beyond hospitals and health plans into labs, imaging, ASCs, PBMs, and site-of-care policy.',
    watch:
      'Senate Finance activity, related bills, scorekeeping, section-by-section summaries.',
    sources: [
      {
        label: 'Congress.gov S.3389',
        url: 'https://www.congress.gov/bill/119th-congress/senate-bill/3389',
      },
    ],
  },
]

const legislationDetails = {
  aca: {
    sidebarBlurb:
      'Insurance-market foundation. Not just a coverage law; it created several transparency and accountability hooks.',
    policyMechanics:
      'The ACA works through market rules, public reporting, consumer disclosures, and agency implementation. Later price-transparency rules rely partly on this architecture, especially for hospital standard charges and non-grandfathered plan disclosures.',
    provisions: [
      'Medical loss ratio rules push plans to spend a minimum share of premium dollars on care and quality improvement.',
      'Rate review creates public scrutiny for certain premium increases.',
      'Summary of Benefits and Coverage gives consumers a standardized plan-summary format.',
      'Open Payments exposes certain financial relationships between industry and clinicians or teaching hospitals.',
      'Hospital standard-charge disclosure became the statutory root for later hospital price transparency rules.',
    ],
    connections: [
      'Hospital Price Transparency',
      'Transparency in Coverage',
      'Marketplace plan affordability',
      'Open Payments',
    ],
  },
  phsa: {
    sidebarBlurb:
      'The statutory chassis that many federal health coverage requirements plug into.',
    policyMechanics:
      'Modern health coverage requirements often amend the Public Health Service Act, then mirror similar obligations through ERISA and the Internal Revenue Code so they reach group health plans and issuers.',
    provisions: [
      'Creates or carries federal insurance-market requirements.',
      'Often serves as the legal home for disclosure and consumer-protection duties.',
      'Provides a route for Congress to codify regulatory transparency requirements.',
      'Shows up in current bills that would make hospital and insurer transparency more explicit in statute.',
    ],
    connections: [
      'Health Care PRICE Transparency Act',
      'Patients Deserve Price Tags Act',
      'Group and individual market rules',
    ],
  },
  erisa: {
    sidebarBlurb:
      'The employer-plan lane. Essential for self-insured commercial coverage and plan fiduciary leverage.',
    policyMechanics:
      'ERISA gives DOL authority over many employer-sponsored plans and frames plan sponsors as fiduciaries who must prudently manage plan assets, service providers, and compensation arrangements.',
    provisions: [
      'Plan fiduciaries must evaluate whether plan service arrangements are reasonable.',
      'Self-insured employer plans often need claims, fee, rebate, and network data to manage costs.',
      'CAA gag-clause rules and PBM disclosure proposals sharpen the employer-plan transparency story.',
      'Fiduciary litigation can turn transparency data into accountability pressure.',
    ],
    connections: ['DOL EBSA', 'PBM fee disclosure', 'Gag clause attestation', 'Claims data access'],
  },
  'hipaa-admin': {
    sidebarBlurb:
      'The transaction-standard layer. HIPAA is also about administrative data flow, not only privacy.',
    policyMechanics:
      'HIPAA Administrative Simplification lets HHS standardize electronic health care transactions. That matters when cost, coverage, eligibility, pharmacy benefit, and prior authorization data need to move between systems.',
    provisions: [
      'Eligibility and benefit transactions can support real-time coverage and cost information.',
      'Prior authorization standards can reduce delays and expose denial reasons.',
      'Attachment and documentation standards can make payer-provider workflows less manual.',
      'FHIR-related proposals build a bridge between legacy transactions and modern APIs.',
    ],
    connections: [
      'Prior authorization APIs',
      'Real-time prescription benefit tools',
      'FHIR standards',
      'Patient Access APIs',
    ],
  },
  'bba-2015': {
    sidebarBlurb:
      'The site-of-care anchor. It helps explain why the same service can cost more in a hospital outpatient setting.',
    policyMechanics:
      'Section 603 changed Medicare payment for certain new off-campus hospital outpatient departments. It is a key example of federal policy trying to reduce payment differences created by site of care rather than clinical complexity.',
    provisions: [
      'Targets certain off-campus provider-based hospital outpatient departments.',
      'Moves affected services away from standard OPPS payment in specified circumstances.',
      'Sets up recurring debates about site-neutral payment, hospital acquisitions, and outpatient facility fees.',
      'Connects Medicare payment policy to consumer-facing price variation.',
    ],
    connections: ['Site-neutral payment', 'OPPS rulemaking', 'Facility fees', 'Hospital outpatient departments'],
  },
  cures: {
    sidebarBlurb:
      'The data-rights and interoperability anchor behind future usable cost tools.',
    policyMechanics:
      'The Cures Act pushes the system toward electronic access, exchange, and use of health information. For price transparency, the practical point is that cost tools need claims, clinical, provider directory, formulary, and authorization data to travel.',
    provisions: [
      'Information blocking rules discourage actors from preventing lawful access to electronic health information.',
      'Patient Access APIs support consumer access to claims and encounter information.',
      'Provider directory and payer-to-payer APIs can make plan and network transitions less opaque.',
      'Prior authorization APIs connect coverage requirements and decisions to clinical workflows.',
    ],
    connections: ['Information blocking', 'FHIR APIs', 'Prior authorization', 'Health app infrastructure'],
  },
  'creates-act': {
    sidebarBlurb:
      'A competition tool for drug costs. It reduces barriers to generic and biosimilar development.',
    policyMechanics:
      'The CREATES Act is not a price-posting law. It attacks cost indirectly by helping generic and biosimilar developers obtain product samples when access is blocked by brand manufacturers or distribution restrictions.',
    provisions: [
      'Creates a legal pathway for eligible product developers to seek access to samples.',
      'Targets delay tactics that can preserve monopoly pricing.',
      'Supports generic and biosimilar competition as an affordability strategy.',
      'Pairs naturally with FDA competition policy and patent/exclusivity debates.',
    ],
    connections: ['Generic competition', 'Biosimilars', 'FDA policy', 'Prescription drug affordability'],
  },
  'caa-2021': {
    sidebarBlurb:
      'The big commercial-transparency package. No Surprises is only one part of it.',
    policyMechanics:
      'CAA 2021 combines patient billing protections with plan, provider, and data-reporting obligations. It shifts certain disputes away from patients while also giving regulators, employers, and researchers more transparency into spending and contract terms.',
    provisions: [
      'No Surprises Act protections for many emergency and certain non-emergency out-of-network bills.',
      'Federal independent dispute resolution for eligible plan-provider payment disputes.',
      'Gag-clause prohibitions that protect access to price, quality, and claims information.',
      'RxDC reporting on prescription drug and health care spending, premiums, and rebates.',
      'Good faith estimate rights for uninsured and self-pay patients.',
    ],
    connections: ['No Surprises Act', 'Federal IDR', 'RxDC', 'Gag clauses', 'Good faith estimates'],
  },
  ira: {
    sidebarBlurb:
      'The direct Medicare drug-cost intervention. It is cost reduction more than price transparency.',
    policyMechanics:
      'The IRA gives Medicare a structured negotiation program for selected high-spend drugs and redesigns Part D patient exposure. The implementation story unfolds through annual selection lists, negotiation guidance, maximum fair prices, and effective price years.',
    provisions: [
      'Medicare negotiates prices for selected high-spend single-source drugs without generic or biosimilar competition.',
      'Maximum fair prices apply in later initial price applicability years.',
      'Part D redesign changes catastrophic exposure and annual out-of-pocket costs.',
      'Insulin and vaccine provisions reduce certain beneficiary costs.',
      'Inflation rebate policies discourage price increases above inflation in Medicare.',
    ],
    connections: ['Medicare Part D', 'Medicare Part B', 'Maximum fair price', 'Drug negotiation calendar'],
  },
  'caa-2026': {
    sidebarBlurb:
      'The emerging PBM/transparency update. It is most relevant to employer plan fiduciaries.',
    policyMechanics:
      'DOL has said CAA 2026 amended ERISA with provisions related to pharmacy benefit management services. That makes it part of the next phase of PBM transparency and self-insured plan governance.',
    provisions: [
      'Adds statutory context for PBM-related ERISA obligations.',
      'Interacts with DOL proposed PBM fee disclosure requirements.',
      'Increases pressure to disclose compensation, rebates, spread pricing, and related arrangements.',
      'Gives plan fiduciaries more basis to evaluate PBM contracts and conflicts.',
    ],
    connections: ['PBM fee disclosure', 'ERISA fiduciaries', 'Self-insured plans', 'Drug benefit contracts'],
  },
  'price-act': {
    sidebarBlurb:
      'A proposal to turn regulatory hospital and insurer transparency into clearer statutory mandates.',
    policyMechanics:
      'H.R.267 would amend the Public Health Service Act to require hospital and health plan price disclosures. Its practical importance is whether Congress codifies transparency duties that have mostly lived in regulation.',
    provisions: [
      'Would require hospitals to publish standard charges, cash discounts, negotiated rates, and billing codes.',
      'Would require hospitals to publish charges for advance-scheduled services.',
      'Would require plans to publish in-network and out-of-network charges.',
      'Would require consumer tools for searching plan cost information.',
    ],
    connections: ['Hospital Price Transparency', 'Transparency in Coverage', 'Congressional codification'],
  },
  'patients-price-tags': {
    sidebarBlurb:
      'A bipartisan-style “upfront price tag” framing for expanding price transparency.',
    policyMechanics:
      'The House and Senate versions use the Public Health Service Act as the vehicle for hospital and insurer price transparency. The bill family matters because it packages transparency as a patient and purchaser right, not just a compliance file.',
    provisions: [
      'Would amend PHSA for hospital and insurer price transparency.',
      'Frames the policy around real prices before care rather than post-care bill interpretation.',
      'Related bills connect it to broader cost packages and committee activity.',
      'Useful marker for whether Congress wants transparency beyond current agency rules.',
    ],
    connections: ['H.R.5582', 'S.2355', 'Upfront prices', 'Commercial insurance'],
  },
  'lowering-costs-americans-act': {
    sidebarBlurb:
      'A broad Senate cost package. Track it as a container for possible transparency expansion.',
    policyMechanics:
      'S.3389 is broader than a single transparency bill. For this tracker, the key is whether its provisions pull labs, imaging, ASCs, PBMs, or site-of-care questions into a wider federal affordability package.',
    provisions: [
      'Introduced in the Senate and referred to Finance.',
      'Touches cost reduction more broadly than hospital and payer files.',
      'Creates a place to watch lab, diagnostic, pharmacy, and site-of-care transparency proposals.',
      'Related-bill activity can reveal which transparency ideas are gaining traction.',
    ],
    connections: ['Senate Finance', 'Diagnostics', 'PBM policy', 'Site-of-care costs'],
  },
}

export const legislationItems = legislationBaseItems.map((item) => ({
  ...item,
  sidebarBlurb:
    legislationDetails[item.id]?.sidebarBlurb ||
    'A federal anchor in the transparency and cost-policy universe.',
  policyMechanics:
    legislationDetails[item.id]?.policyMechanics ||
    'This anchor helps explain which agency, market, or stakeholder group has authority or obligations.',
  provisions: legislationDetails[item.id]?.provisions || [],
  connections: legislationDetails[item.id]?.connections || [],
}))

export const fundamentals = [
  {
    title: 'Price posting is not patient liability',
    detail:
      'Hospital and payer files expose charges, negotiated rates, and allowed amounts. A patient still needs benefit design, deductible status, network status, billing codes, and plan rules to estimate out-of-pocket cost.',
  },
  {
    title: 'The audience changes by policy',
    detail:
      'Some disclosures are built for patients, some for plan sponsors, some for researchers and developers, and some for regulators. A policy can be consumer-facing and infrastructure-facing at the same time.',
  },
  {
    title: 'Commercial insurance is a core lane',
    detail:
      'Employer-sponsored and individual market coverage are where Transparency in Coverage, CAA gag clauses, ERISA fiduciary duties, plan tools, and PBM transparency become especially important.',
  },
  {
    title: 'Transparency is not the same as affordability',
    detail:
      'Publishing prices can reveal variation and create leverage, but it does not automatically reduce prices when markets are concentrated, choices are urgent, or patients lack usable quality information.',
  },
  {
    title: 'Machine-readable files are infrastructure',
    detail:
      'MRFs are meant for computers, researchers, employers, vendors, and regulators. A patient-facing product usually needs to translate those files into a decision workflow.',
  },
  {
    title: 'Consumer tools need context',
    detail:
      'A plan estimator may show cost-sharing for a covered service, but users still need to know whether all clinicians, facility fees, labs, anesthesia, pathology, and imaging are included.',
  },
  {
    title: 'No Surprises is a protection layer',
    detail:
      'The No Surprises Act is not mainly a shopping tool for emergencies. It removes patients from many out-of-network payment fights and shifts disputes to plans and providers.',
  },
  {
    title: 'IDR affects system costs',
    detail:
      'Federal independent dispute resolution does not usually show up as a patient shopping experience, but its payment outcomes can influence premiums, provider strategy, and network negotiations.',
  },
  {
    title: 'PBMs are a transparency frontier',
    detail:
      'Drug benefits involve rebates, fees, spread pricing, formularies, specialty pharmacies, and plan fiduciary duties. PBM transparency is cost policy even when it is not called price transparency.',
  },
  {
    title: 'Site of care can change the bill',
    detail:
      'The same clinical service can be billed differently in a hospital outpatient department, ambulatory surgical center, physician office, or imaging center. Site-neutral policy is the Medicare version of this fight.',
  },
  {
    title: 'Data quality is now the debate',
    detail:
      'After several years of price-file publication, the policy frontier is completeness, standardization, comparability, ghost rates, actual-dollar reporting, and enforcement.',
  },
  {
    title: 'Primary sources and journalism do different jobs',
    detail:
      'Agency releases say what the government did. Congress.gov tracks bill status. Journalism and research explain consequences, stakeholder conflict, and whether policy is working.',
  },
]

export const revenueCycleGuide = {
  title: 'Revenue cycle field guide',
  deck:
    'How care becomes documentation, documentation becomes claims, claims become payment, and payment leaves a patient bill behind.',
  thesis:
    'The revenue cycle is not one billing step at the end of care. It is a chain of handoffs between patients, providers, EHRs, coders, clearinghouses, payers, contracts, and billing teams. Every handoff can change what gets approved, what gets paid, what gets denied, and what the patient sees.',
  steps: [
    {
      phase: '01',
      title: 'Searching for care',
      actor: 'Patient, plan, provider directory, employer tool',
      detail:
        'The process often starts before scheduling: a patient looks for a clinician, facility, or shoppable service; checks network status; compares location and availability; and may look at a plan cost estimator, hospital price file, or cash price.',
      artifacts: ['provider directory', 'benefit design', 'network status', 'published prices'],
      friction:
        'The patient may see a price signal without knowing whether every clinician, facility fee, lab, imaging order, or drug will be part of the final episode.',
    },
    {
      phase: '02',
      title: 'Scheduling, registration, and eligibility',
      actor: 'Front desk, scheduling team, registration, eligibility systems',
      detail:
        'Once care is scheduled, the provider collects demographics, insurance information, plan identifiers, referral details, and sometimes payment estimates. Eligibility and benefits checks confirm whether coverage appears active and what broad cost-sharing rules apply.',
      artifacts: ['eligibility transaction', 'referral', 'benefits check', 'estimate'],
      friction:
        'Eligibility is not a guarantee of payment. It tells the provider the plan looks active, but it does not prove medical necessity, authorization, coding, or contract terms will support payment.',
    },
    {
      phase: '03',
      title: 'Prior authorization and medical necessity',
      actor: 'Provider office, payer, utilization management vendor',
      detail:
        'For some drugs, imaging, surgeries, admissions, post-acute care, or specialty services, the provider may need payer approval before care. Prior authorization asks whether the plan agrees the service is covered and medically necessary under its rules.',
      artifacts: ['prior authorization request', 'clinical notes', 'coverage policy', 'approval or denial'],
      friction:
        'Authorization can delay care, narrow the approved service, expire before the visit, or fail to match the exact code submitted later on the claim.',
    },
    {
      phase: '04',
      title: 'Care delivery',
      actor: 'Clinicians, facility, labs, imaging, pharmacy, ancillary teams',
      detail:
        'The patient receives care. The clinical team orders services, performs procedures, administers drugs, uses supplies, and may involve multiple entities: physician group, facility, anesthesiology, pathology, radiology, laboratory, or pharmacy.',
      artifacts: ['orders', 'medications', 'supplies', 'site-of-care record'],
      friction:
        'The patient experience may feel like one visit, but billing can split into professional, facility, drug, lab, imaging, and ancillary claims.',
    },
    {
      phase: '05',
      title: 'Clinical documentation in the EHR',
      actor: 'Clinician, scribe, EHR, clinical documentation integrity team',
      detail:
        'The EHR record captures symptoms, diagnoses, orders, procedures, time, findings, medical decision-making, discharge status, and follow-up plans. This documentation becomes the evidence used for coding, authorization support, claims, audits, and appeals.',
      artifacts: ['EHR note', 'diagnosis', 'orders', 'clinical documentation'],
      friction:
        'If documentation is incomplete, inconsistent, or not specific enough, the claim may code differently, pay differently, or be denied even when care was delivered.',
    },
    {
      phase: '06',
      title: 'Coding and charge capture',
      actor: 'Coder, billing team, charge capture system, chargemaster',
      detail:
        'Coders and billing systems translate the clinical record into billing codes: diagnosis codes, procedure codes, modifiers, units, revenue codes, DRGs, APCs, or NDCs. Charge capture makes sure billable services, supplies, drugs, and facility resources are recorded.',
      artifacts: ['ICD-10', 'CPT/HCPCS', 'modifier', 'DRG/APC', 'chargemaster'],
      friction:
        'Small coding differences can change payment, patient cost sharing, medical necessity edits, prior authorization matching, and whether a service looks comparable in transparency data.',
    },
    {
      phase: '07',
      title: 'Claim creation and clearinghouse edits',
      actor: 'Billing system, claim scrubber, clearinghouse',
      detail:
        'The provider creates an electronic claim, usually an 837 transaction, and sends it through edits before it reaches the payer. Claim scrubbers and clearinghouses check format, required fields, payer rules, coding conflicts, and missing identifiers.',
      artifacts: ['837 claim', 'claim scrubber', 'clearinghouse', 'attachments'],
      friction:
        'Some problems are fixed before payer submission; others pass through and become denials, requests for records, underpayments, or patient-billing delays.',
    },
    {
      phase: '08',
      title: 'Payer adjudication',
      actor: 'Payer claims system, benefit rules, contract engine',
      detail:
        'The payer adjudicates the claim by checking eligibility, benefits, network status, authorization, coding edits, bundling rules, coverage policies, coordination of benefits, and provider contract terms. The payer determines the allowed amount and patient responsibility.',
      artifacts: ['adjudication', 'allowed amount', 'denial code', 'EOB', '835 remittance'],
      friction:
        'Adjudication can pay, deny, pend, bundle, downcode, request records, apply deductible, or assign coinsurance. The patient usually sees only the simplified EOB after many hidden rules have run.',
    },
    {
      phase: '09',
      title: 'Provider payment, denial work, and appeals',
      actor: 'Revenue cycle team, payer, contract management, denial team',
      detail:
        'After adjudication, the provider posts payer payment and remittance details, works denials, submits corrected claims or appeals, checks contract underpayments, and resolves payer takebacks or secondary billing.',
      artifacts: ['ERA', 'appeal', 'corrected claim', 'contract variance'],
      friction:
        'A claim may cycle several times before final payment. That back-office work affects provider cash flow and can delay or change what the patient is billed.',
    },
    {
      phase: '10',
      title: 'Patient billing and collections',
      actor: 'Billing office, patient, payment processor, financial assistance team',
      detail:
        'Once payer processing is posted, the patient receives a statement for deductible, copay, coinsurance, noncovered services, self-pay balances, or amounts adjusted by surprise-billing and financial-assistance rules.',
      artifacts: ['patient statement', 'payment plan', 'financial assistance', 'collections policy'],
      friction:
        'The patient bill can arrive weeks or months after care, and the patient may need to reconcile the provider statement against the EOB, estimate, network status, and legal protections.',
    },
    {
      phase: '11',
      title: 'Contracting, negotiation, and the feedback loop',
      actor: 'Provider contracting, payer network team, employers, PBMs, consultants',
      detail:
        'Behind the scenes, plans and providers negotiate fee schedules, value-based terms, network participation, drug rebates, prior authorization rules, and payment policies. Claims data then feeds the next round of negotiations, audits, transparency analysis, and benefit design.',
      artifacts: ['fee schedule', 'network contract', 'claims analytics', 'rebate arrangement'],
      friction:
        'The negotiated rate is only one layer. Actual cost depends on utilization, coding intensity, site of care, denials, rebates, benefit design, and patient steering.',
    },
  ],
  artifacts: [
    {
      name: 'EHR',
      detail:
        'The clinical source of truth for diagnoses, orders, notes, procedures, drugs, and medical necessity.',
    },
    {
      name: '837 claim',
      detail:
        'The electronic claim file providers send to payers, carrying codes, units, providers, dates, charges, and patient/plan identifiers.',
    },
    {
      name: '835 remittance / ERA',
      detail:
        'The electronic response from the payer explaining payment, adjustments, denials, and patient responsibility.',
    },
    {
      name: 'EOB',
      detail:
        'The patient-facing payer explanation of how the claim processed. It is not a bill, but it previews what the patient may owe.',
    },
    {
      name: 'Patient statement',
      detail:
        'The provider bill after payer processing, adjustments, financial assistance, and patient responsibility are posted.',
    },
  ],
  watchpoints: [
    'Eligibility does not guarantee payment.',
    'An estimate is not the same as an adjudicated claim.',
    'One clinical visit can create several claims.',
    'Prior authorization approval may not match the final submitted code.',
    'Negotiated rates do not automatically predict patient liability.',
    'Denials and appeals can change timing, payment, and patient billing.',
  ],
}

export const conceptMap = [
  {
    title: 'Publication requirements',
    summary:
      'The disclosure layer: hospitals, plans, and agencies publish rates, charges, or tools that make prices observable.',
    examples: 'Hospital standard charges, plan machine-readable files, consumer cost tools.',
    audience: 'Patients, employers, researchers, developers, regulators',
    watchFor:
      'Whether the files include billing-code specificity, actual-dollar values, update cadence, payer names, and enough context to compare like with like.',
    risk: 'Data exists, but ordinary people cannot interpret it.',
  },
  {
    title: 'Patient protection rules',
    summary:
      'The shield layer: federal rules limit when patients can be pulled into surprise out-of-network bills or left without pre-service estimates.',
    examples: 'No Surprises Act, good faith estimates, notice and consent limits.',
    audience: 'Patients, providers, plans, dispute-resolution entities',
    watchFor:
      'Which services are covered, whether consent was valid, how estimates are delivered, and where patient protections stop while payer-provider disputes continue.',
    risk: 'The patient is protected while payment fights continue behind the scenes.',
  },
  {
    title: 'Purchaser leverage',
    summary:
      'The buyer-power layer: employers and plan fiduciaries get access to price, claims, quality, fee, and rebate information so they can negotiate harder.',
    examples: 'ERISA fiduciary duties, gag-clause bans, PBM disclosures, claims data.',
    audience: 'Employers, unions, plan sponsors, benefits consultants, fiduciaries',
    watchFor:
      'Whether plan sponsors can actually obtain usable claims data, audit vendors, compare networks, inspect PBM compensation, and act on the findings.',
    risk: 'Employers have duties and data rights but may lack analytic capacity.',
  },
  {
    title: 'Market intervention',
    summary:
      'The price-setting or competition layer: federal policy changes incentives directly rather than only publishing information.',
    examples: 'Medicare drug negotiation, FTC PBM enforcement, site-neutral payment.',
    audience: 'Medicare, regulators, drug manufacturers, PBMs, hospitals, purchasers',
    watchFor:
      'Whether the intervention changes net prices, shifts costs elsewhere, triggers litigation, or changes access, networks, utilization, or market concentration.',
    risk: 'Cost reductions can trigger industry pushback, litigation, or access arguments.',
  },
  {
    title: 'Data access infrastructure',
    summary:
      'The plumbing layer: standards, APIs, and information-blocking rules determine whether cost and coverage data can move into usable workflows.',
    examples: 'FHIR APIs, prior authorization APIs, information blocking rules.',
    audience: 'Patients, app developers, EHR vendors, payers, providers',
    watchFor:
      'Whether technical standards carry the right fields, whether APIs are reliable, and whether users can connect price data with benefits, networks, and authorization rules.',
    risk: 'Technical compliance can still leave users without actionable context.',
  },
  {
    title: 'Oversight and enforcement',
    summary:
      'The accountability layer: agencies audit, penalize, report, settle, and issue guidance so transparency rules do not remain symbolic.',
    examples: 'CMS audits, civil monetary penalties, OIG reviews, FTC consent orders.',
    audience: 'Regulators, regulated entities, watchdogs, journalists, purchasers',
    watchFor:
      'The frequency of audits, size of penalties, corrective-action timelines, public naming, repeat violations, and whether enforcement improves data quality.',
    risk: 'Weak enforcement turns transparency into a paper requirement.',
  },
]

const glossaryTermBase = [
  {
    category: 'Price data',
    term: 'Allowed amount',
    meaning:
      'The amount a plan allows for a covered service. It often includes both the plan payment and the patient share.',
  },
  {
    category: 'Patient protections',
    term: 'AEOB',
    meaning:
      'Advanced Explanation of Benefits. A still-important implementation concept for giving insured patients pre-service benefit and cost information.',
  },
  {
    category: 'Insurance programs',
    term: 'ACA',
    meaning:
      'Affordable Care Act. A 2010 law that created major coverage, marketplace, plan disclosure, rate review, and transparency foundations.',
  },
  {
    category: 'Data infrastructure',
    term: 'API',
    meaning:
      'Application Programming Interface. A technical connection that lets systems exchange data in a structured way.',
  },
  {
    category: 'Care settings',
    term: 'ASC',
    meaning:
      'Ambulatory Surgical Center. A non-hospital outpatient setting for certain surgical procedures, often central to site-of-care cost comparisons.',
  },
  {
    category: 'Patient protections',
    term: 'Balance bill',
    meaning:
      'A bill for the difference between a provider charge and the amount a plan pays. The No Surprises Act limits many surprise balance bills.',
  },
  {
    category: 'Price data',
    term: 'Billing code',
    meaning:
      'A code used to identify a service, item, diagnosis, or procedure for billing and claims. Price data is hard to use without the right code.',
  },
  {
    category: 'Statutory anchor',
    term: 'CAA 2021',
    meaning:
      'Consolidated Appropriations Act, 2021. The law that includes the No Surprises Act plus broader transparency provisions such as gag-clause and RxDC requirements.',
  },
  {
    category: 'Statutory anchor',
    term: 'CAA 2026',
    meaning:
      'Consolidated Appropriations Act, 2026. Relevant here because DOL says it added ERISA provisions related to pharmacy benefit management services.',
  },
  {
    category: 'Price data',
    term: 'Cash price',
    meaning:
      'The amount a provider may accept from a patient paying directly, outside normal insurance payment.',
  },
  {
    category: 'Agency',
    term: 'CCIIO',
    meaning:
      'Center for Consumer Information and Insurance Oversight, the CMS office that handles many private insurance and marketplace rules.',
  },
  {
    category: 'Price data',
    term: 'Charge',
    meaning:
      'A list or gross price before discounts or negotiated rates. It is often not what anyone actually pays.',
  },
  {
    category: 'Agency',
    term: 'CMS',
    meaning:
      'Centers for Medicare & Medicaid Services. The HHS agency central to Medicare, Medicaid, marketplace, hospital transparency, TiC, and No Surprises implementation.',
  },
  {
    category: 'Rulemaking',
    term: 'Civil monetary penalty',
    meaning:
      'A financial penalty an agency can impose for certain violations, such as some transparency compliance failures.',
  },
  {
    category: 'Rulemaking',
    term: 'Comment window',
    meaning:
      'The period when the public can submit comments on a proposed rule before an agency finalizes policy.',
  },
  {
    category: 'Research quality',
    term: 'Completeness',
    meaning:
      'A data-quality concept: whether files include the expected providers, services, rates, and fields needed to analyze policy or prices.',
  },
  {
    category: 'Congress',
    term: 'Congress.gov',
    meaning:
      'The official federal site for bill text, sponsors, committee activity, amendments, and legislative status.',
  },
  {
    category: 'Price data',
    term: 'CPT/HCPCS',
    meaning:
      'Common procedure and billing code sets often needed to compare prices for medical services, supplies, and procedures.',
  },
  {
    category: 'Statutory anchor',
    term: 'CREATES Act',
    meaning:
      'A 2019 law aimed at helping generic and biosimilar developers obtain samples needed to develop competing products.',
  },
  {
    category: 'Statutory anchor',
    term: 'Cures Act',
    meaning:
      'The 21st Century Cures Act. Relevant here for interoperability, patient data access, APIs, and information blocking.',
  },
  {
    category: 'Research quality',
    term: 'Data quality',
    meaning:
      'A shorthand for whether published transparency data is accurate, complete, standardized, current, and usable.',
  },
  {
    category: 'Price data',
    term: 'De-identified minimum and maximum negotiated charge',
    meaning:
      'Hospital transparency fields showing the lowest and highest negotiated charges across payers without naming the payer.',
  },
  {
    category: 'Price data',
    term: 'Discounted cash price',
    meaning:
      'The price a hospital offers to a patient who pays cash or is treated as self-pay.',
  },
  {
    category: 'Agency',
    term: 'DOL EBSA',
    meaning:
      'Department of Labor Employee Benefits Security Administration, the agency office that oversees many employer health plan and ERISA issues.',
  },
  {
    category: 'Rulemaking',
    term: 'Enforcement',
    meaning:
      'Agency action to monitor compliance and respond to violations, including audits, corrective action plans, penalties, or settlements.',
  },
  {
    category: 'Statutory anchor',
    term: 'ERISA',
    meaning:
      'Employee Retirement Income Security Act. The main federal law governing many employer-sponsored benefit plans, including self-insured health plans.',
  },
  {
    category: 'Rulemaking',
    term: 'Executive order',
    meaning:
      'A presidential directive to federal agencies. It can shape agency priorities but is not the same as a statute enacted by Congress.',
  },
  {
    category: 'Rulemaking',
    term: 'Fact sheet',
    meaning:
      'An agency explainer summarizing a rule, report, or policy action. Useful for scanning, but not a substitute for the legal text.',
  },
  {
    category: 'Care settings',
    term: 'Facility fee',
    meaning:
      'A charge tied to the facility or site of care, often separate from the clinician professional fee.',
  },
  {
    category: 'Rulemaking',
    term: 'Federal Register',
    meaning:
      'The official daily publication for federal rules, proposed rules, notices, and presidential documents.',
  },
  {
    category: 'Rulemaking',
    term: 'Final rule',
    meaning:
      'A completed agency regulation after the rulemaking process. It has legal effect according to its stated effective dates and requirements.',
  },
  {
    category: 'Data infrastructure',
    term: 'FHIR',
    meaning:
      'Fast Healthcare Interoperability Resources. A modern standard used for exchanging health data through APIs.',
  },
  {
    category: 'Drug costs',
    term: 'Formulary',
    meaning:
      'A plan or PBM list of covered drugs, often organized into tiers that affect access, prior authorization, and patient cost sharing.',
  },
  {
    category: 'Agency',
    term: 'FTC',
    meaning:
      'Federal Trade Commission. Relevant here for competition policy, PBM enforcement, and health care market oversight.',
  },
  {
    category: 'Patient protections',
    term: 'Gag clause',
    meaning:
      'A contract term that blocks plans from accessing or sharing price, quality, or claims information. CAA rules prohibit these clauses in many health plan contracts.',
  },
  {
    category: 'Patient protections',
    term: 'GFE',
    meaning:
      'Good Faith Estimate. An estimate that uninsured or self-pay patients can receive before certain scheduled care.',
  },
  {
    category: 'Research quality',
    term: 'Ghost rate',
    meaning:
      'A reported payer rate for a provider-service combination that may be implausible or unlikely to occur in real care.',
  },
  {
    category: 'Price data',
    term: 'Gross charge',
    meaning:
      'A hospital list price before discounts, negotiated rates, or payer rules. It is often much higher than the amount paid.',
  },
  {
    category: 'Rulemaking',
    term: 'Guidance',
    meaning:
      'Agency material explaining how it interprets or plans to implement requirements. It is different from a statute or regulation.',
  },
  {
    category: 'Statutory anchor',
    term: 'HIPAA Administrative Simplification',
    meaning:
      'HIPAA provisions governing health care transaction standards, identifiers, and administrative data exchange, not just privacy.',
  },
  {
    category: 'Agency',
    term: 'HHS OIG',
    meaning:
      'HHS Office of Inspector General. An oversight office that audits, investigates, and evaluates HHS programs and agencies.',
  },
  {
    category: 'Care settings',
    term: 'Hospital outpatient department',
    meaning:
      'A hospital-owned outpatient setting. Services there can carry facility fees and different payment rates than physician offices.',
  },
  {
    category: 'Patient protections',
    term: 'IDR',
    meaning:
      'Independent Dispute Resolution. The federal process for certain out-of-network payment disputes under the No Surprises Act.',
  },
  {
    category: 'Data infrastructure',
    term: 'Information blocking',
    meaning:
      'A practice that interferes with lawful access, exchange, or use of electronic health information, unless an exception applies.',
  },
  {
    category: 'Price data',
    term: 'In-network rate',
    meaning:
      'A rate negotiated between a plan and an in-network provider for a covered item or service.',
  },
  {
    category: 'Drug costs',
    term: 'Inflation rebate',
    meaning:
      'A policy requiring drug manufacturers to pay rebates to Medicare when certain prices rise faster than inflation.',
  },
  {
    category: 'Data infrastructure',
    term: 'Interoperability',
    meaning:
      'The ability of systems to exchange and use health information across plans, providers, patients, and apps.',
  },
  {
    category: 'Statutory anchor',
    term: 'IRA',
    meaning:
      'Inflation Reduction Act. Relevant here for Medicare drug negotiation, Part D redesign, insulin caps, and inflation rebates.',
  },
  {
    category: 'Rulemaking',
    term: 'Litigation signal',
    meaning:
      'A lawsuit or court development that could affect how a policy is interpreted, enforced, delayed, or implemented.',
  },
  {
    category: 'Data infrastructure',
    term: 'Machine-readable file',
    meaning:
      'A public file in a structured format intended for automated processing, not casual reading.',
  },
  {
    category: 'Drug costs',
    term: 'Maximum fair price',
    meaning:
      'The Medicare negotiated price for a selected drug under the Inflation Reduction Act negotiation program.',
  },
  {
    category: 'Insurance programs',
    term: 'Medicaid',
    meaning:
      'A joint federal-state health coverage program for eligible low-income people and other groups. Federal rules can affect Medicaid managed care and prior authorization.',
  },
  {
    category: 'Insurance programs',
    term: 'Medicare Advantage',
    meaning:
      'Private Medicare plans, also called Part C, that can be affected by CMS prior authorization, transparency, and payment rules.',
  },
  {
    category: 'Price data',
    term: 'Negotiated rate',
    meaning:
      'A price agreed to by a provider and payer. Transparency rules often require payer-specific negotiated prices.',
  },
  {
    category: 'Patient protections',
    term: 'No Surprises Act',
    meaning:
      'Federal surprise-billing protections enacted in CAA 2021 for many emergency, air ambulance, and certain facility-based out-of-network bills.',
  },
  {
    category: 'Patient protections',
    term: 'Notice and consent',
    meaning:
      'A No Surprises Act concept allowing some out-of-network billing only if a patient receives required notice and voluntarily consents, with exceptions.',
  },
  {
    category: 'Medicare payment',
    term: 'OPPS',
    meaning:
      'Outpatient Prospective Payment System. Medicare payment system for many hospital outpatient department services.',
  },
  {
    category: 'Price data',
    term: 'Out-of-network allowed amount',
    meaning:
      'A plan-reported amount allowed for out-of-network services, used in Transparency in Coverage public files.',
  },
  {
    category: 'Drug costs',
    term: 'Part B',
    meaning:
      'The part of Medicare covering physician services and many outpatient drugs administered in clinical settings.',
  },
  {
    category: 'Drug costs',
    term: 'Part D',
    meaning:
      'The Medicare prescription drug benefit, delivered through private plans and central to IRA drug negotiation and redesign.',
  },
  {
    category: 'Data infrastructure',
    term: 'Patient Access API',
    meaning:
      'A CMS interoperability requirement intended to let patients access certain claims, encounter, and clinical data through apps.',
  },
  {
    category: 'Data infrastructure',
    term: 'Payer-to-payer exchange',
    meaning:
      'Data exchange between health plans when a member changes coverage, intended to preserve useful claims and clinical history.',
  },
  {
    category: 'Price data',
    term: 'Payer-specific negotiated charge',
    meaning:
      'A hospital price transparency field showing the charge negotiated with a named payer and plan.',
  },
  {
    category: 'Drug costs',
    term: 'PBM',
    meaning:
      'Pharmacy Benefit Manager. A drug-benefit intermediary that negotiates rebates, manages formularies, and contracts with pharmacies and plans.',
  },
  {
    category: 'Statutory anchor',
    term: 'PHSA',
    meaning:
      'Public Health Service Act. A statutory vehicle for many federal health coverage and transparency requirements.',
  },
  {
    category: 'Plan governance',
    term: 'Plan fiduciary',
    meaning:
      'A person or entity with duties to prudently manage a health plan and act in the interest of plan participants under ERISA.',
  },
  {
    category: 'Rulemaking',
    term: 'Proposed rule',
    meaning:
      'A draft agency regulation published for public comment before the agency decides whether and how to finalize it.',
  },
  {
    category: 'Data infrastructure',
    term: 'Provider directory API',
    meaning:
      'An API for provider and network directory information, relevant because network status shapes patient costs.',
  },
  {
    category: 'Patient protections',
    term: 'QPA',
    meaning:
      'Qualifying Payment Amount. A No Surprises Act benchmark based generally on median contracted rates for an item or service.',
  },
  {
    category: 'Insurance programs',
    term: 'QHP',
    meaning:
      'Qualified Health Plan. A plan certified to be offered on an ACA marketplace.',
  },
  {
    category: 'Drug costs',
    term: 'Rebate',
    meaning:
      'A payment or concession often negotiated in drug-benefit contracts. Rebates can affect net drug costs and incentives.',
  },
  {
    category: 'Rulemaking',
    term: 'Rulemaking',
    meaning:
      'The agency process for creating, amending, or repealing regulations, often involving proposed rules, public comment, and final rules.',
  },
  {
    category: 'Patient protections',
    term: 'RxDC',
    meaning:
      'Prescription Drug Data Collection reporting under the CAA, covering drug spending, premiums, rebates, and related health spending data.',
  },
  {
    category: 'Plan governance',
    term: 'Self-insured plan',
    meaning:
      'An employer health plan where the employer bears claims risk instead of buying fully insured coverage from an insurer.',
  },
  {
    category: 'Patient protections',
    term: 'Self-pay',
    meaning:
      'A patient who pays directly or is treated as not using insurance for a service, often triggering good faith estimate rights.',
  },
  {
    category: 'Care settings',
    term: 'Shoppable service',
    meaning:
      'A service that can generally be scheduled in advance, such as imaging, labs, or planned procedures.',
  },
  {
    category: 'Care settings',
    term: 'Site of care',
    meaning:
      'The setting where care is delivered, such as a hospital outpatient department, physician office, imaging center, or ASC.',
  },
  {
    category: 'Medicare payment',
    term: 'Site-neutral payment',
    meaning:
      'A policy idea that similar services should be paid similarly across settings, such as hospital outpatient departments and physician offices.',
  },
  {
    category: 'Drug costs',
    term: 'Spread pricing',
    meaning:
      'A PBM arrangement where the amount charged to a plan is higher than the amount paid to the pharmacy, with the PBM retaining the spread.',
  },
  {
    category: 'Research quality',
    term: 'Standardization',
    meaning:
      'Making files, fields, definitions, and formats consistent enough to compare across hospitals, plans, services, and time.',
  },
  {
    category: 'Price data',
    term: 'Standard charge',
    meaning:
      'A hospital price transparency term for charges the hospital has established for items and services, including several required charge types.',
  },
  {
    category: 'Price data',
    term: 'Transparency in Coverage',
    meaning:
      'Federal rules requiring most health plans and issuers to publish certain price files and offer consumer cost-comparison information.',
  },
  {
    category: 'Price data',
    term: 'TiC',
    meaning:
      'Transparency in Coverage. Often used as shorthand for health plan price transparency rules and files.',
  },
  {
    category: 'Revenue cycle',
    term: '837 claim',
    meaning:
      'The standard electronic health care claim transaction used to send a billable encounter from a provider or billing system to a payer. It carries patient identifiers, provider identifiers, dates of service, diagnosis and procedure codes, units, charges, and other data needed for payer processing.',
  },
  {
    category: 'Revenue cycle',
    term: '835 remittance',
    meaning:
      'The standard electronic payment and remittance transaction a payer sends back after claim processing. It explains what was paid, denied, adjusted, shifted to patient responsibility, or still requires additional action.',
  },
  {
    category: 'Revenue cycle',
    term: 'Adjudication',
    meaning:
      'The payer process for deciding how a claim should be handled under the member benefit, provider contract, coverage policy, coding rules, authorization status, and coordination-of-benefits rules.',
  },
  {
    category: 'Revenue cycle',
    term: 'Benefit design',
    meaning:
      'The structure of an insurance plan, including deductibles, copays, coinsurance, covered services, network rules, tiers, limits, and prior authorization requirements. Benefit design turns a negotiated price into a patient-specific out-of-pocket amount.',
  },
  {
    category: 'Revenue cycle',
    term: 'Charge capture',
    meaning:
      'The process of recording billable services, supplies, drugs, facility resources, and professional work after care occurs so they can be coded and included on a claim.',
  },
  {
    category: 'Revenue cycle',
    term: 'Chargemaster',
    meaning:
      'A hospital master list of billable items, services, codes, and gross charges. It is a pricing and billing input, not the same as a negotiated rate or the amount most insured patients ultimately owe.',
  },
  {
    category: 'Revenue cycle',
    term: 'Claim',
    meaning:
      'A request for payment submitted to a payer after care is delivered. A claim converts the clinical encounter into billing codes, charges, provider identifiers, plan information, and patient responsibility logic.',
  },
  {
    category: 'Revenue cycle',
    term: 'Claim scrubber',
    meaning:
      'Software that checks a claim before submission for missing fields, coding conflicts, payer-specific edits, formatting problems, or other issues that could trigger rejection or denial.',
  },
  {
    category: 'Revenue cycle',
    term: 'Clearinghouse',
    meaning:
      'An intermediary that routes electronic claims and other transactions between providers and payers, often checking format and payer rules before forwarding the transaction.',
  },
  {
    category: 'Revenue cycle',
    term: 'Clinical documentation',
    meaning:
      'The clinical record of what happened during care: symptoms, diagnoses, orders, tests, procedures, medications, time, findings, medical decision-making, discharge status, and follow-up plans. It is the evidentiary base for coding, claims, audits, denials, and appeals.',
  },
  {
    category: 'Revenue cycle',
    term: 'Denial',
    meaning:
      'A payer decision not to pay all or part of a claim as submitted. Denials can involve coverage, coding, medical necessity, authorization, eligibility, timely filing, duplicate claims, or missing records.',
  },
  {
    category: 'Revenue cycle',
    term: 'Diagnosis',
    meaning:
      'The clinical condition or reason for care documented in the record and often represented on claims using ICD-10 diagnosis codes. Diagnosis affects coverage rules, medical necessity, risk adjustment, and payment logic.',
  },
  {
    category: 'Revenue cycle',
    term: 'DRG/APC',
    meaning:
      'Payment grouping systems used in Medicare and often referenced in hospital billing. DRGs group inpatient stays, while APCs group many hospital outpatient services for payment.',
  },
  {
    category: 'Revenue cycle',
    term: 'EHR',
    meaning:
      'Electronic Health Record. The digital clinical record used by providers to document care, enter orders, review results, manage workflows, and support billing, coding, prior authorization, quality reporting, and care coordination.',
  },
  {
    category: 'Revenue cycle',
    term: 'Eligibility',
    meaning:
      'The process of checking whether a patient appears to have active coverage and what broad plan rules may apply at a point in time. Eligibility checks help registration, but they do not guarantee payment.',
  },
  {
    category: 'Revenue cycle',
    term: 'EOB',
    meaning:
      'Explanation of Benefits. The payer notice sent to a patient after a claim is processed, explaining how the claim was handled, what the plan paid, what was adjusted, and what the patient may owe. It is not the provider bill.',
  },
  {
    category: 'Revenue cycle',
    term: 'ERA',
    meaning:
      'Electronic Remittance Advice. The electronic remittance information a payer sends to a provider after claim processing, commonly associated with the 835 transaction.',
  },
  {
    category: 'Revenue cycle',
    term: 'Fee schedule',
    meaning:
      'A table of payment amounts or rates tied to services, codes, providers, or contracts. Fee schedules can be public, like many Medicare schedules, or negotiated privately between plans and providers.',
  },
  {
    category: 'Revenue cycle',
    term: 'ICD-10',
    meaning:
      'The diagnosis coding system used to report diseases, injuries, signs, symptoms, and reasons for care on claims and in administrative data.',
  },
  {
    category: 'Revenue cycle',
    term: 'Medical necessity',
    meaning:
      'A coverage concept asking whether a service is clinically appropriate under payer rules for the patient condition, setting, timing, and documentation. Medical necessity can affect prior authorization, claim payment, and appeals.',
  },
  {
    category: 'Revenue cycle',
    term: 'Modifier',
    meaning:
      'A code appended to a procedure or service code to explain a billing circumstance such as laterality, distinct services, professional versus technical components, or unusual complexity.',
  },
  {
    category: 'Revenue cycle',
    term: 'Patient responsibility',
    meaning:
      'The portion of an allowed amount or billed amount assigned to the patient after plan rules are applied, including deductibles, copays, coinsurance, noncovered services, or self-pay balances.',
  },
  {
    category: 'Revenue cycle',
    term: 'Patient statement',
    meaning:
      'The provider bill sent after payer processing, adjustments, financial assistance, and patient responsibility are posted. It is the document the patient is usually being asked to pay.',
  },
  {
    category: 'Revenue cycle',
    term: 'Prior authorization',
    meaning:
      'A payer approval process required before certain services, drugs, procedures, admissions, or post-acute care. It asks whether the payer agrees the service is covered and medically necessary under plan rules before care happens.',
  },
  {
    category: 'Revenue cycle',
    term: 'Revenue cycle',
    meaning:
      'The full administrative and financial chain that turns patient access, care delivery, documentation, coding, claims, payer adjudication, payment posting, denials, and patient billing into revenue for the provider and cost exposure for the patient or plan.',
  },
  {
    category: 'Revenue cycle',
    term: 'Revenue code',
    meaning:
      'A billing code used mainly on institutional claims to identify the department or type of service, such as emergency room, pharmacy, laboratory, operating room, or room and board.',
  },
  {
    category: 'Revenue cycle',
    term: 'Utilization management',
    meaning:
      'Plan or payer processes that review whether services are appropriate, covered, efficient, or medically necessary. Prior authorization, concurrent review, and step therapy are common utilization-management tools.',
  },
]

const glossaryMeaningByTerm = {
  'Allowed amount':
    'The amount a health plan recognizes as payable for a covered item or service under plan rules or a provider contract. It usually includes both the plan payment and the patient responsibility, so it is a better signal than a list charge but still not a complete estimate of out-of-pocket cost.',
  AEOB:
    'Advanced Explanation of Benefits. It is intended to give an insured patient pre-service information about whether a provider is in network, what the plan expects to pay, and what the patient may owe before scheduled care occurs.',
  ACA:
    'Affordable Care Act. For this tracker, the ACA matters not only as a coverage law but also as a transparency and accountability framework that created rate review, medical loss ratio rules, Summary of Benefits and Coverage, Open Payments, and authority that later supported hospital price transparency.',
  API:
    'Application Programming Interface. In health care, an API is a structured way for software systems to request and exchange data such as claims, coverage, clinical records, provider directory information, prior authorization status, or drug formulary details.',
  ASC:
    'Ambulatory Surgical Center. An ASC is a non-hospital outpatient facility where certain procedures can be performed without an overnight stay, making it an important site-of-care comparison point for planned surgeries and other scheduled services.',
  'Balance bill':
    'A bill sent to a patient for the difference between what a provider charges and what a health plan pays or allows. Balance billing becomes especially harmful when the patient had little control over provider choice, which is why the No Surprises Act targets many surprise out-of-network balance bills.',
  'Billing code':
    'A standardized code used to identify a medical service, procedure, item, diagnosis, drug, or billing category. Price transparency depends on billing codes because the same plain-language service can have multiple billable components and prices cannot be compared reliably without knowing which code is being priced.',
  'CAA 2021':
    'Consolidated Appropriations Act, 2021. In this policy area, CAA 2021 is the statute that carried the No Surprises Act and several commercial transparency provisions, including gag-clause prohibitions, RxDC reporting, good faith estimate rights, and federal IDR mechanics.',
  'CAA 2026':
    'Consolidated Appropriations Act, 2026. The tracker treats it as relevant because DOL has tied it to new ERISA provisions involving pharmacy benefit management services, making it part of the evolving PBM and employer-plan transparency story.',
  'Cash price':
    'The price a provider may accept from a patient paying directly rather than billing insurance. Cash prices can be useful for shopping, but they may apply only to a defined service package and may not include every related professional, facility, lab, imaging, anesthesia, or follow-up charge.',
  CCIIO:
    'Center for Consumer Information and Insurance Oversight. CCIIO is the CMS office responsible for many private health insurance, ACA marketplace, plan oversight, and consumer protection issues, so it is a key source for commercial insurance transparency policy.',
  Charge:
    'A provider list price before discounts, negotiated rates, benefit design, or payer rules are applied. Charges can reveal a provider billing baseline, but they often do not represent what a plan pays or what an insured patient ultimately owes.',
  CMS:
    'Centers for Medicare & Medicaid Services. CMS is the HHS agency that administers Medicare, works with states on Medicaid and CHIP, oversees many marketplace and private insurance rules, and implements major transparency policies such as Hospital Price Transparency, Transparency in Coverage, and No Surprises Act operations.',
  'Civil monetary penalty':
    'A financial penalty that an agency can impose when a regulated entity violates certain legal or regulatory requirements. In transparency policy, civil monetary penalties matter because they are one of the tools CMS and other agencies can use to push hospitals, plans, or other actors toward compliance.',
  'Comment window':
    'The public period after an agency publishes a proposed rule or request for information when stakeholders can submit written comments. Comment windows are important because agencies often use the record to revise definitions, timelines, file formats, enforcement approaches, and exceptions before finalizing policy.',
  Completeness:
    'A data-quality measure describing whether expected records, fields, providers, services, rates, and identifiers are present. A transparency file can be public but still incomplete if it omits important service lines, lacks provider detail, excludes relevant negotiated rates, or fails to include fields needed for comparison.',
  'Congress.gov':
    'The official federal website for congressional bills, resolutions, public laws, sponsors, cosponsors, committee activity, amendments, and legislative status. It is the best starting point for confirming whether a proposal is merely introduced, moving through committee, passed by one chamber, or enacted.',
  'CPT/HCPCS':
    'Common coding systems used to identify physician services, procedures, supplies, outpatient services, and other billable items. CPT and HCPCS codes are central to price comparison because they let researchers, plans, employers, and patients map a service description to the billed unit used in claims and transparency files.',
  'CREATES Act':
    'A 2019 law designed to reduce tactics that block generic and biosimilar competition by helping developers obtain product samples needed for approval work. It belongs in the cost-policy universe because it tries to lower prices through competition rather than direct price disclosure.',
  'Cures Act':
    'The 21st Century Cures Act. For this tracker, the Cures Act is relevant because it supports health data access, interoperability, APIs, and information-blocking rules that can help future cost tools combine claims, clinical, network, and coverage information.',
  'Data quality':
    'A broad term for whether transparency data is accurate, complete, current, standardized, comparable, and usable. Data quality is now a central policy issue because publication alone does not help consumers or purchasers if the files contain missing values, implausible rates, inconsistent formats, or ambiguous identifiers.',
  'De-identified minimum and maximum negotiated charge':
    'Hospital transparency fields showing the lowest and highest negotiated charges a hospital has across payers for an item or service without identifying the payer. These fields reveal price spread, but they are less actionable than payer-specific negotiated charges because the user cannot tell which plan received which rate.',
  'Discounted cash price':
    'The price a hospital makes available to a patient who pays cash or is treated as self-pay for a given item or service. It is one required hospital transparency charge type, but the real usefulness depends on whether the price is complete, current, and tied to a clearly defined service bundle.',
  'DOL EBSA':
    'Department of Labor Employee Benefits Security Administration. EBSA oversees many employer-sponsored benefit plan issues under ERISA, including fiduciary duties, service-provider compensation, gag-clause attestations, and PBM or claims-data transparency for group health plans.',
  Enforcement:
    'Agency activity that monitors compliance and responds to violations through audits, notices, corrective action plans, penalties, settlements, guidance, or public reporting. In price transparency, enforcement is what determines whether legal requirements become meaningful operating expectations.',
  ERISA:
    'Employee Retirement Income Security Act. ERISA governs many employer-sponsored benefit plans, including self-insured health plans, and gives DOL a central role in fiduciary duties, plan governance, service-provider compensation, claims-data access, and PBM transparency.',
  'Executive order':
    'A presidential directive to federal agencies about priorities, processes, or policy goals. An executive order can strongly shape price-transparency enforcement and rulemaking, but it usually needs agency action to create detailed obligations for hospitals, plans, or other regulated entities.',
  'Fact sheet':
    'A plain-language agency summary of a rule, proposal, enforcement action, report, or policy initiative. Fact sheets are useful for fast orientation, but the precise legal requirements usually sit in statutes, regulations, Federal Register text, subregulatory guidance, or enforcement documents.',
  'Facility fee':
    'A charge associated with the facility or site where care is delivered, separate from the professional fee charged by a clinician. Facility fees are central to site-of-care cost differences because a service delivered in a hospital-owned outpatient setting may generate additional facility billing.',
  'Federal Register':
    'The official daily publication for federal agency rules, proposed rules, notices, presidential documents, and requests for comment. It is the authoritative place to read proposed and final regulatory text, agency reasoning, effective dates, and comment deadlines.',
  'Final rule':
    'An agency regulation issued after the rulemaking process is complete. A final rule sets legally operative requirements according to its effective dates and compliance timelines, although later guidance, litigation, enforcement discretion, or new rulemaking can change implementation.',
  FHIR:
    'Fast Healthcare Interoperability Resources. FHIR is a modern standard for structuring and exchanging health data through APIs, and it is increasingly important for patient access, payer data exchange, prior authorization, provider directories, and app-based health tools.',
  Formulary:
    'A health plan or PBM list of covered prescription drugs, usually organized into tiers and rules that affect access and cost sharing. Formularies can determine whether a drug is preferred, requires prior authorization, has step therapy, or carries high patient cost exposure.',
  FTC:
    'Federal Trade Commission. The FTC matters for health care costs because it handles competition and consumer protection issues, including PBM practices, drug-market conduct, mergers, deceptive claims, and market behavior that can affect prices or access.',
  'Gag clause':
    'A contract term that prevents a plan, employer, or other purchaser from accessing, using, or sharing price, quality, or claims information. Federal gag-clause prohibitions are meant to stop vendors, providers, networks, or administrators from blocking the data needed for cost oversight.',
  GFE:
    'Good Faith Estimate. Under current federal surprise-billing rules, GFEs give uninsured or self-pay patients an estimate of expected charges before certain scheduled services, and they are part of the broader movement toward pre-service cost information.',
  'Ghost rate':
    'A rate appearing in a transparency file for a provider-service combination that may be implausible, inactive, duplicative, or unlikely to be used in real care. Ghost rates matter because they can inflate file size and distort analysis if researchers treat every posted rate as a practical market price.',
  'Gross charge':
    'A hospital list price before discounts, payer contracts, negotiated rates, or benefit rules are applied. Gross charges often exceed the amounts paid by insurers or patients, but they remain part of hospital transparency because they show the starting charge-master price.',
  Guidance:
    'Agency material that explains how the agency interprets, implements, or intends to enforce a statute or regulation. Guidance can be essential for operational compliance, but it is different from a statute enacted by Congress or a final rule adopted through rulemaking.',
  'HIPAA Administrative Simplification':
    'The HIPAA provisions that standardize certain health care transactions, identifiers, and administrative data exchange. In cost policy, this side of HIPAA matters for eligibility, claims, prior authorization, attachments, and other transactions that can make coverage and cost information move more efficiently.',
  'HHS OIG':
    'HHS Office of Inspector General. OIG audits, investigates, and evaluates HHS programs and agencies, so its reports can reveal whether CMS oversight, transparency enforcement, program integrity, or health care payment policies are working as intended.',
  'Hospital outpatient department':
    'A hospital-owned outpatient setting where patients receive services without inpatient admission. Hospital outpatient departments are important in cost policy because ownership and billing status can produce facility fees and payment levels that differ from independent physician offices or ASCs.',
  IDR:
    'Independent Dispute Resolution. Under the No Surprises Act, federal IDR is the process used for certain out-of-network payment disputes between plans and providers after the patient is removed from the middle of the billing fight.',
  'Information blocking':
    'A practice that is likely to interfere with lawful access, exchange, or use of electronic health information unless a recognized exception applies. Information-blocking policy matters because transparency and cost tools require usable data movement, not only a legal right to data in theory.',
  'In-network rate':
    'The price or payment amount negotiated between a health plan and an in-network provider for a covered item or service. It is often more relevant than a list charge for insured patients, but it still must be combined with benefit design to estimate out-of-pocket cost.',
  'Inflation rebate':
    'A policy requiring drug manufacturers to pay rebates to Medicare when certain drug prices rise faster than inflation. Inflation rebates are a cost-control mechanism because they change manufacturer incentives even if the rebate is not shown as a direct discount at the pharmacy counter.',
  Interoperability:
    'The ability of different health information systems to exchange, receive, interpret, and use data. In this policy area, interoperability matters because price, claims, clinical, network, authorization, and benefit data must connect before a consumer-facing cost tool can be truly useful.',
  IRA:
    'Inflation Reduction Act. For health costs, the IRA is important because it created Medicare drug price negotiation, inflation rebates, Part D redesign, insulin cost limits, and other changes that affect drug spending and beneficiary exposure.',
  'Litigation signal':
    'A lawsuit, court ruling, settlement, or legal development that could affect whether a policy is delayed, narrowed, expanded, or enforced. Litigation signals are tracked because health cost policies often continue to evolve after rulemaking through judicial review and compliance disputes.',
  'Machine-readable file':
    'A structured public data file designed for automated processing by computers rather than ordinary reading by patients. Hospital and payer machine-readable files are raw infrastructure for comparison tools, employer analysis, research, and enforcement, not usually the final consumer experience.',
  'Maximum fair price':
    'The negotiated price for a selected drug under the Medicare Drug Price Negotiation Program created by the IRA. The maximum fair price applies according to specific price applicability years and is the headline output of the federal negotiation process.',
  Medicaid:
    'A joint federal-state health coverage program for eligible low-income people, children, pregnant people, people with disabilities, and other groups. Medicaid cost and transparency policy can involve managed care, prior authorization, access rules, state variation, and CMS oversight.',
  'Medicare Advantage':
    'Private Medicare coverage, also called Part C, offered by plans that contract with CMS to provide Medicare benefits. Medicare Advantage matters here because prior authorization, network design, supplemental benefits, payment rules, and data exchange can affect access and costs.',
  'Negotiated rate':
    'A price agreed to by a provider and payer for an item or service, usually through a network contract. Negotiated rates are central to price transparency because they reveal market variation, but they do not by themselves show quality, total episode cost, or patient liability.',
  'No Surprises Act':
    'Federal surprise-billing protections enacted as part of CAA 2021. The law limits many emergency, air ambulance, and facility-based out-of-network bills, while creating notice-and-consent rules and a federal IDR process for eligible plan-provider payment disputes.',
  'Notice and consent':
    'A No Surprises Act process that may allow some out-of-network billing if the patient receives required notice and voluntarily consents before care. It is subject to important limits, including restrictions for emergencies and certain ancillary services where patients cannot realistically choose the clinician.',
  OPPS:
    'Outpatient Prospective Payment System. OPPS is the Medicare payment system for many hospital outpatient department services, and it is central to debates about facility fees, hospital outpatient spending, and site-neutral payment.',
  'Out-of-network allowed amount':
    'A plan-reported amount allowed for out-of-network services, used in Transparency in Coverage public files. It can help analysts understand plan payment patterns outside networks, but patient exposure also depends on balance-billing protections and cost-sharing rules.',
  'Part B':
    'The part of Medicare that covers physician services, outpatient care, durable medical equipment, preventive services, and many clinician-administered drugs. Part B is increasingly important to drug-pricing policy because selected Part B drugs can enter Medicare negotiation cycles.',
  'Part D':
    'The Medicare outpatient prescription drug benefit, delivered through private drug plans or Medicare Advantage drug plans. Part D is central to federal drug-cost policy because formularies, rebates, negotiation, beneficiary cost sharing, and IRA redesign all run through it.',
  'Patient Access API':
    'A CMS interoperability requirement designed to let patients access certain claims, encounter, and clinical information through third-party apps. It is relevant to cost tools because personalized claims and coverage context can improve estimates beyond generic posted prices.',
  'Payer-to-payer exchange':
    'A data exchange process between health plans when a member changes coverage. The goal is to preserve useful claims, encounter, and clinical history so patients and new plans do not lose context that can affect care management, coverage, and cost decisions.',
  'Payer-specific negotiated charge':
    'A hospital price transparency field showing the charge negotiated with a named payer and plan for an item or service. It is one of the most useful hospital price fields because it ties a specific rate to a specific payer relationship rather than showing only a range.',
  PBM:
    'Pharmacy Benefit Manager. PBMs administer drug benefits for plans and employers, negotiate rebates and fees, manage formularies and pharmacy networks, process claims, and can influence both net plan costs and patient cost sharing.',
  PHSA:
    'Public Health Service Act. PHSA is a statutory home for many federal health coverage and transparency requirements, often paired with parallel amendments to ERISA and the Internal Revenue Code so rules reach insurers and group health plans.',
  'Plan fiduciary':
    'A person or entity with legal duties to prudently manage a benefit plan and act in the interest of plan participants and beneficiaries. In health plans, fiduciary questions increasingly involve access to claims data, vendor fees, PBM compensation, network design, and plan spending oversight.',
  'Proposed rule':
    'A draft regulation published by an agency before it issues a final rule. Proposed rules explain the agency approach, ask for public comment, and signal future obligations, but they are not the final legal requirements unless and until adopted.',
  'Provider directory API':
    'An API that makes provider and network directory information available in a structured format. Provider directory data is crucial for cost transparency because network status often determines whether a service is covered at in-network rates or exposes the patient to higher costs.',
  QPA:
    'Qualifying Payment Amount. Under the No Surprises Act, the QPA is generally tied to median contracted rates for an item or service and is used in patient cost-sharing calculations and federal IDR disputes.',
  QHP:
    'Qualified Health Plan. A QHP is a plan certified to be sold on an ACA marketplace and subject to marketplace standards, including rules about benefits, networks, actuarial value, consumer information, and federal or state oversight.',
  Rebate:
    'A payment, discount, or concession often negotiated in prescription drug contracts among manufacturers, PBMs, plans, and other intermediaries. Rebates can reduce net costs for a plan or PBM while leaving list prices and patient cost sharing high depending on contract design.',
  Rulemaking:
    'The formal agency process for creating, changing, or repealing regulations. Rulemaking usually moves from proposal to public comment to final rule, and it is where broad statutory authority becomes operational details such as definitions, file formats, deadlines, and penalties.',
  RxDC:
    'Prescription Drug Data Collection reporting required under CAA 2021. RxDC reporting collects information from plans and issuers about prescription drug spending, premiums, rebates, health care spending, and other data used by regulators to understand cost trends.',
  'Self-insured plan':
    'An employer health plan where the employer bears the financial risk for claims rather than buying fully insured coverage from an insurer. Self-insured plans are central to employer cost policy because the sponsor has direct exposure to claims spending and stronger incentives to scrutinize vendors.',
  'Self-pay':
    'A patient payment status where the person pays directly or is treated as not using insurance for a service. Self-pay status can trigger good faith estimate rights and cash-price questions, but it may also affect whether spending counts toward insurance deductibles.',
  'Shoppable service':
    'A service that can generally be scheduled in advance, such as imaging, labs, colonoscopy, joint replacement, or other planned procedures. Shoppable services are the part of price transparency most likely to support comparison behavior because the patient may have time to choose among providers or settings.',
  'Site of care':
    'The physical and billing setting where care is delivered, such as a hospital outpatient department, physician office, ASC, imaging center, emergency department, or pharmacy. Site of care can change facility fees, negotiated rates, Medicare payment, and patient cost sharing for similar clinical services.',
  'Site-neutral payment':
    'A policy approach that would pay similar rates for similar services regardless of whether they are delivered in a hospital outpatient department, physician office, or other setting. The idea is to reduce payment differences driven by ownership or billing location rather than clinical complexity.',
  'Spread pricing':
    'A PBM payment arrangement where the PBM charges the plan more for a drug claim than it pays the pharmacy and keeps the difference. Spread pricing is a transparency issue because plan sponsors may not see the retained margin without detailed pharmacy claims and compensation reporting.',
  Standardization:
    'The process of making data fields, file layouts, definitions, codes, formats, and reporting requirements consistent across organizations. Standardization is what turns separate compliance files into comparable information that can support analytics, enforcement, purchaser leverage, and consumer tools.',
  'Standard charge':
    'A hospital price transparency term for charges the hospital has established for items and services. The term includes several required charge types, such as gross charge, discounted cash price, payer-specific negotiated charge, and de-identified minimum and maximum negotiated charges.',
  'Transparency in Coverage':
    'Federal rules requiring most group health plans and health insurance issuers to publish machine-readable price files and provide consumer cost-comparison information. TiC is the payer-side counterpart to hospital price transparency and is central to commercial insurance price data.',
  TiC:
    'Transparency in Coverage. The shorthand usually refers to the health plan price transparency rules, especially public machine-readable files for in-network negotiated rates and out-of-network allowed amounts plus consumer cost-comparison tool requirements.',
}

const glossaryContextByTerm = {
  'Allowed amount':
    'In practice, this is closer to the economic price than a gross charge, but it still may not equal the patient bill because deductibles, coinsurance, copays, and coverage rules come next.',
  AEOB:
    'In practice, AEOBs would connect provider estimates with plan benefits before care, which is why they matter for turning transparency into a usable shopping workflow.',
  ACA:
    'In practice, the ACA created several disclosure and accountability hooks that later transparency rules build on, including plan summaries, rate review, medical loss ratio rules, and hospital standard-charge authority.',
  API:
    'In practice, APIs are how cost tools can move beyond static files by pulling claims, benefits, directories, authorization status, or formulary data into an app.',
  ASC:
    'In practice, ASCs are important comparison points because many scheduled procedures can cost less outside hospital outpatient departments when quality and clinical appropriateness are similar.',
  'Balance bill':
    'In practice, surprise balance bills were a major target of federal reform because patients often could not choose every clinician involved in emergency or facility-based care.',
  'Billing code':
    'In practice, codes are the join key for price comparison. Without the right CPT, HCPCS, DRG, NDC, or revenue code, a published price may not map to the service a patient is actually seeking.',
  'CAA 2021':
    'In practice, CAA 2021 is the main modern statute tying together surprise-billing protections, commercial plan transparency, gag-clause bans, RxDC reporting, and good faith estimates.',
  'CAA 2026':
    'In practice, CAA 2026 matters because PBM and employer-plan transparency is moving from general concern toward more specific fiduciary and compensation disclosure duties.',
  'Cash price':
    'In practice, cash prices can sometimes beat insured out-of-pocket costs, but patients need to understand whether paying cash affects deductible credit, follow-up billing, or bundled services.',
  CCIIO:
    'In practice, CCIIO is a key office to watch for private insurance rules, marketplace policy, CAA implementation, and health plan transparency guidance.',
  Charge:
    'In practice, charges are useful as a disclosure baseline but can be misleading if treated as the expected price. Negotiated rates, cash prices, and allowed amounts are usually more actionable.',
  CMS:
    'In practice, CMS is the central federal agency for this tracker because it writes and enforces much of the hospital, plan, Medicare, Medicaid, and No Surprises implementation machinery.',
  'Civil monetary penalty':
    'In practice, penalties are one way agencies make transparency rules real. Their size, frequency, and publicity influence whether noncompliance feels cheaper than compliance.',
  'Comment window':
    'In practice, comment windows are where hospitals, plans, employers, patient advocates, vendors, and researchers can shape final rules before requirements lock in.',
  Completeness:
    'In practice, incomplete data can make a technically compliant file unusable. Missing providers, rates, codes, or service lines can distort comparisons and weaken purchaser leverage.',
  'Congress.gov':
    'In practice, Congress.gov is the source of truth for bill text and legislative movement, which helps separate introduced proposals from enacted policy.',
  'CPT/HCPCS':
    'In practice, these codes are essential for shopping and analysis because the same plain-English service can map to different billable items depending on setting, complexity, and bundled components.',
  'CREATES Act':
    'In practice, this is a drug-cost competition tool rather than a price-posting law. It matters because more generic or biosimilar competition can lower prices without a consumer shopping interface.',
  'Cures Act':
    'In practice, Cures Act policy is the data-access backbone for future tools that combine clinical, claims, coverage, network, and price information.',
  'Data quality':
    'In practice, data quality is now one of the main fights. Price files can exist and still fail if values are stale, inconsistent, implausible, missing, or impossible to compare.',
  'De-identified minimum and maximum negotiated charge':
    'In practice, these fields show the range of negotiated hospital prices without naming payers. They can reveal variation but are less useful than payer-specific rates for precise comparisons.',
  'Discounted cash price':
    'In practice, this is one of the most patient-facing hospital price fields, but it may not cover every professional, facility, lab, anesthesia, pathology, or follow-up charge.',
  'DOL EBSA':
    'In practice, EBSA is the federal office to watch for employer-plan transparency, ERISA fiduciary duties, gag-clause attestations, PBM compensation disclosure, and plan data access.',
  Enforcement:
    'In practice, enforcement determines whether transparency is a live accountability system or a quiet filing exercise. Watch audits, corrective action, penalties, settlements, and public reporting.',
  ERISA:
    'In practice, ERISA is the legal frame for many self-insured employer plans, which makes it central to claims-data access, fiduciary duties, PBM contracts, and plan sponsor cost control.',
  'Executive order':
    'In practice, an executive order can set agency priorities and deadlines, but it usually needs rulemaking, guidance, or enforcement action to change regulated-party obligations.',
  'Fact sheet':
    'In practice, fact sheets are helpful for fast reading, but the controlling detail usually lives in the statute, regulation, preamble, guidance, or enforcement document.',
  'Facility fee':
    'In practice, facility fees are a major reason the same service can cost more in a hospital-owned setting than in an independent office or clinic.',
  'Federal Register':
    'In practice, the Federal Register is where proposed rules, final rules, notices, comment deadlines, and official agency explanations appear.',
  'Final rule':
    'In practice, final rules turn policy proposals into binding requirements, subject to effective dates, compliance timelines, litigation, and later guidance.',
  FHIR:
    'In practice, FHIR is one of the standards that can let apps receive structured health data, which is necessary for personalized cost and coverage tools.',
  Formulary:
    'In practice, formularies shape whether a drug is covered, what tier it sits on, whether prior authorization applies, and what the patient pays at the pharmacy.',
  FTC:
    'In practice, FTC activity matters because health care cost policy is not only CMS rulemaking. Competition enforcement can affect PBMs, drug markets, provider consolidation, and deceptive practices.',
  'Gag clause':
    'In practice, gag clauses can stop employers from seeing the claims and price information they need to manage plan spending. CAA rules are meant to break that information lockup.',
  GFE:
    'In practice, GFEs matter most for uninsured and self-pay patients today, and they preview the broader idea of giving people expected costs before scheduled care.',
  'Ghost rate':
    'In practice, ghost rates can make transparency files look richer than they are. Analysts need to distinguish real provider-service relationships from rates that are unlikely to be used.',
  'Gross charge':
    'In practice, gross charges can anchor hospital charge masters but often overstate real payment. They are useful for context, not for predicting most insured patient costs.',
  Guidance:
    'In practice, guidance often explains how agencies expect regulated entities to comply, but it may not carry the same legal force as a statute or final rule.',
  'HIPAA Administrative Simplification':
    'In practice, this part of HIPAA supports standardized transactions for eligibility, claims, prior authorization, and other administrative data needed for lower-friction cost tools.',
  'HHS OIG':
    'In practice, OIG reports can reveal whether federal programs and enforcement systems are working, including gaps in CMS oversight or transparency compliance.',
  'Hospital outpatient department':
    'In practice, hospital outpatient departments are central to site-of-care debates because ownership and billing setting can change the facility component of a bill.',
  IDR:
    'In practice, IDR protects patients from being the payment battleground, but its volume, outcomes, and administrative costs can still influence premiums and network strategy.',
  'Information blocking':
    'In practice, information blocking rules matter because price transparency tools need data to flow. A right on paper is weaker if systems or business practices block access.',
  'In-network rate':
    'In practice, in-network rates are more relevant to commercially insured patients than list charges, but the patient share still depends on benefit design and accumulated spending.',
  'Inflation rebate':
    'In practice, inflation rebates are meant to discourage drug price increases above inflation in Medicare, affecting manufacturer incentives even when the patient never sees the rebate directly.',
  Interoperability:
    'In practice, interoperability is the difference between isolated records and connected workflows. Cost tools need data from plans, providers, pharmacies, directories, and authorization systems.',
  IRA:
    'In practice, the IRA is the clearest federal cost-reduction statute in this tracker because it changes Medicare drug pricing and beneficiary exposure, not just disclosure.',
  'Litigation signal':
    'In practice, litigation can pause, narrow, expand, or clarify policy. A rule can be final and still face years of court-shaped implementation.',
  'Machine-readable file':
    'In practice, MRFs are infrastructure for analysts and apps, not a patient shopping screen. The product challenge is translating them into clear comparisons.',
  'Maximum fair price':
    'In practice, maximum fair prices are the output of Medicare negotiation for selected drugs, with implementation staggered by price applicability year.',
  Medicaid:
    'In practice, Medicaid cost policy differs by state and delivery system, but federal CMS rules can still affect managed care, prior authorization, access, and transparency.',
  'Medicare Advantage':
    'In practice, Medicare Advantage plans are private plans inside Medicare, so CMS rules on prior authorization, networks, data exchange, and payment can affect patient costs and access.',
  'Negotiated rate':
    'In practice, negotiated rates show contractual prices between payers and providers. They are core to market comparison but do not automatically reveal quality or patient liability.',
  'No Surprises Act':
    'In practice, the NSA is a patient protection law first. It limits many surprise bills, then routes eligible payment fights into notice, consent, QPA, and IDR machinery.',
  'Notice and consent':
    'In practice, notice and consent is supposed to be a narrow exception, not a loophole. Emergency services and certain ancillary providers generally cannot use it to waive protections.',
  OPPS:
    'In practice, OPPS is central to hospital outpatient payment and site-of-care policy because Medicare rates can differ by setting even for similar services.',
  'Out-of-network allowed amount':
    'In practice, this field helps show what plans allow for out-of-network care, but patients need to know balance-billing protections and cost-sharing rules too.',
  'Part B':
    'In practice, Part B matters for drugs administered by clinicians, durable medical equipment, and outpatient services, including the newer reach of Medicare drug negotiation.',
  'Part D':
    'In practice, Part D is the retail prescription drug benefit where formularies, tiers, rebates, negotiation, and IRA redesign are especially visible.',
  'Patient Access API':
    'In practice, this API can help patients retrieve claims and encounter data through apps, which can support more personalized cost and coverage tools.',
  'Payer-to-payer exchange':
    'In practice, payer-to-payer exchange is meant to reduce data loss when people switch plans, helping preserve claims history and care context.',
  'Payer-specific negotiated charge':
    'In practice, this hospital field is powerful because it names the payer and plan tied to a negotiated charge, making comparison more concrete than de-identified ranges.',
  PBM:
    'In practice, PBMs influence drug costs through formulary placement, rebates, pharmacy networks, spread pricing, specialty pharmacy rules, and contract terms with plans.',
  PHSA:
    'In practice, PHSA is often amended alongside ERISA and the tax code so federal coverage rules reach insurers, group health plans, and individual market products.',
  'Plan fiduciary':
    'In practice, plan fiduciaries may need data to evaluate vendors, fees, rebates, networks, and claims spending. Transparency can become evidence for fiduciary oversight.',
  'Proposed rule':
    'In practice, proposed rules are where agencies show their intended approach and ask for public input. They are important signals but not final obligations.',
  'Provider directory API':
    'In practice, provider directory data helps determine network status, and network status is often the difference between predictable cost sharing and expensive surprises.',
  QPA:
    'In practice, the QPA is a key benchmark in No Surprises Act disputes and patient cost-sharing calculations, so its methodology has been heavily contested.',
  QHP:
    'In practice, QHP rules shape what marketplace plans must cover, disclose, and report, which matters for ACA consumers comparing coverage.',
  Rebate:
    'In practice, rebates can lower net plan or PBM costs while leaving list prices and patient cost sharing high, depending on benefit design and pass-through terms.',
  Rulemaking:
    'In practice, rulemaking is where broad statutory authority becomes operational detail, including definitions, file formats, enforcement dates, exemptions, and penalties.',
  RxDC:
    'In practice, RxDC reporting gives regulators a structured view of drug spending, premiums, rebates, and health spending trends across plans and issuers.',
  'Self-insured plan':
    'In practice, self-insured employers have more direct exposure to claims costs, which makes transparency data, PBM contracts, and fiduciary oversight especially important.',
  'Self-pay':
    'In practice, self-pay status can trigger different estimate rights and prices, but patients need to know whether choosing self-pay affects insurance credit or later billing.',
  'Shoppable service':
    'In practice, shoppable services are where price transparency can be most actionable because patients often have time to compare settings, providers, and bundled costs.',
  'Site of care':
    'In practice, site of care can change facility fees, Medicare payment rates, commercial negotiated rates, and patient out-of-pocket exposure.',
  'Site-neutral payment':
    'In practice, site-neutral policy tries to reduce payment differences that come from ownership or setting rather than clinical need.',
  'Spread pricing':
    'In practice, spread pricing is a PBM revenue model that can be hard for plan sponsors to see without detailed pharmacy claims and compensation disclosure.',
  Standardization:
    'In practice, standardization is what turns thousands of separate compliance files into comparable data that researchers, employers, regulators, and patients can use.',
  'Standard charge':
    'In practice, standard charge is an umbrella hospital transparency term, so readers need to identify which charge type is being discussed before drawing conclusions.',
  'Transparency in Coverage':
    'In practice, TiC is the commercial-plan counterpart to hospital price transparency, but its files are massive and require technical translation before most users benefit.',
  TiC:
    'In practice, TiC shorthand usually points to payer machine-readable files, in-network rates, out-of-network allowed amounts, and consumer cost-comparison requirements.',
  '837 claim':
    'In practice, the 837 is where a visit becomes a formal payment request. If identifiers, codes, modifiers, units, diagnosis links, or attachments are wrong, the payer may reject, deny, or delay payment before the patient ever sees a bill.',
  '835 remittance':
    'In practice, the 835 is the provider-side explanation of how the payer processed the claim. Billing teams use it to post payments, identify denials, calculate patient responsibility, and decide whether to appeal or correct the claim.',
  Adjudication:
    'In practice, adjudication is the hidden rule engine between care and the patient bill. It combines contract pricing, benefit design, coverage policy, authorization status, edits, and accumulated deductible information.',
  'Benefit design':
    'In practice, benefit design is why two patients can face different bills for the same negotiated rate. Deductibles, copays, coinsurance, plan tier, network status, and out-of-pocket maximums determine the patient share.',
  'Charge capture':
    'In practice, charge capture is a major source of variation. A service that was clinically delivered but not captured may never be billed, while a captured supply, drug, or facility resource can add a separate line to the claim.',
  Chargemaster:
    'In practice, the chargemaster shapes gross charges and internal billing logic, but insured payment usually flows through negotiated rates, fee schedules, payer edits, and benefit design rather than the gross charge alone.',
  Claim:
    'In practice, a claim is the administrative version of care. It may split one patient encounter into professional, facility, lab, imaging, pharmacy, anesthesia, pathology, or ancillary payment requests.',
  'Claim scrubber':
    'In practice, claim scrubbers try to catch problems early, but they are only as good as their rules. Some issues still pass through and become payer denials, records requests, underpayments, or delayed patient statements.',
  Clearinghouse:
    'In practice, clearinghouses are part of the transaction plumbing. Patients rarely see them, but they can affect whether claims reach the payer cleanly and whether errors are caught before submission.',
  'Clinical documentation':
    'In practice, documentation is payment evidence as well as clinical memory. Missing specificity can change coding, weaken medical-necessity support, or make an appeal harder even when care was appropriate.',
  Denial:
    'In practice, denials are not always final. Providers may correct, appeal, submit records, or negotiate, but that work takes time and can delay payment posting and patient billing.',
  Diagnosis:
    'In practice, diagnosis codes help explain why care was needed. A diagnosis that is too vague, missing, or unsupported by documentation can trigger medical-necessity denials or payment changes.',
  'DRG/APC':
    'In practice, DRGs and APCs show how raw services can be grouped for payment. They matter when comparing hospital prices because the payment unit may be an episode or group rather than a single visible service.',
  EHR:
    'In practice, the EHR sits upstream of the bill. It stores the clinical facts, orders, and documentation that coders and billing systems later translate into claims and authorization support.',
  Eligibility:
    'In practice, eligibility checks are useful but limited. Active coverage at scheduling does not guarantee that the service is covered, authorized, medically necessary, correctly coded, or payable under the contract.',
  EOB:
    'In practice, patients should compare the EOB with the provider statement. The EOB explains payer processing; the provider statement is the payment request from the billing office.',
  ERA:
    'In practice, ERA data lets providers post payer decisions at scale. It is the operational bridge between payer adjudication and provider billing follow-up.',
  'Fee schedule':
    'In practice, fee schedules are one way payment becomes predictable, but they may be modified by contract terms, bundling rules, site of care, modifiers, quality arrangements, or payer policy.',
  'ICD-10':
    'In practice, ICD-10 codes tie the claim to the clinical reason for care. They influence medical necessity, risk adjustment, quality measurement, reporting, and benefit rules.',
  'Medical necessity':
    'In practice, medical necessity is one of the most important phrases in denials and authorizations. It depends on payer policy, clinical documentation, diagnosis, setting, and timing.',
  Modifier:
    'In practice, modifiers can change payment or clarify why a service should be treated separately. Missing or incorrect modifiers can create denials, underpayments, or misleading price comparisons.',
  'Patient responsibility':
    'In practice, patient responsibility is usually calculated after payer processing, not at the moment of care. It can change when claims are corrected, appealed, reprocessed, or adjusted under legal protections.',
  'Patient statement':
    'In practice, the statement is the document that often triggers confusion. Patients may need to reconcile it against the EOB, estimate, cash price, financial-assistance rules, or surprise-billing protections.',
  'Prior authorization':
    'In practice, prior authorization approval is not a blank check. The final claim still has to match the approved service, diagnosis, timing, provider, setting, and payer policy.',
  'Revenue cycle':
    'In practice, the revenue cycle is where policy, contracts, clinical documentation, software, and patient finances collide. Price transparency is weaker if people only see prices and not the process that turns care into bills.',
  'Revenue code':
    'In practice, revenue codes help explain facility billing lines. They matter when a patient receives both a professional bill and a facility bill for what felt like one visit.',
  'Utilization management':
    'In practice, utilization management is a payer cost-control layer. It can reduce unnecessary care, but it can also create administrative burden, delays, denials, and confusion about what is actually approved.',
}

export const glossaryTerms = glossaryTermBase.map((term) => ({
  ...term,
  meaning: glossaryMeaningByTerm[term.term] || term.meaning,
  context: glossaryContextByTerm[term.term],
}))

export const implementationTimeline = [
  {
    year: 'Mar 23, 2010',
    title: 'ACA transparency foundation',
    detail:
      'The Patient Protection and Affordable Care Act is signed into law, creating the foundation for rate review, MLR, SBC, Open Payments, and later hospital standard-charge disclosure.',
  },
  {
    year: 'Jun 24, 2019',
    title: 'Executive price transparency push',
    detail:
      'EO 13877 directs agencies to improve price and quality transparency, setting up the hospital and health plan transparency rules.',
  },
  {
    year: 'Dec 27, 2020',
    title: 'CAA 2021 becomes law',
    detail:
      'The Consolidated Appropriations Act, 2021 becomes Public Law 116-260, carrying the No Surprises Act and broader commercial transparency provisions.',
  },
  {
    year: 'Jan 1, 2021',
    title: 'Hospital price files go live',
    detail:
      'Hospitals must post machine-readable standard charges and consumer-friendly displays of shoppable services.',
  },
  {
    year: 'Jan 1, 2022',
    title: 'No Surprises Act protections begin',
    detail:
      'Federal protections begin for many surprise out-of-network bills, along with good faith estimate rights for uninsured and self-pay patients.',
  },
  {
    year: 'Jul 1, 2022',
    title: 'Transparency in Coverage files begin',
    detail:
      'Most group health plans and health insurance issuers begin posting public machine-readable files for covered items and services.',
  },
  {
    year: 'Aug 16, 2022',
    title: 'Inflation Reduction Act signed',
    detail:
      'The IRA becomes law, launching Medicare drug negotiation, Part D redesign, insulin affordability provisions, and inflation rebates.',
  },
  {
    year: 'Jan 1, 2023',
    title: 'Plan cost tools start with 500 services',
    detail:
      'Transparency in Coverage consumer price-comparison requirements begin for an initial set of 500 items and services.',
  },
  {
    year: 'Jan 1, 2024',
    title: 'Plan cost tools expand',
    detail:
      'Transparency in Coverage consumer tool requirements expand to all covered items and services.',
  },
  {
    year: 'Feb 25, 2025',
    title: 'EO 14221 renews price transparency push',
    detail:
      'The White House directs Treasury, Labor, and HHS to focus on actual prices, standardization, comparability, and stronger enforcement.',
  },
  {
    year: 'Jan 1, 2026',
    title: 'First Medicare negotiated drug prices apply',
    detail:
      'The first IRA negotiated Medicare drug prices begin applying for the initial price applicability year 2026.',
  },
  {
    year: 'Apr 1, 2026',
    title: 'Updated hospital transparency enforcement begins',
    detail:
      'CMS begins enforcement of new and updated Hospital Price Transparency requirements finalized in the CY 2026 OPPS and ASC final rule.',
  },
]
