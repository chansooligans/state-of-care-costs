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

export const policyLibraryIntro = [
  {
    label: 'Start with authority',
    text: 'First identify whether a policy is a statute, executive order, final rule, proposed rule, guidance, report, or enforcement action.',
  },
  {
    label: 'Separate audience',
    text: 'A requirement may be built for patients, employers, developers, regulators, plans, providers, or several of them at once.',
  },
  {
    label: 'Track implementation',
    text: 'The policy story often continues after enactment through rulemaking, guidance, comment periods, litigation, and enforcement.',
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

export const conceptMap = [
  {
    title: 'Publication requirements',
    examples: 'Hospital standard charges, plan machine-readable files, consumer cost tools.',
    risk: 'Data exists, but ordinary people cannot interpret it.',
  },
  {
    title: 'Patient protection rules',
    examples: 'No Surprises Act, good faith estimates, notice and consent limits.',
    risk: 'The patient is protected while payment fights continue behind the scenes.',
  },
  {
    title: 'Purchaser leverage',
    examples: 'ERISA fiduciary duties, gag-clause bans, PBM disclosures, claims data.',
    risk: 'Employers have duties and data rights but may lack analytic capacity.',
  },
  {
    title: 'Market intervention',
    examples: 'Medicare drug negotiation, FTC PBM enforcement, site-neutral payment.',
    risk: 'Cost reductions can trigger industry pushback, litigation, or access arguments.',
  },
  {
    title: 'Data access infrastructure',
    examples: 'FHIR APIs, prior authorization APIs, information blocking rules.',
    risk: 'Technical compliance can still leave users without actionable context.',
  },
  {
    title: 'Oversight and enforcement',
    examples: 'CMS audits, civil monetary penalties, OIG reviews, FTC consent orders.',
    risk: 'Weak enforcement turns transparency into a paper requirement.',
  },
]

export const glossaryTerms = [
  {
    term: 'Allowed amount',
    meaning:
      'The amount a plan allows for a covered service. It often includes both the plan payment and the patient share.',
  },
  {
    term: 'Charge',
    meaning:
      'A list or gross price before discounts or negotiated rates. It is often not what anyone actually pays.',
  },
  {
    term: 'Discounted cash price',
    meaning:
      'The price a hospital offers to a patient who pays cash or is treated as self-pay.',
  },
  {
    term: 'Negotiated rate',
    meaning:
      'A price agreed to by a provider and payer. Transparency rules often require payer-specific negotiated prices.',
  },
  {
    term: 'Machine-readable file',
    meaning:
      'A public file in a structured format intended for automated processing, not casual reading.',
  },
  {
    term: 'Shoppable service',
    meaning:
      'A service that can generally be scheduled in advance, such as imaging, labs, or planned procedures.',
  },
  {
    term: 'QPA',
    meaning:
      'Qualifying Payment Amount. A No Surprises Act benchmark based generally on median contracted rates for an item or service.',
  },
  {
    term: 'IDR',
    meaning:
      'Independent Dispute Resolution. The federal process for certain out-of-network payment disputes under the No Surprises Act.',
  },
  {
    term: 'GFE',
    meaning:
      'Good Faith Estimate. An estimate that uninsured or self-pay patients can receive before certain scheduled care.',
  },
  {
    term: 'AEOB',
    meaning:
      'Advanced Explanation of Benefits. A still-important implementation concept for giving insured patients pre-service benefit and cost information.',
  },
  {
    term: 'PBM',
    meaning:
      'Pharmacy Benefit Manager. A drug-benefit intermediary that negotiates rebates, manages formularies, and contracts with pharmacies and plans.',
  },
  {
    term: 'Ghost rate',
    meaning:
      'A reported payer rate for a provider-service combination that may be implausible or unlikely to occur in real care.',
  },
  {
    term: 'Site-neutral payment',
    meaning:
      'A policy idea that similar services should be paid similarly across settings, such as hospital outpatient departments and physician offices.',
  },
  {
    term: 'RxDC',
    meaning:
      'Prescription Drug Data Collection reporting under the CAA, covering drug spending, premiums, rebates, and related health spending data.',
  },
  {
    term: 'Gag clause',
    meaning:
      'A contract term that blocks plans from accessing or sharing price, quality, or claims information. CAA rules prohibit these clauses in many health plan contracts.',
  },
]

export const implementationTimeline = [
  {
    year: '2010',
    title: 'ACA transparency foundation',
    detail:
      'Hospital standard-charge disclosure, medical loss ratio, rate review, SBC, and Open Payments become part of the broader transparency ecosystem.',
  },
  {
    year: '2019',
    title: 'Executive price transparency push',
    detail:
      'EO 13877 directs agencies to improve price and quality transparency, setting up the hospital and plan transparency rules.',
  },
  {
    year: '2021',
    title: 'Hospital price files go live',
    detail:
      'Hospitals must post machine-readable standard charges and consumer-friendly displays of shoppable services.',
  },
  {
    year: '2022',
    title: 'No Surprises Act and TiC files',
    detail:
      'Surprise billing protections begin, federal IDR launches, and most plans begin posting Transparency in Coverage machine-readable files.',
  },
  {
    year: '2023-2024',
    title: 'Consumer plan tools expand',
    detail:
      'Plan price comparison requirements begin with 500 items and services, then expand to all covered items and services.',
  },
  {
    year: '2025',
    title: 'Actual prices and usability come forward',
    detail:
      'EO 14221 directs agencies to focus on actual prices, standardization, comparability, and stronger enforcement.',
  },
  {
    year: '2026',
    title: 'Enforcement and PBM transparency intensify',
    detail:
      'CMS enforces updated hospital requirements, DOL pursues PBM fee disclosure, IDR volume remains a major operating story, and Medicare negotiated drug prices begin taking effect.',
  },
]
