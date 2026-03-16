import { useState } from "react";

const CATS = {
  FAST_GROWER: { label: "Fast Grower",  color: "#00ff87", emoji: "🚀", desc: "20%+ growth. Lynch's favourite hunting ground for 10-baggers." },
  STALWART:    { label: "Stalwart",     color: "#60a5fa", emoji: "🏛️", desc: "10–20% growth. Large, reliable. Expect 30–50% gains, not moonshots." },
  SLOW_GROWER: { label: "Slow Grower",  color: "#9ca3af", emoji: "🐢", desc: "Under 10% growth. Buy for dividends, not capital gains." },
  CYCLICAL:    { label: "Cyclical",     color: "#fbbf24", emoji: "🔄", desc: "Tied to economic cycles. Timing is everything." },
  TURNAROUND:  { label: "Turnaround",   color: "#a78bfa", emoji: "⚡", desc: "Near-distressed or restructuring. High risk, massive upside if it works." },
  SPEC:        { label: "Speculative",  color: "#f87171", emoji: "🎲", desc: "Pre-revenue or no real earnings. Lynch sized these very small." },
};

const PRELOADED = {
  ACFN: {
    companyName: "Acorn Energy, Inc.", ticker: "ACFN", currentPrice: 21.00,
    sector: "Technology / Energy Infrastructure", industry: "IoT Remote Monitoring & Control",
    category: "FAST_GROWER", revenueGrowthPct: 22.0, peRatio: 7.95, eps: 2.64,
    pegRatio: 0.37, marketCapB: 0.053, cashB: 0.0042, totalDebtB: 0.0,
    debtEquityRatio: 0.0, revenueB: 0.012, tenBaggerScore: 81,
    fairValueLow: 40, fairValueHigh: 53, inBuyZone: true,
    lynchVerdict: "This is exactly the kind of company I spent my career looking for and nobody on Wall Street was paying attention to. Acorn Energy makes the little black boxes that monitor backup generators — the ones that keep hospitals, data centers, and cell towers running when the power goes out. Revenue of $12 million, growing 22% a year, gross margins of 78%, zero debt, and a P/E of 8. Eight! On a company that just uplisted to Nasdaq and is targeting 20% annual growth for the next five years. The AI data center boom is driving demand for backup power monitoring through the roof. I'd have loved finding this one at Magellan.",
    oneSentenceThesis: "Acorn Energy's OmniMetrix subsidiary makes IoT monitoring systems for backup power generators at hospitals, data centers, cell towers, and utilities — a critical, recurring-revenue business with 78% gross margins, zero debt, and 20%+ annual growth powered by the AI data center buildout.",
    sellTriggers: [
      "Revenue growth decelerates below 15% for two consecutive quarters — the whole thesis is 20%+ top-line growth",
      "Gross margins fall below 70% — the high-margin monitoring revenue model is the crown jewel; hardware revenue diluting the mix is the risk",
      "A larger competitor (Generac, Kohler, or a telco) enters the remote monitoring space with a bundled product that undercuts OmniMetrix's pricing",
      "The cell tower generator monitoring contract (a key 2024 win) is not renewed or expanded after its initial term",
      "Management fails to close any of the OEM or M&A discussions they've flagged — the next leg of growth requires a larger customer or acquisition",
      "Cash position deteriorates below $2M with no clear path to profitability at the holding company level",
    ],
    storyCheckQuestions: [
      "Is monitoring revenue (the high-margin recurring stream) still growing 20%+, even if hardware revenue is lumpy?",
      "Has the company signed any new OEM partnerships or completed the M&A discussions management has flagged?",
      "Is the AI/data center boom still driving demand for backup power monitoring? (Check for new data center or cell tower contract wins)",
      "Has the next-generation monitor (in beta testing as of Q3 2025) launched and received positive customer feedback?",
      "Is the holding company (Acorn Energy above OmniMetrix) getting closer to covering its own overhead from operating cash flow?",
    ],
    dataNote: "Data as of Mar 2026 · Micro-cap: ~$53M market cap · Uplisted to Nasdaq July 2025 · Source: StockAnalysis, Robinhood, Acorn Q3 2025 earnings",
  },
  LULU: {
    companyName: "lululemon athletica inc.", ticker: "LULU", currentPrice: 181.00,
    sector: "Consumer Discretionary", industry: "Athleisure & Athletic Apparel",
    category: "TURNAROUND", revenueGrowthPct: 10.1, peRatio: 12.6, eps: 14.43,
    pegRatio: 0.89, marketCapB: 21, cashB: 1.3, totalDebtB: 0.0,
    debtEquityRatio: 0.0, revenueB: 10.6, tenBaggerScore: 52,
    fairValueLow: 130, fairValueHigh: 173, inBuyZone: false,
    lynchVerdict: "I love a great brand that Wall Street has given up on. Lululemon built one of the most powerful brand identities in retail — people don't just buy their leggings, they join a cult. The stock is down nearly 65% from its high, the P/E is 12, and the company has zero long-term debt. Zero! The problem isn't the balance sheet — it's that North American same-store sales are declining and the founder is publicly fighting the board. That's messy. But messy is where you find the opportunity. If they fix the product quality issues and international keeps growing at 20%+, this stock looks very cheap. I'd want to see two quarters of improving U.S. comps before I got really excited.",
    oneSentenceThesis: "Lululemon is a premium brand with a fanatically loyal customer base, zero long-term debt, and 59% gross margins — currently in a North American growth slump caused by product missteps and competition, while international business (China especially) continues to grow strongly.",
    sellTriggers: [
      "North American comparable sales continue declining for more than 3 consecutive quarters with no sign of recovery — this would signal permanent brand damage, not a temporary stumble",
      "International growth (especially China) decelerates meaningfully below 20% — the entire bull case depends on international picking up the slack",
      "Gross margins deteriorate below 55% — Lululemon's premium pricing power is the whole business model; if it cracks, the story is over",
      "The founder-board conflict escalates into a proxy battle that creates management instability",
      "A quality-control scandal (like the see-through 'Get Low' leggings) recurs and erodes brand trust at scale",
      "Nike, Alo, or Vuori meaningfully take loyal Lululemon customers in core categories (not just price competition, but product superiority)",
    ],
    storyCheckQuestions: [
      "Is North American comparable sales growth recovering — are U.S. comps back to flat or positive?",
      "Is international revenue (China, Europe) still growing 20%+, carrying the overall growth story?",
      "Are gross margins holding above 57%? (Key indicator of pricing power and brand health)",
      "Has the Chip Wilson / board conflict been resolved, and is management stability restored?",
      "Are new product launches (beyond the 'Get Low' debacle) being received positively by customers and press?",
    ],
    dataNote: "Data as of Feb 2026 · Down ~65% from 2024 highs · Debt-free · Source: StockAnalysis, GuruFocus, Yahoo Finance",
  },
  GOOG: {
    companyName: "Alphabet Inc.", ticker: "GOOG", currentPrice: 312.00,
    sector: "Communication Services", industry: "Search, Cloud & AI",
    category: "STALWART", revenueGrowthPct: 15.1, peRatio: 28.6, eps: 10.91,
    pegRatio: 1.89, marketCapB: 3700, cashB: 30.7, totalDebtB: 72.0,
    debtEquityRatio: 0.25, revenueB: 402.8, tenBaggerScore: 22,
    fairValueLow: 131, fairValueHigh: 175, inBuyZone: false,
    lynchVerdict: "When I was running Magellan, I had a rule: if a company owns a monopoly and you can buy it cheap, buy it. Google Search is the closest thing to a legal monopoly I've ever seen — they own the front door of the internet. Now they're building out cloud, AI, YouTube, and something called Waymo that might be bigger than any of it. At $3.7 trillion it's not going to be a 10-bagger. But a Stalwart with a near-monopoly Search business, a booming Cloud division, and real AI chips? That's not a bad place to be.",
    oneSentenceThesis: "Alphabet owns the world's dominant search engine (90%+ market share), a fast-growing cloud business (28% YoY growth), and YouTube — and is now investing $90B+ per year in AI infrastructure to defend and extend all three simultaneously.",
    sellTriggers: [
      "Search market share falls meaningfully below 85% — first real cracks in the moat, likely caused by AI-native competitors",
      "Google Cloud growth decelerates below 20% for two consecutive quarters, suggesting they're losing the AI infrastructure race",
      "DOJ antitrust case results in forced structural separation of Search from Android/Chrome — the distribution moat is the whole business",
      "AI Overviews begin measurably cannibalizing Search ad revenue per query — so far this hasn't happened, but it's the existential bear case",
      "The $90B+ annual CapEx fails to generate proportional returns — depreciation accelerates, margins compress",
      "PEG rises above 2.5 — at that point you're pricing in perfection with no margin for error",
    ],
    storyCheckQuestions: [
      "Is Google Search still holding 85%+ global market share, or are AI alternatives eroding it?",
      "Is Google Cloud still growing 25%+ per quarter and gaining share vs AWS and Azure?",
      "Are AI Overviews helping or hurting Search ad revenue on a per-query basis?",
      "Has the DOJ antitrust case resulted in structural remedies threatening the Android/Chrome moat?",
      "Is the $90B+ CapEx investment showing early signs of generating cloud and AI revenue at scale?",
    ],
    dataNote: "Data as of Feb–Mar 2026 · Market cap ~$3.7T · Source: StockAnalysis, MacroTrends, CompaniesMarketCap",
  },
  AMZN: {
    companyName: "Amazon.com, Inc.", ticker: "AMZN", currentPrice: 210.00,
    sector: "Consumer Discretionary / Technology", industry: "E-Commerce & Cloud Computing",
    category: "STALWART", revenueGrowthPct: 12.4, peRatio: 28.8, eps: 7.17,
    pegRatio: 1.45, marketCapB: 2200, cashB: 123, totalDebtB: 178.5,
    debtEquityRatio: 0.43, revenueB: 716.9, tenBaggerScore: 28,
    fairValueLow: 152, fairValueHigh: 203, inBuyZone: false,
    lynchVerdict: "Amazon is the rare company that built three world-class businesses in one — the everything store, the cloud that runs the internet, and an advertising network that appeared almost by accident. At a P/E of 29 and a PEG of 1.45, you're not getting a bargain, but you're also not being gouged. This isn't a 10-bagger from here — it's a $2.2 trillion company. But it's exactly the kind of Stalwart I'd hold through a recession and sleep well at night.",
    oneSentenceThesis: "Amazon has quietly become three dominant businesses — AWS (cloud infrastructure), a $56B+ advertising platform, and the world's largest e-commerce operation — and is only now starting to convert that scale into serious earnings.",
    sellTriggers: [
      "AWS revenue growth decelerates below 15% for two consecutive quarters — it's the engine of the whole profit story",
      "Microsoft Azure or Google Cloud meaningfully close the cloud market share gap with AWS",
      "Operating margins stop expanding — Amazon has gone from near-zero margins to 10%+, and the market is betting that trend continues",
      "Regulatory breakup risk becomes real — FTC antitrust scrutiny of marketplace and AWS bundling",
      "PEG rises above 2.5 on forward estimates — that's when you're paying for perfection",
    ],
    storyCheckQuestions: [
      "Is AWS still growing revenue 15%+ per quarter?",
      "Are operating margins still expanding year-over-year?",
      "Is the advertising segment still growing faster than the e-commerce base?",
      "Has any credible regulatory action threatened to break up AWS from retail?",
      "Is management still investing in AI infrastructure (Bedrock, Trainium) as the next growth leg?",
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
    lynchVerdict: "Here's a company that makes Ozempic and Wegovy — the two drugs everyone on the planet is talking about — and the stock is down 58% from its highs and trading at a P/E of 10. Ten! That's a growth company priced like a utility. The PEG of 0.52 is screaming that the market has thrown the baby out with the bathwater. I'd rather own the category creator at a steep discount than pay up for the challenger. This is exactly the kind of situation I spent my career looking for.",
    oneSentenceThesis: "Novo Nordisk invented the GLP-1 obesity drug category with Ozempic and Wegovy, controls ~54% of the global obesity drug market, and is now trading at a 10-year P/E low despite 20%+ revenue growth — entirely due to fear of competition and one weak trial result.",
    sellTriggers: [
      "A competitor GLP-1 drug gains meaningful market share in head-to-head trial data",
      "U.S. drug pricing reform targets GLP-1s beyond the 50% Ozempic cut already made",
      "CagriSema fails Phase 3 or shows inferior efficacy vs Lilly's tirzepatide — the stock's single biggest near-term risk",
      "Revenue growth decelerates below 10% for two consecutive quarters",
      "PEG rises above 1.5 as the market re-rates back toward fair value — upside largely captured",
    ],
    storyCheckQuestions: [
      "Is Ozempic/Wegovy still growing prescriptions in the U.S. and internationally?",
      "Has CagriSema shown positive Phase 3 data vs Lilly's tirzepatide?",
      "Is Novo still holding 50%+ market share in the GLP-1 obesity category?",
      "Has pricing pressure from U.S. policy worsened beyond the 50% Ozempic cut?",
      "Is manufacturing capacity expanding fast enough to meet global demand?",
    ],
    dataNote: "Data as of Feb 2026 · Down 58% from Jun 2024 highs · Source: StockAnalysis, GuruFocus, MacroTrends",
  },
  RDDT: {
    companyName: "Reddit, Inc.", ticker: "RDDT", currentPrice: 139.72,
    sector: "Communication Services", industry: "Internet Content & Information",
    category: "FAST_GROWER", revenueGrowthPct: 69.4, peRatio: 53.3, eps: 2.62,
    pegRatio: 0.60, marketCapB: 28.7, cashB: 2.1, totalDebtB: 0.0,
    debtEquityRatio: 0.01, revenueB: 2.2, tenBaggerScore: 68,
    fairValueLow: 98, fairValueHigh: 131, inBuyZone: false,
    lynchVerdict: "My grandkids argue about everything on Reddit — sports, stocks, science — and now I find out the company makes $2.2 billion in revenue and has zero debt? This is the kind of story I love: a brand that people can't live without, finally learning to monetise itself. The PEG of 0.60 means you're not paying full price for the growth. I'd be a buyer on a pullback.",
    oneSentenceThesis: "Reddit is the internet's last great repository of authentic human opinion, and after 20 years of leaving money on the table it is finally monetising 80M+ weekly searches through advertising, AI data-licensing deals, and international expansion.",
    sellTriggers: [
      "Revenue growth decelerates below 25% for two consecutive quarters without a clear macro explanation",
      "Google's AI Overviews meaningfully cut Reddit's organic search traffic — the logged-out user base advertisers pay for",
      "Management phases out user-growth metrics and replaces them with vague engagement proxies",
      "The $1B share buyback gets cancelled or reversed",
      "PEG rises above 2.0 on multiple forward estimates — you've already won, lock in gains",
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
};

function PEGBar({ peg }) {
  if (!peg || peg <= 0) return <div style={{color:"#4b5563",fontSize:12}}>N/A</div>;
  const pct = (Math.min(peg, 3) / 3) * 100;
  const color = peg < 0.5 ? "#00ff87" : peg < 1 ? "#84cc16" : peg < 1.5 ? "#fbbf24" : "#f87171";
  const label = peg < 0.5 ? "Exceptional Value" : peg < 1 ? "Good Value" : peg < 1.5 ? "Fairly Priced" : "Expensive";
  return (
    <div>
      <div style={{background:"#1a1a1a",borderRadius:3,height:8,marginBottom:6,overflow:"hidden"}}>
        <div style={{width:`${pct}%`,background:color,height:"100%",transition:"width 1s ease"}} />
      </div>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#4b5563",marginBottom:4}}>
        {["0","0.5","1.0","1.5+"].map(v => <span key={v}>{v}</span>)}
      </div>
      <div style={{color,fontSize:13,fontWeight:700}}>{label} · PEG: {peg.toFixed(2)}</div>
    </div>
  );
}

function Gauge({ score }) {
  const color = score >= 70 ? "#00ff87" : score >= 45 ? "#fbbf24" : "#f87171";
  const label = score >= 70 ? "Lynch Is Excited" : score >= 45 ? "Worth Watching" : "Proceed With Caution";
  const r = 42, C = 2 * Math.PI * r, offset = C - (score / 100) * C;
  return (
    <div style={{textAlign:"center"}}>
      <svg viewBox="0 0 100 100" width={110} height={110}>
        <circle cx={50} cy={50} r={r} fill="none" stroke="#1a1a1a" strokeWidth={10} />
        <circle cx={50} cy={50} r={r} fill="none" stroke={color} strokeWidth={10}
          strokeDasharray={C} strokeDashoffset={offset} strokeLinecap="round"
          transform="rotate(-90 50 50)" style={{transition:"stroke-dashoffset 1.2s ease"}} />
        <text x={50} y={47} textAnchor="middle" fill={color} fontSize={20} fontWeight="bold" fontFamily="monospace">{score}</text>
        <text x={50} y={60} textAnchor="middle" fill="#4b5563" fontSize={9} fontFamily="monospace">/100</text>
      </svg>
      <div style={{color,fontSize:9,fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginTop:-4}}>{label}</div>
    </div>
  );
}

function Tag({ label, note }) {
  return (
    <div style={{fontSize:9,letterSpacing:3,color:"#333",textTransform:"uppercase",marginBottom:8,marginTop:24,display:"flex",alignItems:"center",gap:8}}>
      {label}
      {note && <span style={{color:"#222",letterSpacing:0,textTransform:"none",fontSize:10}}>{note}</span>}
      <div style={{flex:1,height:1,background:"#1a1a1a"}} />
    </div>
  );
}

function MiniCard({ label, value, color, sub }) {
  return (
    <div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding:16}}>
      <div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase",marginBottom:8}}>{label}</div>
      <div style={{fontSize:22,fontWeight:700,color:color||"#f9fafb",fontFamily:"monospace"}}>{value}</div>
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
  const qty  = parseFloat(shares);
  const cur  = result.currentPrice;
  const hasCost = !isNaN(cost) && cost > 0;
  const hasQty  = !isNaN(qty)  && qty  > 0;

  const gainPct    = hasCost ? ((cur - cost) / cost) * 100 : null;
  const gainDollar = hasCost && hasQty ? (cur - cost) * qty : null;
  const totalVal   = hasQty ? cur * qty : null;
  const costVal    = hasCost && hasQty ? cost * qty : null;
  const vsHigh     = hasCost ? ((result.fairValueHigh - cost) / cost) * 100 : null;

  const fails   = Object.values(checks).filter(v => v === "no").length;
  const passes  = Object.values(checks).filter(v => v === "yes").length;
  const answered = fails + passes;

  const signal = (() => {
    if (!answered) return null;
    if (fails >= 2) return {
      level: "⚠ CONSIDER EXITING", color: "#f87171", bg: "#1a0808", border: "#7f1d1d",
      msg: `${fails} story checks are failing. Lynch's rule: when the story changes, you sell — not because the price dropped, but because the reason you bought no longer holds.`
    };
    if (fails === 1 && cur > result.fairValueHigh * 1.3) return {
      level: "✂ CONSIDER TRIMMING", color: "#fbbf24", bg: "#1a1200", border: "#78350f",
      msg: "One story check is failing and you're well above Lynch fair value. He'd probably trim here — take some profit and watch how the next quarter plays out."
    };
    if (fails === 0 && cur > result.fairValueHigh * 1.5) return {
      level: "✂ CONSIDER TRIMMING", color: "#fbbf24", bg: "#1a1200", border: "#78350f",
      msg: `You're ${((cur / result.fairValueHigh - 1) * 100).toFixed(0)}% above Lynch fair value with the story intact. Lynch would consider lightening up — not selling everything, but locking in some gains.`
    };
    if (fails === 0 && passes >= 2 && cur <= result.fairValueHigh) return {
      level: "✓ HOLD — STORY INTACT", color: "#00ff87", bg: "#00100a", border: "#065f46",
      msg: "The story checks out and you're still within fair value. Lynch's advice: don't talk yourself out of a winner. Hold."
    };
    if (fails === 0 && passes >= 1) return {
      level: "◎ HOLD / MONITOR", color: "#84cc16", bg: "#0a1200", border: "#365314",
      msg: "Story looks intact so far. Lynch always said the best investors check their thesis every quarter — not their stock price every day."
    };
    return null;
  })();

  const inp = {
    background:"#0a0a0a", border:"1px solid #1f1f1f", borderRadius:3,
    color:"#00ff87", fontFamily:"'Courier New',monospace", fontSize:15,
    fontWeight:700, padding:"10px 14px", width:"100%", caretColor:"#00ff87",
  };

  return (
    <div style={{background:"#0a0f0a",border:"1px solid #00ff8718",borderLeft:"4px solid #00ff87",borderRadius:4,padding:20}}>
      <div style={{fontSize:9,letterSpacing:3,color:"#00ff87",textTransform:"uppercase",marginBottom:16}}>
        📊 My Position in {result.ticker}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
        <div>
          <div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase",marginBottom:6}}>Cost Basis (per share)</div>
          <input type="number" placeholder="e.g. 250.00" value={costBasis} onChange={e => setCostBasis(e.target.value)} style={inp} />
        </div>
        <div>
          <div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase",marginBottom:6}}>Shares Owned</div>
          <input type="number" placeholder="e.g. 10" value={shares} onChange={e => setShares(e.target.value)} style={inp} />
        </div>
      </div>

      {hasCost && (
        <div style={{marginBottom:16}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:12}}>
            {[
              {
                label: "Gain / Loss",
                val: `${gainPct >= 0 ? "+" : ""}${gainPct.toFixed(1)}%`,
                color: gainPct >= 0 ? "#00ff87" : "#f87171",
                sub: gainDollar != null
                  ? `${gainDollar >= 0 ? "+" : "-"}$${Math.abs(gainDollar).toLocaleString("en-US",{maximumFractionDigits:0})} ${gainDollar >= 0 ? "profit" : "loss"}`
                  : "enter shares for $P&L"
              },
              {
                label: "Your Cost",
                val: `$${cost.toFixed(2)}`,
                color: "#f9fafb",
                sub: costVal ? `$${costVal.toLocaleString("en-US",{maximumFractionDigits:0})} invested` : null
              },
              {
                label: "Current Value",
                val: totalVal ? `$${totalVal.toLocaleString("en-US",{maximumFractionDigits:0})}` : `$${cur.toFixed(2)}`,
                color: "#f9fafb",
                sub: hasQty ? `${qty} shares` : "enter shares"
              },
            ].map(item => (
              <div key={item.label} style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding:"12px 14px"}}>
                <div style={{fontSize:9,letterSpacing:1.5,color:"#4b5563",textTransform:"uppercase"}}>{item.label}</div>
                <div style={{fontSize:18,fontWeight:700,color:item.color,fontFamily:"monospace",marginTop:4}}>{item.val}</div>
                {item.sub && <div style={{fontSize:10,color:"#4b5563",marginTop:3}}>{item.sub}</div>}
              </div>
            ))}
          </div>

          <div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding:"14px 16px"}}>
            <div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase",marginBottom:10}}>
              Your Cost vs Lynch Fair Value Range
            </div>
            <div style={{display:"flex",height:40,borderRadius:3,overflow:"hidden",marginBottom:8}}>
              {[
                {label:"YOUR COST", val:`$${cost.toFixed(0)}`, color:"#60a5fa", bg:"#1e3a5f40"},
                {label:"BUY ZONE",  val:`$${result.fairValueLow}–$${result.fairValueHigh}`, color:"#00ff87", bg:"#00200f"},
                {label:"CURRENT",   val:`$${cur.toFixed(0)}`, color:cur>result.fairValueHigh?"#f87171":"#00ff87", bg:cur>result.fairValueHigh?"#1a080840":"#001a0f"},
              ].map((s, i) => (
                <div key={i} style={{flex:1,background:s.bg,borderRight:i<2?"1px solid #111":"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                  <div style={{fontSize:8,color:s.color,letterSpacing:0.5,textAlign:"center"}}>{s.label}</div>
                  <div style={{fontSize:12,fontWeight:700,color:s.color,fontFamily:"monospace"}}>{s.val}</div>
                </div>
              ))}
            </div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:11,flexWrap:"wrap",gap:4}}>
              <span style={{color:vsHigh>=0?"#00ff87":"#f87171",fontFamily:"monospace"}}>
                Upside to fair value from cost: {vsHigh != null ? `${vsHigh >= 0 ? "+" : ""}${vsHigh.toFixed(1)}%` : "—"}
              </span>
              <span style={{color:"#4b5563",fontSize:10}}>
                {cost < result.fairValueLow ? "✓ Bought below Lynch buy zone" : cost <= result.fairValueHigh ? "✓ Bought within Lynch range" : "↑ Bought above Lynch fair value"}
              </span>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setShowStory(!showStory)} style={{
        background:"transparent", border:"1px solid #1f2937", borderRadius:3, color:"#9ca3af",
        cursor:"pointer", fontFamily:"'Courier New',monospace", fontSize:11, fontWeight:700,
        letterSpacing:1, textTransform:"uppercase", padding:"10px 16px", width:"100%",
        display:"flex", justifyContent:"space-between", alignItems:"center",
      }}>
        <span>🔍 Story Check — Has the thesis changed?</span>
        <span style={{color:"#4b5563",fontSize:10}}>{showStory ? "▲ hide" : "▼ show"}</span>
      </button>

      {showStory && (
        <div style={{marginTop:10,background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,overflow:"hidden"}}>
          <div style={{padding:"10px 16px 8px",fontSize:10,color:"#4b5563",lineHeight:1.6,borderBottom:"1px solid #111",fontStyle:"italic"}}>
            Lynch: "Before you sell, ask yourself — has the story changed? If the story is still intact, hold. If it has changed, it doesn't matter what price you paid."
          </div>
          {(result.storyCheckQuestions || []).map((q, i) => (
            <div key={i} style={{padding:"12px 16px",borderBottom:"1px solid #111",display:"flex",alignItems:"flex-start",gap:12,flexWrap:"wrap"}}>
              <div style={{flex:1,fontSize:12,color:"#9ca3af",lineHeight:1.6,minWidth:180}}>{q}</div>
              <div style={{display:"flex",gap:6,flexShrink:0}}>
                {[{opt:"yes",color:"#00ff87"},{opt:"no",color:"#f87171"},{opt:"?",color:"#fbbf24"}].map(({opt, color}) => {
                  const sel = checks[i] === opt;
                  return (
                    <button key={opt} onClick={() => setChecks(p => ({...p, [i]: opt}))} style={{
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
            <div style={{background:signal.bg,borderTop:`1px solid ${signal.border}`,padding:16}}>
              <div style={{marginBottom:8}}>
                <span style={{
                  background:signal.color+"22", color:signal.color,
                  border:`1px solid ${signal.color}40`,
                  fontFamily:"'Courier New',monospace", fontSize:10, fontWeight:700,
                  padding:"3px 12px", borderRadius:2, letterSpacing:1,
                }}>{signal.level}</span>
              </div>
              <div style={{fontSize:13,lineHeight:1.75,fontStyle:"italic",
                color:signal.color==="#00ff87"?"#d1fae5":signal.color==="#fbbf24"?"#fef3c7":"#fecaca"}}>
                "{signal.msg}"
              </div>
            </div>
          ) : answered === 0 ? (
            <div style={{padding:"12px 16px",fontSize:11,color:"#2a2a2a",fontStyle:"italic"}}>
              Answer the questions above to get a Lynch exit signal.
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default function LynchAnalyzer() {
  const [input,  setInput]  = useState("");
  const [result, setResult] = useState(null);
  const [notice, setNotice] = useState("");
  const [shown,  setShown]  = useState(false);

  function lookup() {
    const t = input.trim().toUpperCase();
    if (!t) return;
    const data = PRELOADED[t];
    if (data) { setResult(data); setNotice(""); }
    else      { setResult(null); setNotice(t); }
    setShown(true);
  }

  const cat = result ? CATS[result.category] : null;

  return (
    <div style={{minHeight:"100vh",background:"#080808",color:"#e5e7eb",fontFamily:"'Courier New',monospace"}}>
      <style>{`* { box-sizing:border-box; margin:0; padding:0; } @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} } input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; } ::placeholder { color:#2a2a2a; } input:focus { outline:none; border-color:#00ff8750 !important; } button:hover { opacity:0.85; }`}</style>

      <div style={{maxWidth:820,margin:"0 auto",padding:"0 20px 80px"}}>

        {/* Header */}
        <div style={{borderBottom:"1px solid #141414",padding:"32px 0 24px",marginBottom:36}}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:4,color:"#00ff87",textTransform:"uppercase"}}>
            Magellan Fund · Research Terminal
          </div>
          <h1 style={{fontSize:"clamp(28px,5vw,44px)",fontWeight:900,letterSpacing:-2,marginTop:8,color:"#f9fafb",lineHeight:1.1}}>
            Peter Lynch<br/><span style={{color:"#00ff87"}}>Stock Analyzer</span>
          </h1>
          <p style={{color:"#333",fontSize:11,marginTop:10,letterSpacing:1}}>
            One Up On Wall Street · 7-Step Framework · Real Data
          </p>
        </div>

        {/* Search */}
        <div style={{display:"flex",gap:10,marginBottom:32,background:"#0f0f0f",border:"1px solid #1a1a1a",borderRadius:4,padding:"14px 16px",alignItems:"center"}}>
          <span style={{color:"#333",fontSize:11,letterSpacing:2,textTransform:"uppercase",whiteSpace:"nowrap"}}>TICKER →</span>
          <input
            value={input}
            onChange={e => setInput(e.target.value.toUpperCase())}
            onKeyDown={e => e.key === "Enter" && lookup()}
            placeholder="GOOG · AMZN · NVO · RDDT"
            style={{flex:1,background:"transparent",border:"none",color:"#00ff87",fontFamily:"'Courier New',monospace",fontSize:18,fontWeight:700,letterSpacing:2,caretColor:"#00ff87",minWidth:0,outline:"none"}}
          />
          <button onClick={lookup} style={{background:"#00ff87",color:"#000",border:"none",borderRadius:3,cursor:"pointer",fontFamily:"'Courier New',monospace",fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",padding:"10px 18px",whiteSpace:"nowrap"}}>
            RUN →
          </button>
        </div>

        {/* Not found */}
        {shown && notice && (
          <div style={{background:"#0f0f0f",border:"1px solid #1a1a1a",borderLeft:"4px solid #00ff87",borderRadius:4,padding:"20px 24px",marginBottom:24,animation:"fadeIn .4s ease"}}>
            <div style={{fontSize:9,letterSpacing:3,color:"#00ff87",textTransform:"uppercase",marginBottom:10}}>Ticker not pre-loaded</div>
            <p style={{fontSize:13,color:"#9ca3af",lineHeight:1.8}}>
              <strong style={{color:"#f9fafb"}}>{notice}</strong> hasn't been analysed yet.<br/>
              👉 <strong style={{color:"#00ff87"}}>Ask in the chat</strong> — say "Add {notice}" and I'll research it live and rebuild the app.
            </p>
            <div style={{marginTop:10,fontSize:11,color:"#333"}}>Pre-loaded: {Object.keys(PRELOADED).join(" · ")}</div>
          </div>
        )}

        {/* Result */}
        {result && cat && (
          <div style={{animation:"fadeIn .5s ease"}}>

            {/* Company header */}
            <div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding:24,marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:20}}>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6,flexWrap:"wrap"}}>
                  <span style={{background:"#00ff87",color:"#000",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:2,letterSpacing:2}}>{result.ticker}</span>
                  <span style={{color:"#4b5563",fontSize:11}}>{result.sector} · {result.industry}</span>
                </div>
                <h2 style={{fontSize:20,fontWeight:700,color:"#f9fafb"}}>{result.companyName}</h2>
                <div style={{fontSize:30,fontWeight:900,color:"#00ff87",fontFamily:"monospace",marginTop:4}}>${result.currentPrice.toFixed(2)}</div>
                {result.dataNote && <div style={{color:"#2a2a2a",fontSize:10,marginTop:6}}>ⓘ {result.dataNote}</div>}
              </div>
              <Gauge score={result.tenBaggerScore} />
            </div>

            {/* My Position */}
            <Tag label="My Position" note="— optional: enter your cost basis &amp; run story check" />
            <PositionTracker result={result} />

            {/* Step 1 */}
            <Tag label="Step 1 — Lynch Category" />
            <div style={{background:cat.color+"0f",border:`1px solid ${cat.color}30`,borderLeft:`4px solid ${cat.color}`,borderRadius:4,padding:"16px 20px",marginBottom:16,display:"flex",alignItems:"center",gap:16}}>
              <span style={{fontSize:28}}>{cat.emoji}</span>
              <div>
                <div style={{color:cat.color,fontWeight:700,fontSize:16}}>{cat.label}</div>
                <div style={{color:"#6b7280",fontSize:12,marginTop:2}}>{cat.desc}</div>
              </div>
            </div>

            {/* Steps 2-4 */}
            <Tag label="Steps 2–4 — Growth · P/E · PEG" />
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:10,marginBottom:16}}>
              <MiniCard
                label="Revenue Growth (YoY)"
                value={(result.revenueGrowthPct > 0 ? "+" : "") + result.revenueGrowthPct.toFixed(1) + "%"}
                color={result.revenueGrowthPct > 20 ? "#00ff87" : result.revenueGrowthPct > 10 ? "#fbbf24" : "#f87171"}
                sub="FY2025 vs FY2024"
              />
              <MiniCard
                label="P/E Ratio (TTM)"
                value={result.peRatio > 0 ? result.peRatio.toFixed(1) + "×" : "N/A"}
                color="#f9fafb"
                sub={`EPS (TTM): $${result.eps.toFixed(2)}`}
              />
              <div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding:16}}>
                <div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase",marginBottom:8}}>PEG Ratio</div>
                <PEGBar peg={result.pegRatio} />
                <div style={{fontSize:10,color:"#4b5563",marginTop:6}}>Lynch target: &lt; 1.0</div>
              </div>
            </div>

            {/* Step 5 */}
            <Tag label="Step 5 — Balance Sheet" />
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:16}}>
              {[
                {label:"💵 Cash",        val:`$${result.cashB.toFixed(1)}B`},
                {label:"📋 Total Debt",  val:result.totalDebtB===0?"Debt-Free ✓":`$${result.totalDebtB.toFixed(1)}B`},
                {label:"⚖️ Debt/Equity", val:result.debtEquityRatio.toFixed(2)},
                {label:"📊 Revenue TTM", val:`$${result.revenueB.toFixed(1)}B`},
                {label:"🏢 Market Cap",  val:result.marketCapB>=1000?`$${(result.marketCapB/1000).toFixed(1)}T`:`$${result.marketCapB.toFixed(1)}B`},
              ].map(item => (
                <div key={item.label} style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding:"14px 16px"}}>
                  <div style={{fontSize:9,letterSpacing:1.5,color:"#4b5563",textTransform:"uppercase"}}>{item.label}</div>
                  <div style={{fontSize:17,fontWeight:700,color:"#f9fafb",fontFamily:"monospace",marginTop:4}}>{item.val}</div>
                </div>
              ))}
              <div style={{
                background:result.debtEquityRatio<0.5?"#00ff870a":result.debtEquityRatio<1.5?"#fbbf240a":"#f871710a",
                border:`1px solid ${result.debtEquityRatio<0.5?"#00ff8720":result.debtEquityRatio<1.5?"#fbbf2420":"#f8717120"}`,
                borderRadius:4,padding:"14px 16px",
              }}>
                <div style={{fontSize:9,letterSpacing:1.5,color:"#4b5563",textTransform:"uppercase"}}>Balance Sheet Health</div>
                <div style={{fontSize:13,fontWeight:700,marginTop:6,color:result.debtEquityRatio<0.5?"#00ff87":result.debtEquityRatio<1.5?"#fbbf24":"#f87171"}}>
                  {result.debtEquityRatio<0.5?"✅ Clean / Debt-Free":result.debtEquityRatio<1.5?"⚠️ Moderate Leverage":"🚨 Heavy Debt Load"}
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <Tag label="Step 6 — One-Sentence Thesis & Lynch Verdict" />
            <div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding:"16px 20px",marginBottom:10}}>
              <div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase",marginBottom:8}}>The Story</div>
              <div style={{color:"#9ca3af",fontSize:13,lineHeight:1.75}}>{result.oneSentenceThesis}</div>
            </div>
            <div style={{background:"#001a0f",border:"1px solid #00ff8720",borderLeft:"4px solid #00ff87",borderRadius:4,padding:20,marginBottom:16}}>
              <div style={{fontSize:9,letterSpacing:2,color:"#00ff87",textTransform:"uppercase",marginBottom:10}}>🎙 Peter Lynch Says</div>
              <div style={{fontSize:14,lineHeight:1.85,color:"#d1fae5",fontStyle:"italic"}}>"{result.lynchVerdict}"</div>
            </div>

            {/* Buy Range */}
            <Tag label="Buy Price Target Range" note="(Lynch PEG=1 method: Fair Value = EPS × growth rate)" />
            <div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding:20,marginBottom:16}}>
              <div style={{display:"flex",borderRadius:4,overflow:"hidden",height:52,marginBottom:12}}>
                {[
                  {label:"AGGRESSIVE BUY",    val:`$${result.fairValueLow}`,           color:"#00ff87", bg:"#00ff870d"},
                  {label:"FAIR VALUE (PEG=1)", val:`$${result.fairValueHigh}`,          color:"#fbbf24", bg:"#fbbf240d"},
                  {label:"CURRENT PRICE",     val:`$${result.currentPrice.toFixed(2)}`, color:result.inBuyZone?"#00ff87":"#f87171", bg:result.inBuyZone?"#00ff870d":"#f871710d"},
                ].map((s, i) => (
                  <div key={i} style={{flex:1,background:s.bg,borderRight:i<2?"1px solid #141414":"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{fontSize:8,color:s.color,letterSpacing:1}}>{s.label}</div>
                    <div style={{fontSize:15,fontWeight:700,color:s.color,fontFamily:"monospace"}}>{s.val}</div>
                  </div>
                ))}
              </div>
              <div style={{textAlign:"center",fontSize:11,fontFamily:"monospace",color:result.inBuyZone?"#00ff87":"#f87171"}}>
                {result.inBuyZone
                  ? "✓ Current price is within the Lynch buy zone"
                  : `↑ Trading above Lynch fair value of $${result.fairValueHigh} — patience pays`}
              </div>
            </div>

            {/* Step 7 */}
            <Tag label="Step 7 — Sell Triggers" />
            <div style={{background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:4,padding:"4px 20px 16px",marginBottom:8}}>
              <div style={{fontSize:9,letterSpacing:2,color:"#4b5563",textTransform:"uppercase",padding:"14px 0 10px"}}>
                What Would Make Lynch Sell {result.ticker}
              </div>
              {result.sellTriggers.map((t, i) => (
                <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"10px 0",borderTop:"1px solid #111",fontSize:13,color:"#9ca3af",lineHeight:1.65}}>
                  <span style={{color:"#f87171",flexShrink:0}}>◆</span>{t}
                </div>
              ))}
            </div>

            <div style={{marginTop:32,fontSize:10,color:"#222",textAlign:"center",letterSpacing:1}}>
              For educational purposes only · Not financial advice · Always do your own research
            </div>
          </div>
        )}

        {/* Empty state */}
        {!shown && (
          <div style={{textAlign:"center",padding:"80px 0"}}>
            <div style={{fontSize:44,marginBottom:16}}>📈</div>
            <div style={{fontSize:11,letterSpacing:3,textTransform:"uppercase",color:"#2a2a2a"}}>Enter a ticker to begin</div>
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
