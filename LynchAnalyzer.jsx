import { useState } from "react";
const CATS = {
FAST_GROWER: { label: "Fast Grower", color: "#00ff87", emoji: " ", desc: "20%+ growth. Ly
STALWART: { label: "Stalwart", color: "#60a5fa", emoji: " ", desc: "10–20% growth.
SLOW_GROWER: { label: "Slow Grower", color: "#9ca3af", emoji: " ", desc: "Under 10% growt
CYCLICAL: { label: "Cyclical", color: "#fbbf24", emoji: " ", desc: "Tied to economi
TURNAROUND: { label: "Turnaround", color: "#a78bfa", emoji: " ", desc: "Near-distressed
SPEC: { label: "Speculative", color: "#f87171", emoji: " ", desc: "Pre-revenue or
};
const PRELOADED = {
ACFN: {
companyName: "Acorn Energy, Inc.", ticker: "ACFN", currentPrice: 21.00,
sector: "Technology / Energy Infrastructure", industry: "IoT Remote Monitoring & Control"
category: "FAST_GROWER", revenueGrowthPct: 22.0, peRatio: 7.95, eps: 2.64,
pegRatio: 0.37, marketCapB: 0.053, cashB: 0.0042, totalDebtB: 0.0,
debtEquityRatio: 0.0, revenueB: 0.012, tenBaggerScore: 81,
fairValueLow: 40, fairValueHigh: 53, inBuyZone: true,
lynchVerdict: "This is exactly the kind of company I spent my career looking for and nobo
oneSentenceThesis: "Acorn Energy's OmniMetrix subsidiary makes IoT monitoring systems for
sellTriggers: [
"Revenue growth decelerates below 15% for two consecutive quarters — the whole thesis i
"Gross margins fall below 70% — the high-margin monitoring revenue model is the crown j
"A larger competitor (Generac, Kohler, or a telco) enters the remote monitoring space w
"The cell tower generator monitoring contract (a key 2024 win) is not renewed or expand
"Management fails to close any of the OEM or M&A discussions they've flagged — the next
"Cash position deteriorates below $2M with no clear path to profitability at the holdin
],
storyCheckQuestions: [
"Is monitoring revenue (the high-margin recurring stream) still growing 20%+, even if h
"Has the company signed any new OEM partnerships or completed the M&A discussions manag
"Is the AI/data center boom still driving demand for backup power monitoring? (Check fo
"Has the next-generation monitor (in beta testing as of Q3 2025) launched and received
"Is the holding company (Acorn Energy above OmniMetrix) getting closer to covering its
],
dataNote: "Data as of Mar 2026 · Micro-cap: ~$53M market cap · Uplisted to Nasdaq July 20
},
LULU: {
companyName: "lululemon athletica inc.", ticker: "LULU", currentPrice: 181.00,
sector: "Consumer Discretionary", industry: "Athleisure & Athletic Apparel",
category: "TURNAROUND", revenueGrowthPct: 10.1, peRatio: 12.6, eps: 14.43,
pegRatio: 0.89, marketCapB: 21, cashB: 1.3, totalDebtB: 0.0,
debtEquityRatio: 0.0, revenueB: 10.6, tenBaggerScore: 52,
base,
fairValueLow: 130, fairValueHigh: 173, inBuyZone: false,
lynchVerdict: "I love a great brand that Wall Street has given up on. Lululemon built one
oneSentenceThesis: "Lululemon is a premium brand with a fanatically loyal customer sellTriggers: [
"North American comparable sales continue declining for more than 3 consecutive quarter
"International growth (especially China) decelerates meaningfully below 20% — the entir
"Gross margins deteriorate below 55% — Lululemon's premium pricing power is the whole b
"The founder-board conflict escalates into a proxy battle that creates management insta
"A quality-control scandal (like the see-through 'Get Low' leggings) recurs and erodes
"Nike, Alo, or Vuori meaningfully take loyal Lululemon customers in core categories (no
],
storyCheckQuestions: [
"Is North American comparable sales growth recovering — are U.S. comps back to flat or
"Is international revenue (China, Europe) still growing 20%+, carrying the overall grow
"Are gross margins holding above 57%? (Key indicator of pricing power and brand health)
"Has the Chip Wilson / board conflict been resolved, and is management stability restor
"Are new product launches (beyond the 'Get Low' debacle) being received positively by c
],
dataNote: "Data as of Feb 2026 · Down ~65% from 2024 highs · Debt-free · Source: StockAna
},
GOOG: {
companyName: "Alphabet Inc.", ticker: "GOOG", currentPrice: 312.00,
sector: "Communication Services", industry: "Search, Cloud & AI",
category: "STALWART", revenueGrowthPct: 15.1, peRatio: 28.6, eps: 10.91,
pegRatio: 1.89, marketCapB: 3700, cashB: 30.7, totalDebtB: 72.0,
debtEquityRatio: 0.25, revenueB: 402.8, tenBaggerScore: 22,
fairValueLow: 131, fairValueHigh: 175, inBuyZone: false,
lynchVerdict: "When I was running Magellan, I had a rule: if a company owns a monopoly an
oneSentenceThesis: "Alphabet owns the world's dominant search engine (90%+ market share),
sellTriggers: [
"Search market share falls meaningfully below 85% — first real cracks in the moat, like
"Google Cloud growth decelerates below 20% for two consecutive quarters, suggesting the
"DOJ antitrust case results in forced structural separation of Search from Android/Chro
"AI Overviews begin measurably cannibalizing Search ad revenue per query — so far this
"The $90B+ annual CapEx fails to generate proportional returns — depreciation accelerat
"PEG rises above 2.5 — at that point you're pricing in perfection with no margin for er
],
erodin
storyCheckQuestions: [
"Is Google Search still holding 85%+ global market share, or are AI alternatives "Is Google Cloud still growing 25%+ per quarter and gaining share vs AWS and Azure?",
"Are AI Overviews helping or hurting Search ad revenue on a per-query basis?",
"Has the DOJ antitrust case resulted in structural remedies threatening the Android/Chr
"Is the $90B+ CapEx investment showing early signs of generating cloud and AI revenue a
],
dataNote: "Data as of Feb–Mar 2026 · Market cap ~$3.7T · Source: StockAnalysis, MacroTren
},
AMZN: {
companyName: "Amazon.com, Inc.", ticker: "AMZN", currentPrice: 210.00,
sector: "Consumer Discretionary / Technology", industry: "E-Commerce & Cloud Computing",
category: "STALWART", revenueGrowthPct: 12.4, peRatio: 28.8, eps: 7.17,
pegRatio: 1.45, marketCapB: 2200, cashB: 123, totalDebtB: 178.5,
debtEquityRatio: 0.43, revenueB: 716.9, tenBaggerScore: 28,
fairValueLow: 152, fairValueHigh: 203, inBuyZone: false,
lynchVerdict: "Amazon is the rare company that built three world-class businesses in one
oneSentenceThesis: "Amazon has quietly become three dominant businesses — AWS (cloud infr
sellTriggers: [
"AWS revenue growth decelerates below 15% for two consecutive quarters — it's the engin
"Microsoft Azure or Google Cloud meaningfully close the cloud market share gap with AWS
"Operating margins stop expanding — Amazon has gone from near-zero margins to 10%+, and
"Regulatory breakup risk becomes real — FTC antitrust scrutiny of marketplace and AWS b
"PEG rises above 2.5 on forward estimates — that's when you're paying for perfection",
],
storyCheckQuestions: [
"Is AWS still growing revenue 15%+ per quarter?",
"Are operating margins still expanding year-over-year?",
"Is the advertising segment still growing faster than the e-commerce base?",
"Has any credible regulatory action threatened to break up AWS from retail?",
"Is management still investing in AI infrastructure (Bedrock, Trainium) as the next gro
],
dataNote: "Data as of Feb 2026 · Source: MacroTrends, StockAnalysis, Yahoo Finance",
},
NVO: {
companyName: "Novo Nordisk A/S", ticker: "NVO", currentPrice: 37.62,
sector: "Healthcare", industry: "Drug Manufacturers — Diabetes & Obesity",
category: "FAST_GROWER", revenueGrowthPct: 20.5, peRatio: 10.7, eps: 3.52,
pegRatio: 0.52, marketCapB: 167, cashB: 4.2, totalDebtB: 20.6,
debtEquityRatio: 0.67, revenueB: 48.6, tenBaggerScore: 71,
fairValueLow: 52, fairValueHigh: 70, inBuyZone: true,
lynchVerdict: "Here's a company that makes Ozempic and Wegovy — the two drugs everyone on
oneSentenceThesis: "Novo Nordisk invented the GLP-1 obesity drug category with Ozempic an
sellTriggers: [
"A competitor GLP-1 drug gains meaningful market share in head-to-head trial data",
"U.S. drug pricing reform targets GLP-1s beyond the 50% Ozempic cut already made",
"CagriSema fails Phase 3 or shows inferior efficacy vs Lilly's tirzepatide — the "Revenue growth decelerates below 10% for two consecutive quarters",
"PEG rises above 1.5 as the market re-rates back toward fair value — upside largely cap
stock'
],
storyCheckQuestions: [
"Is Ozempic/Wegovy still growing prescriptions in the U.S. and internationally?",
"Has CagriSema shown positive Phase 3 data vs Lilly's tirzepatide?",
"Is Novo still holding 50%+ market share in the GLP-1 obesity category?",
"Has pricing pressure from U.S. policy worsened beyond the 50% Ozempic cut?",
"Is manufacturing capacity expanding fast enough to meet global demand?",
],
dataNote: "Data as of Feb 2026 · Down 58% from Jun 2024 highs · Source: StockAnalysis, Gu
},
RDDT: {
companyName: "Reddit, Inc.", ticker: "RDDT", currentPrice: 139.72,
sector: "Communication Services", industry: "Internet Content & Information",
category: "FAST_GROWER", revenueGrowthPct: 69.4, peRatio: 53.3, eps: 2.62,
pegRatio: 0.60, marketCapB: 28.7, cashB: 2.1, totalDebtB: 0.0,
debtEquityRatio: 0.01, revenueB: 2.2, tenBaggerScore: 68,
fairValueLow: 98, fairValueHigh: 131, inBuyZone: false,
lynchVerdict: "My grandkids argue about everything on Reddit — sports, stocks, science —
oneSentenceThesis: "Reddit is the internet's last great repository of authentic human opi
sellTriggers: [
"Revenue growth decelerates below 25% for two consecutive quarters without a clear macr
"Google's AI Overviews meaningfully cut Reddit's organic search traffic — the logged-ou
"Management phases out user-growth metrics and replaces them with vague engagement prox
"The $1B share buyback gets cancelled or reversed",
"PEG rises above 2.0 on multiple forward estimates — you've already won, lock in gains"
],
storyCheckQuestions: [
"Is revenue still growing 30%+ year-over-year?",
"Are daily active users still growing meaningfully?",
"Is international monetisation catching up to U.S. levels?",
"Has Google's AI search reduced Reddit's organic traffic materially?",
"Is the AI data-licensing revenue stream (Google, OpenAI etc.) still growing?",
],
dataNote: "Data as of Feb 2026 · Source: StockAnalysis, MacroTrends, Yahoo Finance",
},
INCY: {
companyName: "Incyte Corporation", ticker: "INCY", currentPrice: 78.50,
sector: "Healthcare", industry: "Biotechnology — Oncology & Dermatology",
category: "FAST_GROWER", revenueGrowthPct: 21.2, peRatio: 17.4, eps: 6.41,
pegRatio: 0.06, marketCapB: 15.4, cashB: 1.8, totalDebtB: 0.0,
debtEquityRatio: 0.01, revenueB: 5.14, tenBaggerScore: 72,
fairValueLow: 80, fairValueHigh: 115, inBuyZone: true,
lynchVerdict: "A biotech that actually makes money — that alone puts Incyte in rare compa
oneSentenceThesis: "Incyte is a rare profitable biotech with $5B+ in revenue growing 21%
sellTriggers: [
"Jakafi faces biosimilar competition earlier than expected — the patent cliff is the si
"Opzelura (ruxolitinib cream) revenue growth stalls below 20% — the dermatology expansi
"A new CEO or major management change disrupts commercial execution — the current team
"Revenue growth decelerates below 12% for two consecutive quarters",
"Pipeline failures in the late-stage oncology programs (zanzalintinib, retifanlimab) un
],
storyCheckQuestions: [
"Is Jakafi still growing patient demand across its three approved indications?",
"Is Opzelura gaining share in atopic dermatitis and vitiligo, including the new pediatr
"Is Niktimvo (axatilimab) achieving strong uptake in chronic GVHD?",
"Are biosimilar threats to Jakafi still at least 3+ years away?",
"Is the pipeline (Zynyz, zanzalintinib) advancing on schedule?",
],
dataNote: "Data as of Mar 2026 · Revenue $5.14B FY2025 · Source: StockAnalysis, SEC filin
},
RKLB: {
companyName: "Rocket Lab Corporation", ticker: "RKLB", currentPrice: 22.50,
sector: "Industrials / Technology", industry: "Space Launch & Systems",
category: "SPEC", revenueGrowthPct: 38.0, peRatio: -1, eps: -0.37,
pegRatio: -1, marketCapB: 11.5, cashB: 0.48, totalDebtB: 0.53,
debtEquityRatio: 0.35, revenueB: 0.60, tenBaggerScore: 55,
fairValueLow: 14, fairValueHigh: 20, inBuyZone: false,
lynchVerdict: "Rocket Lab is a fascinating story, but Lynch would be careful here. Revenu
oneSentenceThesis: "Rocket Lab is the world's second most frequently launched orbital roc
sellTriggers: [
"Neutron development timeline slips beyond 2027 or faces a major technical setback — th
"Revenue growth decelerates below 20% for two consecutive quarters — the growth story i
"SpaceX or a new entrant captures the small-launch market with a competing vehicle at l
"Cash burn accelerates meaningfully without a clear path to profitability by 2027",
"National security contracts (a key Neutron target) go to established primes instead",
],
storyCheckQuestions: [
"Is Electron still launching on schedule and winning new commercial and government cont
"Is the Neutron rocket development on track — what is the current expected launch date?
"Is the backlog ($1.85B as of Q4 2025) still growing year-over-year?",
"Is gross margin continuing to expand toward profitability?",
"Is cash runway sufficient to fund Neutron development without a dilutive raise?",
],
dataNote: "Data as of Mar 2026 · Revenue $602M FY2025, +38% YoY · Neutron target: late 20
},
BRKB: {
companyName: "Berkshire Hathaway Inc. (Class B)", ticker: "BRKB", currentPrice: 489.87,
sector: "Financials", industry: "Diversified Conglomerate / Insurance",
category: "STALWART", revenueGrowthPct: 5.2, peRatio: 15.9, eps: 31.04,
pegRatio: 1.8, marketCapB: 1060, cashB: 373.0, totalDebtB: 135.4,
debtEquityRatio: 0.19, revenueB: 371.4, tenBaggerScore: 18,
fairValueLow: 420, fairValueHigh: 520, inBuyZone: true,
lynchVerdict: "Berkshire is the Stalwart's Stalwart. Warren Buffett built it, and now Gre
oneSentenceThesis: "Berkshire Hathaway is a diversified conglomerate with unmatched finan
sellTriggers: [
"Greg Abel makes a large, poorly-reasoned acquisition that destroys capital — the bigge
"Insurance underwriting deteriorates significantly across multiple years — the float-fu
"BNSF railroad loses major market share to trucking or faces a prolonged freight recess
"Berkshire begins paying a dividend (signals they have run out of good capital allocati
"PEG rises above 2.5 and the stock trades materially above book value — patience is the
],
storyCheckQuestions: [
"Is Greg Abel deploying capital wisely in his first major acquisitions as CEO?",
"Is the insurance segment (Geico, Gen Re) showing profitable underwriting, not just pre
"Is BNSF revenue still growing and margins holding as freight markets recover?",
"Is the cash pile ($373B) being deployed at returns above the S&P 500 long-term average
"Is Berkshire still trading at or below 1.5x book value — the historical trigger for bu
],
dataNote: "Data as of Mar 2026 · Market cap ~$1.06T · Greg Abel became CEO Jan 2026 · Sou
},
CROX: {
companyName: "Crocs, Inc.", ticker: "CROX", currentPrice: 96.50,
sector: "Consumer Discretionary", industry: "Footwear",
category: "TURNAROUND", revenueGrowthPct: -2.0, peRatio: 7.5, eps: 13.10,
pegRatio: 0.65, marketCapB: 4.9, cashB: 0.18, totalDebtB: 1.47,
debtEquityRatio: 1.25, revenueB: 4.04, tenBaggerScore: 44,
fairValueLow: 85, fairValueHigh: 120, inBuyZone: true,
lynchVerdict: "Here's a company with a P/E of 7 and free cash flow of $659 million last y
oneSentenceThesis: "Crocs the brand is a genuine global icon with 60%+ gross margins and
sellTriggers: [
"Core Crocs brand revenue turns negative — the HeyDude problem is survivable, but if th
"Debt fails to decline year-over-year — at 1.25x debt/equity the balance sheet needs im
"HEYDUDE brand continues declining into 2027 with no recovery — at some point it become
"Gross margins fall below 55% — a signal that pricing power or brand premium is eroding
"Management pursues another large acquisition — the HeyDude experience should keep them
],
storyCheckQuestions: [
"Is the core Crocs brand growing revenues globally, especially in Asia and Europe?",
"Is HEYDUDE stabilizing — has the revenue decline slowed or reversed?",
"Is the company reducing debt with its strong free cash flow?",
"Are gross margins holding above 57%?",
"Is international Crocs growth (which is the key long-term driver) accelerating?",
],
dataNote: "Data as of Mar 2026 · FY2025 revenue $4.0B · Forward P/E ~7.5x · Source: Stock
},
ETOR: {
companyName: "eToro Group Ltd.", ticker: "ETOR", currentPrice: 67.00,
sector: "Financials", industry: "Retail Brokerage / Social Trading Platform",
category: "FAST_GROWER", revenueGrowthPct: 28.0, peRatio: 22.0, eps: 3.05,
pegRatio: 0.79, marketCapB: 5.2, cashB: 0.62, totalDebtB: 0.0,
debtEquityRatio: 0.02, revenueB: 0.93, tenBaggerScore: 58,
fairValueLow: 52, fairValueHigh: 75, inBuyZone: true,
lynchVerdict: "eToro is the kind of company Lynch would have spotted in his neighborhood
oneSentenceThesis: "eToro is the world's leading social trading platform, combining retai
sellTriggers: [
"Revenue growth decelerates below 15% for two consecutive quarters — trading platform r
"Regulatory crackdown on CFD products in key European or MENA markets — a significant p
"Major retail brokers (Robinhood, Interactive Brokers) launch credible social/copy-trad
"User growth flatlines — the whole model depends on a growing, engaged community",
"Crypto revenue (a meaningful share of total) collapses in a prolonged bear market",
],
storyCheckQuestions: [
"Is the registered user base and funded account count still growing year-over-year?",
"Are net trading revenues growing across both equity and crypto segments?",
"Has any major regulatory action targeted CFD or copy-trading products?",
"Is the U.S. expansion (post-IPO focus) gaining traction?",
"Is the platform seeing strong engagement during both bull and bear markets — not just
],
dataNote: "Data as of Mar 2026 · IPO'd on Nasdaq 2025 · ~$5.2B market cap · Source: Stock
},
EXEL: {
companyName: "Exelixis, Inc.", ticker: "EXEL", currentPrice: 43.10,
sector: "Healthcare", industry: "Biotechnology — Oncology",
category: "FAST_GROWER", revenueGrowthPct: 18.0, peRatio: 18.1, eps: 2.38,
pegRatio: 0.56, marketCapB: 11.6, cashB: 1.66, totalDebtB: 0.18,
debtEquityRatio: 0.08, revenueB: 2.29, tenBaggerScore: 69,
fairValueLow: 30, fairValueHigh: 43, inBuyZone: true,
lynchVerdict: "Exelixis has done what most biotechs never manage — they built a real busi
oneSentenceThesis: "Exelixis built a durable oncology franchise on cabozantinib (CABOMETY
sellTriggers: [
"CABOMETYX faces generic or biosimilar competition sooner than expected — the drug is t
"Zanzalintinib fails a pivotal trial in its lead indication (colorectal cancer) — remov
"Revenue growth decelerates below 10% for two consecutive quarters, signaling cabozanti
"The company makes a large, dilutive acquisition — better to stay focused than overpay
"A competitor drug (e.g. Merck's lenvatinib combo) takes significant RCC market share f
],
storyCheckQuestions: [
"Is CABOMETYX still the leading oral therapy in second-line RCC and gaining in NET?",
"Is zanzalintinib on track for its colorectal cancer launch later in 2026?",
"Is the company continuing to repurchase shares — a sign of confidence in the cash posi
"Are cabozantinib royalties from global partners (Ipsen, Takeda) still growing?",
"Is the pipeline beyond zanzalintinib (XL309, XB010) advancing on schedule?",
],
dataNote: "Data as of Mar 2026 · Revenue $2.29B TTM · Source: StockAnalysis, SEC filings,
},
EXPE: {
companyName: "Expedia Group, Inc.", ticker: "EXPE", currentPrice: 221.00,
sector: "Consumer Discretionary", industry: "Online Travel",
category: "STALWART", revenueGrowthPct: 7.6, peRatio: 21.5, eps: 10.32,
pegRatio: 0.76, marketCapB: 27.1, cashB: 4.4, totalDebtB: 6.8,
debtEquityRatio: 2.50, revenueB: 14.73, tenBaggerScore: 31,
fairValueLow: 160, fairValueHigh: 215, inBuyZone: false,
lynchVerdict: "Expedia is the kind of company I spent years avoiding — too much debt, com
oneSentenceThesis: "Expedia is the second-largest online travel platform globally, quietl
sellTriggers: [
"Gross bookings growth falls below 5% for two consecutive quarters — the whole thesis i
"Operating margins fail to expand — if the margin improvement story stalls, there's no
"Booking Holdings or Airbnb materially takes leisure travel market share in core "A recession or geopolitical shock causes discretionary travel to collapse — the "Debt/equity ratio rises above 3x — any further leverage is a red flag",
U.S. m
compan
],
storyCheckQuestions: [
"Is gross bookings growth accelerating above 8% annually?",
"Are operating margins still expanding toward the 15%+ target?",
"Is the B2B segment (Expedia Partner Solutions) still growing 20%+?",
"Is the loyalty program (One Key) driving meaningful cross-brand retention?",
"Is Expedia reducing its debt load quarter over quarter?",
],
dataNote: "Data as of Mar 2026 · Revenue $14.73B FY2025 · Market cap ~$27B · Source: Stoc
},
HRMY: {
companyName: "Harmony Biosciences Holdings, Inc.", ticker: "HRMY", currentPrice: 28.00,
sector: "Healthcare", industry: "Pharmaceuticals — Rare Neurological Diseases",
category: "FAST_GROWER", revenueGrowthPct: 21.4, peRatio: 10.1, eps: 2.76,
pegRatio: 0.47, marketCapB: 1.62, cashB: 0.78, totalDebtB: 0.0,
debtEquityRatio: 0.04, revenueB: 0.868, tenBaggerScore: 74,
fairValueLow: 30, fairValueHigh: 44, inBuyZone: true,
lynchVerdict: "WAKIX for narcolepsy is one of those niche pharmaceutical stories I love —
oneSentenceThesis: "Harmony Biosciences owns WAKIX (pitolisant), the only FDA-approved H3
sellTriggers: [
"WAKIX revenue growth decelerates below 15% for two consecutive quarters — the entire t
"A new narcolepsy drug (an orexin agonist from Takeda or Jazz) significantly takes pati
"The Pitolisant High-Dose program fails to show benefit — it's the key lifecycle extens
"BP1.15205 (the orexin-2 agonist) fails Phase 1 safety — removes the most exciting pipe
"Cash burns faster than expected without sufficient revenue growth to self-fund the pip
],
share?
storyCheckQuestions: [
"Is WAKIX still growing its patient count — are average patients per quarter still risi
"Has any competitor orexin agonist launched and started taking narcolepsy market "Is the Pitolisant HD Phase 3 trial for narcolepsy enrolling on schedule?",
"Has BP1.15205 (the orexin-2 agonist) dosed its first Phase 1 subjects — and any "Is the company still generating strong free cash flow above $400M annually?",
safety
],
dataNote: "Data as of Mar 2026 · Down ~55% from highs · Revenue $868M TTM · Source: Pitch
},
MOS: {
companyName: "The Mosaic Company", ticker: "MOS", currentPrice: 26.30,
sector: "Materials", industry: "Fertilizers — Phosphate & Potash",
category: "CYCLICAL", revenueGrowthPct: 8.4, peRatio: 18.5, eps: 1.70,
pegRatio: 0.92, marketCapB: 8.3, cashB: 0.48, totalDebtB: 3.52,
debtEquityRatio: 0.43, revenueB: 12.05, tenBaggerScore: 38,
fairValueLow: 22, fairValueHigh: 32, inBuyZone: true,
lynchVerdict: "Cyclicals are the most treacherous stocks Lynch covered, and fertilizers a
oneSentenceThesis: "Mosaic is one of the world's largest producers of phosphate and potas
sellTriggers: [
"Fertilizer prices peak and begin declining — this signals the cyclical top, and Lynch
"Chinese phosphate exports surge, flooding the global market and depressing Mosaic's pr
"Mosaic's Brazilian operations (Mosaic Fertilizantes) face prolonged currency headwinds
"Debt begins rising instead of declining as the cycle turns",
"P/E drops below 8 with strong earnings — the paradox of cyclicals: that's actually a s
],
storyCheckQuestions: [
"Are potash and phosphate spot prices still rising or holding — what is the current fer
"Is the Strait of Hormuz situation still disrupting Middle Eastern fertilizer supply (t
"Is Mosaic reducing debt with the improved cash flows from the upcycle?",
"Are Brazilian (Mosaic Fertilizantes) volumes and margins holding up?",
"Is global crop nutrient demand trending higher — are farmers spending or cutting input
],
dataNote: "Data as of Mar 2026 · Revenue $12.05B FY2025 · Fertilizer prices rising on geo
},
NTR: {
companyName: "Nutrien Ltd.", ticker: "NTR", currentPrice: 82.85,
sector: "Materials", industry: "Agricultural Inputs — Crop Nutrients & Retail",
category: "CYCLICAL", revenueGrowthPct: 3.7, peRatio: 16.3, eps: 4.66,
pegRatio: 0.66, marketCapB: 36.3, cashB: 0.70, totalDebtB: 12.02,
debtEquityRatio: 0.47, revenueB: 25.95, tenBaggerScore: 34,
fairValueLow: 58, fairValueHigh: 78, inBuyZone: false,
lynchVerdict: "Nutrien is the world's largest producer of potash and the largest agricult
oneSentenceThesis: "Nutrien is the world's largest potash producer and North America's la
sellTriggers: [
"Potash prices fall below $250/tonne — signals oversupply returning and erodes the thes
"Nutrien's retail segment (Nutrien Ag Solutions) loses market share to competitors — th
"Debt/equity rises above 0.7 without a clear deleveraging path — leverage is already hi
"Canadian dollar strengthens significantly versus USD — reduces USD-translated earnings
"A major new potash mine (Russia, Belarus resuming exports at full capacity) floods the
],
storyCheckQuestions: [
"Are potash and nitrogen prices still rising or holding — what is the current spot pric
"Is the Nutrien Ag Solutions retail network still growing volumes and margins?",
"Is the company reducing its $12B debt load with improved operating cash flows?",
"Is the dividend sustainable — is free cash flow comfortably covering the $2.19/share a
"Are the 2026 production volumes from key Saskatchewan potash mines on track?",
],
dataNote: "Data as of Mar 2026 · Revenue $25.95B FY2025 · Stock up 45% in past year · Sou
},
TDW: {
companyName: "Tidewater Inc.", ticker: "TDW", currentPrice: 77.00,
sector: "Energy", industry: "Oil & Gas Equipment & Services — Offshore Vessels",
category: "CYCLICAL", revenueGrowthPct: 33.3, peRatio: 26.2, eps: 2.97,
pegRatio: 0.85, marketCapB: 3.81, cashB: 0.58, totalDebtB: 0.72,
debtEquityRatio: 0.50, revenueB: 1.35, tenBaggerScore: 51,
fairValueLow: 55, fairValueHigh: 80, inBuyZone: true,
lynchVerdict: "Tidewater is the offshore vessel play Lynch would have recognized from the
oneSentenceThesis: "Tidewater operates the world's largest fleet of offshore support vess
sellTriggers: [
"Oil prices fall below $60/barrel and stay there — this would trigger offshore project
"New vessel deliveries surge and the supply/demand balance flips — the tight supply the
"The proposed acquisition of Wilson Sons Ultratug falls through or destroys significant
"Revenue growth decelerates below 10% for two consecutive quarters",
"Debt rises above 0.75x debt/equity as the acquisition integrates — leverage management
],
storyCheckQuestions: [
"Are offshore vessel day-rates still rising — what is the current average day-rate for
"Is global offshore drilling activity (rig count) still increasing?",
"Is the Wilson Sons Ultratug acquisition integrating smoothly and on budget?",
"Is free cash flow positive and growing — can Tidewater self-fund fleet maintenance?",
"Are oil prices holding above $70/barrel — the key threshold for offshore project econo
],
dataNote: "Data as of Mar 2026 · Revenue $1.35B TTM · +33% YoY · Source: Robinhood, Yahoo
},
WFRD: {
companyName: "Weatherford International plc", ticker: "WFRD", currentPrice: 86.50,
sector: "Energy", industry: "Oil & Gas Equipment & Services",
category: "TURNAROUND", revenueGrowthPct: -10.8, peRatio: 13.3, eps: 5.52,
pegRatio: 0.68, marketCapB: 6.2, cashB: 0.97, totalDebtB: 1.74,
debtEquityRatio: 1.11, revenueB: 4.92, tenBaggerScore: 46,
fairValueLow: 70, fairValueHigh: 100, inBuyZone: true,
lynchVerdict: "Weatherford came out of bankruptcy in 2019 and has been quietly rebuilding
oneSentenceThesis: "Weatherford is a reformed oilfield services company that emerged from
sellTriggers: [
"Mexico/North America headwinds become permanent rather than temporary — if key markets
"EBITDA margins fall below 18% — the margin expansion story is the whole post-bankruptc
"Oil prices collapse below $60 and operators cut oilfield services spending broadly",
"Debt/equity rises above 1.5x — the balance sheet is still healing and more leverage wo
"A larger oilfield services competitor (SLB, Baker Hughes, Halliburton) wins key contra
],
storyCheckQuestions: [
"Is the Mexico and North America revenue decline stabilizing or recovering?",
"Are EBITDA margins holding above 20% despite the revenue headwinds?",
"Is free cash flow still tracking toward $400M+ annually?",
"Is international (Middle East, offshore) contract growth offsetting the North American
"Is Saudi Arambi activity (a key 2026 recovery target) showing signs of improvement?",
],
dataNote: "Data as of Mar 2026 · Revenue $4.92B FY2025 · Goldman raised PT to $107 · Sour
},
};
function PEGBar({ peg }) {
if (!peg || peg <= 0) return <div style={{color:"#4b5563",fontSize:12}}>N/A</div>;
const pct = (Math.min(peg, 3) / 3) * 100;
const color = peg < 0.5 ? "#00ff87" : peg < 1 ? "#84cc16" : peg < 1.5 ? "#fbbf24" : "#f8717
const label = peg < 0.5 ? "Exceptional Value" : peg < 1 ? "Good Value" : peg < 1.5 ? "Fairl
return (
<div>
<div style={{background:"#1a1a1a",borderRadius:3,height:8,marginBottom:6,overflow:"hidd
<div style={{width:`${pct}%`,background:color,height:"100%",transition:"width 1s ease
</div>
<div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#4b5563",
{["0","0.5","1.0","1.5+"].map(v => <span key={v}>{v}</span>)}
</div>
<div style={{color,fontSize:13,fontWeight:700}}>{label} · PEG: {peg.toFixed(2)}</div>
</div>
);
}
function Gauge({ score }) {
const color = score >= 70 ? "#00ff87" : score >= 45 ? "#fbbf24" : "#f87171";
const label = score >= 70 ? "Lynch Is Excited" : score >= 45 ? "Worth Watching" : "Proceed
const r = 42, C = 2 * Math.PI * r, offset = C - (score / 100) * C;
return (
<div style={{textAlign:"center"}}>
<svg viewBox="0 0 100 100" width={110} height={110}>
<circle cx={50} cy={50} r={r} fill="none" stroke="#1a1a1a" strokeWidth={10} />
<circle cx={50} cy={50} r={r} fill="none" stroke={color} strokeWidth={10}
strokeDasharray={C} strokeDashoffset={offset} strokeLinecap="round"
transform="rotate(-90 50 50)" style={{transition:"stroke-dashoffset 1.2s ease"}} />
<text x={50} y={47} textAnchor="middle" fill={color} fontSize={20} fontWeight="bold"
<text x={50} y={60} textAnchor="middle" fill="#4b5563" fontSize={9} fontFamily="monos
</svg>
<div style={{color,fontSize:9,fontWeight:700,letterSpacing:1,textTransform:"uppercase",
</div>
);
}
function Tag({ label, note }) {
return (
<div style={{fontSize:9,letterSpacing:3,color:"#333",textTransform:"uppercase",marginBott
{label}
{note && <span style={{color:"#222",letterSpacing:0,textTransform:"none",fontSize:10}}>
<div style={{flex:1,height:1,background:"#1a1a1a"}} />
</div>
);
}
function MiniCard({ label, value, color, sub }) {
return (
<div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding:16}}>
<div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase",margi
<div style={{fontSize:22,fontWeight:700,color:color||"#f9fafb",fontFamily:"monospace"}}
{sub && <div style={{fontSize:10,color:"#4b5563",marginTop:4}}>{sub}</div>}
</div>
);
}
function PositionTracker({ result }) {
const [costBasis, setCostBasis] = useState("");
const [shares, setShares] = useState("");
const [checks, setChecks] = useState({});
const [showStory, setShowStory] = useState(false);
const cost = parseFloat(costBasis);
const qty = parseFloat(shares);
const cur = result.currentPrice;
const hasCost = !isNaN(cost) && cost > 0;
const hasQty = !isNaN(qty) && qty > 0;
const gainPct = hasCost ? ((cur - cost) / cost) * 100 : null;
const gainDollar = hasCost && hasQty ? (cur - cost) * qty : null;
const totalVal = hasQty ? cur * qty : null;
const costVal const vsHigh = hasCost && hasQty ? cost * qty : null;
= hasCost ? ((result.fairValueHigh - cost) / cost) * 100 : null;
const fails = Object.values(checks).filter(v => v === "no").length;
const passes = Object.values(checks).filter(v => v === "yes").length;
const answered = fails + passes;
const signal = (() => {
if (!answered) return null;
if (fails >= 2) return {
level: "⚠ CONSIDER EXITING", color: "#f87171", bg: "#1a0808", border: "#7f1d1d",
msg: `${fails} story checks are failing. Lynch's rule: when the story changes, you sell
};
if (fails === 1 && cur > result.fairValueHigh * 1.3) return {
level: "✂ CONSIDER TRIMMING", color: "#fbbf24", bg: "#1a1200", border: "#78350f",
msg: "One story check is failing and you're well above Lynch fair value. He'd probably
};
if (fails === 0 && cur > result.fairValueHigh * 1.5) return {
level: "✂ CONSIDER TRIMMING", color: "#fbbf24", bg: "#1a1200", border: "#78350f",
msg: `You're ${((cur / result.fairValueHigh - 1) * 100).toFixed(0)}% above Lynch fair v
};
if (fails === 0 && passes >= 2 && cur <= result.fairValueHigh) return {
level: "✓ HOLD — STORY INTACT", color: "#00ff87", bg: "#00100a", border: "#065f46",
msg: "The story checks out and you're still within fair value. Lynch's advice: don't ta
};
if (fails === 0 && passes >= 1) return {
level: "◎ HOLD / MONITOR", color: "#84cc16", bg: "#0a1200", border: "#365314",
msg: "Story looks intact so far. Lynch always said the best investors check their thesi
};
return null;
})();
const inp = {
background:"#0a0a0a", border:"1px solid #1f1f1f", borderRadius:3,
color:"#00ff87", fontFamily:"'Courier New',monospace", fontSize:15,
fontWeight:700, padding:"10px 14px", width:"100%", caretColor:"#00ff87",
};
return (
<div style={{background:"#0a0f0a",border:"1px solid #00ff8718",borderLeft:"4px solid #00f
<div style={{fontSize:9,letterSpacing:3,color:"#00ff87",textTransform:"uppercase",margi
My Position in {result.ticker}
</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
<div>
</div>
<div>
</div>
</div>
<div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase",m
<input type="number" placeholder="e.g. 250.00" value={costBasis} onChange={e => set
<div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase",m
<input type="number" placeholder="e.g. 10" value={shares} onChange={e => setShares(
{hasCost && (
<div style={{marginBottom:16}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))
{[
{
label: "Gain / Loss",
val: `${gainPct >= 0 ? "+" : ""}${gainPct.toFixed(1)}%`,
color: gainPct >= 0 ? "#00ff87" : "#f87171",
sub: gainDollar != null
? `${gainDollar >= 0 ? "+" : "-"}$${Math.abs(gainDollar).toLocaleString("en
: "enter shares for $P&L"
},
{
label: "Your Cost",
val: `$${cost.toFixed(2)}`,
color: "#f9fafb",
sub: costVal ? `$${costVal.toLocaleString("en-US",{maximumFractionDigits:0})}
},
{
label: "Current Value",
val: totalVal ? `$${totalVal.toLocaleString("en-US",{maximumFractionDigits:0}
color: "#f9fafb",
sub: hasQty ? `${qty} shares` : "enter shares"
},
].map(item => (
<div key={item.label} style={{background:"#0d0d0d",border:"1px solid #1a1a1a",b
<div style={{fontSize:9,letterSpacing:1.5,color:"#4b5563",textTransform:"uppe
<div style={{fontSize:18,fontWeight:700,color:item.color,fontFamily:"monospac
{item.sub && <div style={{fontSize:10,color:"#4b5563",marginTop:3}}>{item.sub
</div>
))}
</div>
<div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding
<div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase"
Your Cost vs Lynch Fair Value Range
</div>
<div style={{display:"flex",height:40,borderRadius:3,overflow:"hidden",marginBott
{[
{label:"YOUR COST", val:`$${cost.toFixed(0)}`, color:"#60a5fa", bg:"#1e3a5f40
{label:"BUY ZONE", val:`$${result.fairValueLow}–$${result.fairValueHigh}`, c
{label:"CURRENT", val:`$${cur.toFixed(0)}`, color:cur>result.fairValueHigh?
].map((s, i) => (
<div key={i} style={{flex:1,background:s.bg,borderRight:i<2?"1px solid #111":
<div style={{fontSize:8,color:s.color,letterSpacing:0.5,textAlign:"center"}
<div style={{fontSize:12,fontWeight:700,color:s.color,fontFamily:"monospace
</div>
))}
</div>
<div style={{display:"flex",justifyContent:"space-between",fontSize:11,flexWrap:"
<span style={{color:vsHigh>=0?"#00ff87":"#f87171",fontFamily:"monospace"}}>
Upside to fair value from cost: {vsHigh != null ? `${vsHigh >= 0 ? "+" : ""}$
</span>
<span style={{color:"#4b5563",fontSize:10}}>
{cost < result.fairValueLow ? "✓ Bought below Lynch buy zone" : cost <= resul
</span>
</div>
</div>
</div>
)}
<button onClick={() => setShowStory(!showStory)} style={{
background:"transparent", border:"1px solid #1f2937", borderRadius:3, color:"#9ca3af"
cursor:"pointer", fontFamily:"'Courier New',monospace", fontSize:11, fontWeight:700,
letterSpacing:1, textTransform:"uppercase", padding:"10px 16px", width:"100%",
display:"flex", justifyContent:"space-between", alignItems:"center",
}}>
<span> </button>
Story Check — Has the thesis changed?</span>
<span style={{color:"#4b5563",fontSize:10}}>{showStory ? "▲ hide" : "▼ show"}</span>
{showStory && (
<div style={{marginTop:10,background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadiu
<div style={{padding:"10px 16px 8px",fontSize:10,color:"#4b5563",lineHeight:1.6,bor
Lynch: "Before you sell, ask yourself — has the story changed? If the story is st
</div>
{(result.storyCheckQuestions || []).map((q, i) => (
<div key={i} style={{padding:"12px 16px",borderBottom:"1px solid #111",display:"f
<div style={{flex:1,fontSize:12,color:"#9ca3af",lineHeight:1.6,minWidth:180}}>{
<div style={{display:"flex",gap:6,flexShrink:0}}>
{[{opt:"yes",color:"#00ff87"},{opt:"no",color:"#f87171"},{opt:"?",color:"#fbb
const sel = checks[i] === opt;
return (
<button key={opt} onClick={() => setChecks(p => ({...p, [i]: opt}))} styl
background: sel ? color + "22" : "transparent",
border: `1px solid ${sel ? color : "#2a2a2a"}`,
borderRadius:3, color: sel ? color : "#4b5563",
cursor:"pointer", fontFamily:"'Courier New',monospace",
fontSize:11, fontWeight:700, padding:"5px 12px",
textTransform:"uppercase", letterSpacing:1, transition:"all 0.15s",
}}>{opt}</button>
);
})}
</div>
</div>
))}
{signal ? (
<div style={{background:signal.bg,borderTop:`1px solid ${signal.border}`,padding:
<div style={{marginBottom:8}}>
<span style={{
background:signal.color+"22", color:signal.color,
border:`1px solid ${signal.color}40`,
fontFamily:"'Courier New',monospace", fontSize:10, fontWeight:700,
padding:"3px 12px", borderRadius:2, letterSpacing:1,
}}>{signal.level}</span>
</div>
<div style={{fontSize:13,lineHeight:1.75,fontStyle:"italic",
color:signal.color==="#00ff87"?"#d1fae5":signal.color==="#fbbf24"?"#fef3c7":"
"{signal.msg}"
</div>
</div>
) : answered === 0 ? (
<div style={{padding:"12px 16px",fontSize:11,color:"#2a2a2a",fontStyle:"italic"}}
Answer the questions above to get a Lynch exit signal.
</div>
) : null}
</div>
)}
</div>
);
}
export default function LynchAnalyzer() {
const [input, setInput] = useState("");
const [result, setResult] = useState(null);
const [notice, setNotice] = useState("");
const [shown, setShown] = useState(false);
function lookup() {
const t = input.trim().toUpperCase();
if (!t) return;
const data = PRELOADED[t];
if (data) { setResult(data); setNotice(""); }
else { setResult(null); setNotice(t); }
setShown(true);
}
const cat = result ? CATS[result.category] : null;
return (
<div style={{minHeight:"100vh",background:"#080808",color:"#e5e7eb",fontFamily:"'Courier
<style>{`* { box-sizing:border-box; margin:0; padding:0; } @keyframes fadeIn { from{opa
<div style={{maxWidth:820,margin:"0 auto",padding:"0 20px 80px"}}>
{/* Header */}
<div style={{borderBottom:"1px solid #141414",padding:"32px 0 24px",marginBottom:36}}
<div style={{fontSize:10,fontWeight:700,letterSpacing:4,color:"#00ff87",textTransfo
Magellan Fund · Research Terminal
</div>
<h1 style={{fontSize:"clamp(28px,5vw,44px)",fontWeight:900,letterSpacing:-2,marginT
Peter Lynch<br/><span style={{color:"#00ff87"}}>Stock Analyzer</span>
</h1>
<p style={{color:"#333",fontSize:11,marginTop:10,letterSpacing:1}}>
One Up On Wall Street · 7-Step Framework · Real Data
</p>
</div>
{/* Search */}
<div style={{display:"flex",gap:10,marginBottom:32,background:"#0f0f0f",border:"1px s
<span style={{color:"#333",fontSize:11,letterSpacing:2,textTransform:"uppercase",wh
<input
value={input}
onChange={e => setInput(e.target.value.toUpperCase())}
onKeyDown={e => e.key === "Enter" && lookup()}
placeholder="GOOG · AMZN · NVO · RDDT"
style={{flex:1,background:"transparent",border:"none",color:"#00ff87",fontFamily:
/>
RUN →
</button>
</div>
<button onClick={lookup} style={{background:"#00ff87",color:"#000",border:"none",bo
{/* Not found */}
{shown && notice && (
<div style={{background:"#0f0f0f",border:"1px solid #1a1a1a",borderLeft:"4px solid
<div style={{fontSize:9,letterSpacing:3,color:"#00ff87",textTransform:"uppercase"
<p style={{fontSize:13,color:"#9ca3af",lineHeight:1.8}}>
<strong style={{color:"#f9fafb"}}>{notice}</strong> hasn't been analysed <strong style={{color:"#00ff87"}}>Ask in the chat</strong> — say "Add yet.<b
{notic
</p>
</div>
<div style={{marginTop:10,fontSize:11,color:"#333"}}>Pre-loaded: {Object.keys(PRE
)}
{/* Result */}
{result && cat && (
<div style={{animation:"fadeIn .5s ease"}}>
{/* Company header */}
<div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,paddi
<div>
<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6,flexWra
<span style={{background:"#00ff87",color:"#000",fontSize:11,fontWeight:700,
<span style={{color:"#4b5563",fontSize:11}}>{result.sector} · {result.indus
</div>
<h2 style={{fontSize:20,fontWeight:700,color:"#f9fafb"}}>{result.companyName}
<div style={{fontSize:30,fontWeight:900,color:"#00ff87",fontFamily:"monospace
{result.dataNote && <div style={{color:"#2a2a2a",fontSize:10,marginTop:6}}>ⓘ
</div>
<Gauge score={result.tenBaggerScore} />
</div>
{/* My Position */}
<Tag label="My Position" note="— optional: enter your cost basis &amp; run <PositionTracker result={result} />
story
{/* Step 1 */}
<Tag label="Step 1 — Lynch Category" />
<div style={{background:cat.color+"0f",border:`1px solid ${cat.color}30`,borderLe
<span style={{fontSize:28}}>{cat.emoji}</span>
<div>
<div style={{color:cat.color,fontWeight:700,fontSize:16}}>{cat.label}</div>
<div style={{color:"#6b7280",fontSize:12,marginTop:2}}>{cat.desc}</div>
</div>
</div>
{/* Steps 2-4 */}
<Tag label="Steps 2–4 — Growth · P/E · PEG" />
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr
<MiniCard
label="Revenue Growth (YoY)"
value={(result.revenueGrowthPct > 0 ? "+" : "") + result.revenueGrowthPct.toF
color={result.revenueGrowthPct > 20 ? "#00ff87" : result.revenueGrowthPct > 1
sub="FY2025 vs FY2024"
/>
<MiniCard
label="P/E Ratio (TTM)"
value={result.peRatio > 0 ? result.peRatio.toFixed(1) + "×" : "N/A"}
color="#f9fafb"
sub={`EPS (TTM): $${result.eps.toFixed(2)}`}
/>
<div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,pad
<div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"upperc
<PEGBar peg={result.pegRatio} />
<div style={{fontSize:10,color:"#4b5563",marginTop:6}}>Lynch target: &lt; 1.0
</div>
</div>
{/* Step 5 */}
<Tag label="Step 5 — Balance Sheet" />
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr
{[
{label:" Cash", val:`$${result.cashB.toFixed(1)}B`},
{label:" Total Debt", val:result.totalDebtB===0?"Debt-Free ✓":`$${result.t
{label:" Debt/Equity", val:result.debtEquityRatio.toFixed(2)},
{label:" Revenue TTM", val:`$${result.revenueB.toFixed(1)}B`},
{label:" Market Cap", val:result.marketCapB>=1000?`$${(result.marketCapB/1
].map(item => (
<div key={item.label} style={{background:"#0d0d0d",border:"1px solid #1a1a1a"
<div style={{fontSize:9,letterSpacing:1.5,color:"#4b5563",textTransform:"up
<div style={{fontSize:17,fontWeight:700,color:"#f9fafb",fontFamily:"monospa
</div>
))}
<div style={{
background:result.debtEquityRatio<0.5?"#00ff870a":result.debtEquityRatio<1.5?
border:`1px solid ${result.debtEquityRatio<0.5?"#00ff8720":result.debtEquityR
borderRadius:4,padding:"14px 16px",
}}>
<div style={{fontSize:9,letterSpacing:1.5,color:"#4b5563",textTransform:"uppe
<div style={{fontSize:13,fontWeight:700,marginTop:6,color:result.debtEquityRa
{result.debtEquityRatio<0.5?" Clean / Debt-Free":result.debtEquityRatio<1
</div>
</div>
</div>
{/* Step 6 */}
<Tag label="Step 6 — One-Sentence Thesis & Lynch Verdict" />
<div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,paddi
<div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercas
<div style={{color:"#9ca3af",fontSize:13,lineHeight:1.75}}>{result.oneSentenceT
</div>
<div style={{background:"#001a0f",border:"1px solid #00ff8720",borderLeft:"4px so
<div style={{fontSize:9,letterSpacing:2,color:"#00ff87",textTransform:"uppercas
<div style={{fontSize:14,lineHeight:1.85,color:"#d1fae5",fontStyle:"italic"}}>"
</div>
{/* Buy Range */}
<Tag label="Buy Price Target Range" note="(Lynch PEG=1 method: Fair Value = EPS ×
<div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,paddi
<div style={{display:"flex",borderRadius:4,overflow:"hidden",height:52,marginBo
{[
color:
color
{label:"AGGRESSIVE BUY", val:`$${result.fairValueLow}`, {label:"FAIR VALUE (PEG=1)", val:`$${result.fairValueHigh}`, {label:"CURRENT PRICE", val:`$${result.currentPrice.toFixed(2)}`, color
].map((s, i) => (
<div key={i} style={{flex:1,background:s.bg,borderRight:i<2?"1px solid #141
<div style={{fontSize:8,color:s.color,letterSpacing:1}}>{s.label}</div>
<div style={{fontSize:15,fontWeight:700,color:s.color,fontFamily:"monospa
</div>
))}
</div>
<div style={{textAlign:"center",fontSize:11,fontFamily:"monospace",color:result
{result.inBuyZone
? "✓ Current price is within the Lynch buy zone"
: `↑ Trading above Lynch fair value of $${result.fairValueHigh} — patience
</div>
</div>
{/* Step 7 */}
<Tag label="Step 7 — Sell Triggers" />
<div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,paddi
<div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercas
What Would Make Lynch Sell {result.ticker}
</div>
{result.sellTriggers.map((t, i) => (
<div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"1
<span style={{color:"#f87171",flexShrink:0}}>◆</span>{t}
</div>
))}
</div>
<div style={{marginTop:32,fontSize:10,color:"#222",textAlign:"center",letterSpaci
For educational purposes only · Not financial advice · Always do your own resea
</div>
</div>
)}
{/* Empty state */}
{!shown && (
<div style={{textAlign:"center",padding:"80px 0"}}>
<div style={{fontSize:44,marginBottom:16}}> </div>
<div style={{fontSize:11,letterSpacing:3,textTransform:"uppercase",color:"#2a2a2a
<div style={{marginTop:10,fontSize:11,color:"#1f1f1f"}}>
Pre-loaded: {Object.keys(PRELOADED).join(" · ")}
</div>
<div style={{marginTop:16,fontSize:12,color:"#333",lineHeight:1.8}}>
Want another stock added?<br/>
<span style={{color:"#00ff87"}}>Ask in the chat ↓</span>
</div>
</div>
)}
</div>
</div>
);
}
