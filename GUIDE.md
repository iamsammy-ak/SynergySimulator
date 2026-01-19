# M&A Merger Simulator - Complete Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Company Financials](#company-financials)
3. [Merger Assumptions](#merger-assumptions)
4. [Transaction Metrics](#transaction-metrics)
5. [Pro Forma Financials](#pro-forma-financials)
6. [Ownership & Dilution](#ownership--dilution)
7. [Accretion/Dilution Analysis](#accretiondilution-analysis)
8. [Valuation Metrics](#valuation-metrics)
9. [How Calculations Work](#how-calculations-work)
10. [Practical Examples](#practical-examples)

---

## Introduction

This guide explains every financial term, calculation, and concept used in the M&A Merger Simulator. Whether you're a student learning corporate finance or a professional analyzing deals, this document will help you understand what each metric means and why it matters.

### What is M&A?

**M&A (Mergers & Acquisitions)** is when one company (the acquirer) buys or combines with another company (the target). This simulator helps you model what happens financially when two companies merge.

---

## Company Financials

These are the basic financial metrics for each company before the merger.

### Revenue
**What it is:** Total money the company earns from selling products/services in a year.

**Example:** If Apple sells $394 billion worth of iPhones, Macs, and services in a year, that's their revenue.

**Why it matters:** Shows the size and scale of the business. Larger revenue typically means a bigger, more established company.

**In the simulator:** Entered in millions (M). So $1,000M = $1 billion.

---

### EBITDA
**Full name:** Earnings Before Interest, Taxes, Depreciation, and Amortization

**What it is:** A measure of profitability that shows how much cash the company generates from operations.

**How it's calculated:**
```
EBITDA = Net Income + Interest + Taxes + Depreciation + Amortization
```

**Example:** If a company has:
- Revenue: $1,000M
- Operating costs: $800M
- EBITDA: $200M

This means they keep $200M (20%) after paying for operations but before paying interest, taxes, etc.

**Why it matters:**
- Shows operating profitability
- Used to compare companies regardless of capital structure
- Key metric for valuation (companies are often valued at "X times EBITDA")

**Typical margins:**
- Software companies: 30-40%
- Manufacturing: 10-20%
- Retail: 5-10%

---

### Net Income
**What it is:** The actual profit left after ALL expenses (operations, interest, taxes, depreciation).

**How it's calculated:**
```
Net Income = Revenue - All Costs - Interest - Taxes
```

**Example:**
- Revenue: $1,000M
- EBITDA: $200M
- Depreciation: $30M
- Interest: $20M
- Taxes (30%): $45M
- Net Income: $105M

**Why it matters:** This is the "bottom line" - what shareholders actually earn. Used to calculate EPS.

**Relationship to EBITDA:** Net Income is always lower than EBITDA because it subtracts more expenses.

---

### Shares Outstanding
**What it is:** Total number of company shares owned by all shareholders.

**Example:** If Apple has 15.55 billion shares outstanding, and you own 1,000 shares, you own 0.0000064% of Apple.

**Why it matters:**
- Determines ownership percentages
- Used to calculate EPS (Earnings Per Share)
- More shares = more dilution when issuing new shares

**In the simulator:** Entered in millions (M). So 100M shares = 100,000,000 shares.

---

### Stock Price
**What it is:** The current market price per share of the company's stock.

**Example:** If Tesla trades at $250 per share, that's the stock price.

**How it's determined:** Supply and demand in the stock market.

**Why it matters:**
- Determines market capitalization
- Sets the baseline for acquisition premium
- Affects how much stock the acquirer needs to issue

**Market Cap calculation:**
```
Market Cap = Stock Price × Shares Outstanding
```

---

### Debt Outstanding
**What it is:** Total amount of money the company owes (bonds, loans, credit lines).

**Example:** A company might have:
- Bank loans: $200M
- Corporate bonds: $500M
- Total debt: $700M

**Why it matters:**
- Acquirer assumes the target's debt in most deals
- Affects enterprise value
- Interest payments reduce profitability

**Enterprise Value calculation:**
```
Enterprise Value = Market Cap + Debt - Cash
```

---

## Merger Assumptions

These are the terms you set for the deal.

### Acquisition Premium
**What it is:** How much more than the current stock price the acquirer offers.

**How it's calculated:**
```
Offer Price = Current Stock Price × (1 + Premium %)
```

**Example:**
- Target stock price: $30
- Premium: 25%
- Offer price: $30 × 1.25 = $37.50

**Why it matters:**
- Shareholders won't sell without a premium
- Higher premium = more expensive deal
- Typical range: 20-40%

**Why premiums exist:**
- Compensate shareholders for loss of upside
- Ensure deal approval
- Competitive bidding drives premiums up

**Historical examples:**
- Microsoft buying LinkedIn: 50% premium
- Disney buying Fox: 25% premium
- Most hostile takeovers: 30-40% premium

---

### Cash vs Stock Consideration
**What it is:** How the acquirer pays for the target company.

**Options:**
1. **Cash:** Acquirer pays with actual money
2. **Stock:** Acquirer issues new shares to target shareholders
3. **Mixed:** Combination of both

**Example - 50/50 deal:**
- Total price: $1,000M
- Cash portion: $500M (acquirer pays $500M in cash)
- Stock portion: $500M (acquirer issues new shares worth $500M)

**Why it matters:**

**Cash:**
- ✅ Target shareholders get immediate payout
- ✅ No dilution for acquirer shareholders
- ❌ Requires acquirer to have or borrow cash
- ❌ May trigger taxes for target shareholders

**Stock:**
- ✅ Preserves acquirer's cash
- ✅ Target shareholders benefit from future upside
- ✅ Often tax-deferred for target shareholders
- ❌ Dilutes acquirer shareholders

**Typical splits:**
- Cash-rich acquirers: 70-100% cash
- High-growth tech: 60-80% stock
- "Merger of equals": 100% stock

---

### Synergies
**What it is:** Additional value created by combining the two companies.

**Two types:**

#### 1. Cost Synergies
**What it is:** Savings from eliminating duplicate costs.

**Examples:**
- Closing duplicate offices
- Eliminating redundant staff
- Negotiating better supplier prices with combined volume
- Consolidating IT systems

**Calculation example:**
- Acquirer HQ costs: $50M/year
- Target HQ costs: $30M/year
- Combined HQ costs: $60M/year (not $80M)
- Cost synergy: $20M/year

#### 2. Revenue Synergies
**What it is:** Additional revenue from combining the businesses.

**Examples:**
- Cross-selling products to each other's customers
- Entering new markets with combined resources
- Combining technologies to create new products
- Increased pricing power

**Calculation example:**
- Acquirer can now sell its products to target's customers
- Target has 1M customers
- 10% buy acquirer's products
- Average sale: $100
- Revenue synergy: $10M/year

**Why it matters:**
- Makes expensive deals justifiable
- Often the difference between success and failure
- Revenue synergies are harder to achieve than cost synergies

**Realization timeline:**
- Cost synergies: 1-2 years (easier to implement)
- Revenue synergies: 2-5 years (harder to achieve)

**Important:** In the simulator, synergies are entered as annual values and assumed to be fully realized immediately (simplified model).

---

### Debt Financing
**What it is:** New debt the acquirer takes on to fund the acquisition.

**Example:**
- Acquirer needs $1,000M to buy target
- Has $300M in cash
- Issues $700M in new bonds/loans

**Interest Rate:** The annual cost of borrowing money.

**Calculation:**
```
Annual Interest Payment = Debt Amount × Interest Rate
Example: $700M × 5% = $35M/year
```

**Why it matters:**
- Cheaper than using cash or stock
- Interest is tax-deductible
- But increases risk (must make payments)

**Typical rates (as of 2024-2026):**
- Investment grade: 4-6%
- High yield: 7-10%
- Bank loans: 5-7%

---

## Transaction Metrics

Results from the deal structure.

### Offer Price per Share
**Calculation:**
```
Offer Price = Target Stock Price × (1 + Premium %)
```

**Example:**
- Target trades at $30
- 25% premium
- Offer: $37.50

**Significance:** This is what target shareholders receive per share.

---

### Total Consideration
**What it is:** Total amount paid for the entire target company.

**Calculation:**
```
Total Consideration = Offer Price × Target Shares Outstanding
```

**Example:**
- Offer price: $37.50
- Target shares: 50M
- Total consideration: $1,875M ($1.875 billion)

**Significance:** The total "price tag" of the acquisition.

---

### New Shares Issued
**What it is:** Number of new acquirer shares given to target shareholders (if using stock).

**Calculation:**
```
New Shares = Stock Consideration ÷ Acquirer Stock Price
```

**Example:**
- Stock portion of deal: $937.5M
- Acquirer stock price: $50
- New shares issued: 18.75M

**Why it matters:**
- Dilutes existing shareholders
- Determines post-merger ownership split
- Affects EPS (more shares = lower EPS, all else equal)

---

## Pro Forma Financials

"Pro forma" means "as if" - what the combined company's financials will look like after the merger.

### Pro Forma Revenue
**Calculation:**
```
Pro Forma Revenue = Acquirer Revenue + Target Revenue + Revenue Synergies
```

**Example:**
- Acquirer: $1,000M
- Target: $400M
- Revenue synergies: $10M
- Pro forma: $1,410M

**Why it matters:** Shows the total size of the combined company.

---

### Pro Forma EBITDA
**Calculation:**
```
Pro Forma EBITDA = Acquirer EBITDA + Target EBITDA + Cost Synergies
```

**Example:**
- Acquirer: $200M
- Target: $80M
- Cost synergies: $20M
- Pro forma: $300M

**Why it matters:**
- Shows combined profitability
- Used for valuation multiples
- Determines ability to service debt

---

### Pro Forma Net Income
**Calculation (simplified in simulator):**
```
1. Start with combined standalone net income
2. Add synergy impact (synergies × 70% for taxes)
3. Subtract new interest expense (new debt × rate × 70% after tax)

Pro Forma Net Income =
  (Acquirer Net Income + Target Net Income) +
  (Total Synergies × EBITDA Margin × 0.7) -
  (New Debt × Interest Rate × 0.7)
```

**Example:**
- Combined standalone: $165M
- Synergy benefit: +$15M
- New interest cost: -$21M
- Pro forma: $159M

**Why it matters:** This determines the pro forma EPS.

---

### Pro Forma Total Shares
**Calculation:**
```
Pro Forma Shares = Acquirer Shares + New Shares Issued
```

**Example:**
- Acquirer shares: 100M
- New shares issued: 18.75M
- Pro forma shares: 118.75M

**Why it matters:** Denominator for calculating pro forma EPS.

---

### Pro Forma EPS
**What it is:** Earnings Per Share for the combined company.

**Calculation:**
```
Pro Forma EPS = Pro Forma Net Income ÷ Pro Forma Total Shares
```

**Example:**
- Pro forma net income: $159M
- Pro forma shares: 118.75M
- Pro forma EPS: $1.34

**Why it matters:** The MOST IMPORTANT metric for determining if a deal is good for acquirer shareholders.

---

## Ownership & Dilution

### Acquirer Ownership Percentage
**Calculation:**
```
Acquirer Ownership = (Acquirer Shares ÷ Pro Forma Shares) × 100%
```

**Example:**
- Acquirer shares: 100M
- Pro forma shares: 118.75M
- Acquirer ownership: 84.2%

**What it means:** Acquirer shareholders own 84.2% of the combined company.

---

### Target Ownership Percentage
**Calculation:**
```
Target Ownership = (New Shares ÷ Pro Forma Shares) × 100%
```

**Example:**
- New shares: 18.75M
- Pro forma shares: 118.75M
- Target ownership: 15.8%

**What it means:** Former target shareholders own 15.8% of the combined company.

---

### Dilution
**What it is:** When existing shareholders own a smaller percentage of the company after issuing new shares.

**Example:**
- You own 1% of acquirer before merger (1M of 100M shares)
- After merger, you own 0.84% (1M of 118.75M shares)
- Your ownership was diluted by 16%

**Why it matters:** Dilution reduces your voting power and share of future profits.

---

## Accretion/Dilution Analysis

This is the heart of M&A analysis - does the deal increase or decrease EPS for acquirer shareholders?

### Standalone EPS
**What it is:** Acquirer's EPS before the merger.

**Calculation:**
```
Standalone EPS = Acquirer Net Income ÷ Acquirer Shares
```

**Example:**
- Net income: $120M
- Shares: 100M
- Standalone EPS: $1.20

---

### EPS Change
**Calculation:**
```
EPS Change = Pro Forma EPS - Standalone EPS
```

**Example:**
- Pro forma EPS: $1.34
- Standalone EPS: $1.20
- EPS change: +$0.14

---

### EPS Change Percentage
**Calculation:**
```
EPS Change % = (EPS Change ÷ Standalone EPS) × 100%
```

**Example:**
- EPS change: +$0.14
- Standalone EPS: $1.20
- EPS change %: +11.7%

---

### Accretive vs Dilutive

**ACCRETIVE (Good for acquirer shareholders):**
- Pro forma EPS > Standalone EPS
- EPS increases
- Value created for shareholders
- Example: EPS goes from $1.20 to $1.34 (+11.7%)

**DILUTIVE (Bad for acquirer shareholders):**
- Pro forma EPS < Standalone EPS
- EPS decreases
- Value destroyed for shareholders
- Example: EPS goes from $1.20 to $1.10 (-8.3%)

**Why it matters:**
- Determines if shareholders should support the deal
- Stock price often rises for accretive deals
- Stock price often falls for dilutive deals

**What causes dilution:**
- Paying too high a premium
- Insufficient synergies
- Issuing too much stock
- Taking on too much expensive debt

**What causes accretion:**
- Strong synergies
- Reasonable premium
- Efficient financing mix
- Target has higher profit margins

---

## Valuation Metrics

### Pro Forma Market Cap
**Calculation:**
```
Pro Forma Market Cap = Pro Forma Shares × Acquirer Stock Price
```

**Example:**
- Pro forma shares: 118.75M
- Stock price: $50
- Market cap: $5,937.5M

**What it means:** Total value of all shares in the combined company.

**Note:** This assumes the stock price doesn't change (simplified).

---

### Pro Forma Enterprise Value
**What it is:** Total value of the combined business.

**Calculation:**
```
Enterprise Value = Market Cap + Total Debt
Total Debt = Acquirer Debt + Target Debt + New Debt
```

**Example:**
- Market cap: $5,937.5M
- Acquirer debt: $300M
- Target debt: $100M
- New debt: $200M
- Enterprise value: $6,537.5M

**Why it matters:**
- True cost to acquire the entire business
- Used for valuation multiples (EV/EBITDA)
- More accurate than market cap alone

---

### Estimated IRR (Internal Rate of Return)
**What it is:** Expected annual return percentage if the acquirer sold the combined company in the future.

**Simplified Calculation in Simulator:**
```
1. Assume exit in 3 years
2. Assume exit at 10x EBITDA multiple
3. Calculate return

Exit Value = Pro Forma EBITDA × 10
Initial Investment = Total Consideration + New Debt
IRR = (Exit Value ÷ Initial Investment)^(1/3) - 1
```

**Example:**
- Pro forma EBITDA: $300M
- Exit value: $3,000M (at 10x)
- Initial investment: $2,075M
- IRR = (3,000 / 2,075)^(1/3) - 1 = 13.1%

**What it means:** If you achieved this exit, you'd earn 13.1% per year.

**Why it matters:**
- Helps evaluate if the deal is worth it
- Compare to cost of capital (typically 8-12%)
- Higher IRR = better investment

**Important:** This is a simplified estimate. Real IRR analysis is much more complex.

---

## How Calculations Work

### Step-by-Step Deal Calculation

Let's walk through a complete example:

#### Initial Setup
**Acquirer:**
- Name: TechCorp
- Revenue: $1,000M
- EBITDA: $200M (20% margin)
- Net Income: $120M
- Shares: 100M
- Stock Price: $50
- Debt: $300M

**Target:**
- Name: InnovateCo
- Revenue: $400M
- EBITDA: $80M (20% margin)
- Net Income: $45M
- Shares: 50M
- Stock Price: $30
- Debt: $100M

**Deal Terms:**
- Premium: 25%
- Cash/Stock: 50/50
- Cost synergies: $20M
- Revenue synergies: $10M
- New debt: $200M at 5% interest

---

#### Step 1: Calculate Offer Price
```
Offer Price = $30 × (1 + 0.25) = $37.50
```

#### Step 2: Calculate Total Consideration
```
Total Consideration = $37.50 × 50M shares = $1,875M
```

#### Step 3: Split Consideration
```
Cash portion = $1,875M × 50% = $937.5M
Stock portion = $1,875M × 50% = $937.5M
```

#### Step 4: Calculate New Shares Issued
```
New Shares = $937.5M ÷ $50 = 18.75M shares
```

#### Step 5: Calculate Pro Forma Shares
```
Pro Forma Shares = 100M + 18.75M = 118.75M shares
```

#### Step 6: Calculate Ownership
```
Acquirer ownership = 100M ÷ 118.75M = 84.2%
Target ownership = 18.75M ÷ 118.75M = 15.8%
```

#### Step 7: Calculate Pro Forma Revenue
```
Pro Forma Revenue = $1,000M + $400M + $10M = $1,410M
```

#### Step 8: Calculate Pro Forma EBITDA
```
Pro Forma EBITDA = $200M + $80M + $20M = $300M
```

#### Step 9: Calculate Pro Forma Net Income
```
Standalone combined = $120M + $45M = $165M
Synergy benefit = ($20M + $10M × 0.20) × 0.70 = $15.4M
New interest cost = $200M × 0.05 × 0.70 = $7M
Pro Forma Net Income = $165M + $15.4M - $7M = $173.4M
```

#### Step 10: Calculate Pro Forma EPS
```
Pro Forma EPS = $173.4M ÷ 118.75M = $1.46
```

#### Step 11: Calculate Accretion/Dilution
```
Standalone EPS = $120M ÷ 100M = $1.20
EPS Change = $1.46 - $1.20 = $0.26
EPS Change % = ($0.26 ÷ $1.20) × 100% = +21.7%
Result: ACCRETIVE
```

#### Step 12: Calculate Valuation
```
Pro Forma Market Cap = 118.75M × $50 = $5,937.5M
Total Debt = $300M + $100M + $200M = $600M
Enterprise Value = $5,937.5M + $600M = $6,537.5M
```

#### Step 13: Calculate IRR
```
Exit Value = $300M × 10 = $3,000M
Investment = $1,875M + $200M = $2,075M
IRR = ($3,000M / $2,075M)^(1/3) - 1 = 13.1%
```

---

## Practical Examples

### Example 1: Accretive Deal

**Why this deal works:**
- Strong synergies ($30M total)
- Reasonable premium (25%)
- Balanced financing (50/50)
- Target has good margins

**Result:** EPS increases by 21.7% - shareholders win!

---

### Example 2: Dilutive Deal

Change the assumptions:
- Premium: 50% (instead of 25%)
- Synergies: $5M (instead of $30M)
- Stock: 100% (instead of 50/50)

**What happens:**
- New shares = $2,250M ÷ $50 = 45M
- Pro forma shares = 145M
- Pro forma EPS = $168M ÷ 145M = $1.16
- Standalone EPS = $1.20
- Result: -3.3% DILUTIVE

**Why it failed:**
- Paid too much (50% premium)
- Not enough synergies
- Too much stock dilution

---

### Example 3: Impact of Synergies

**Scenario A - No Synergies:**
- Pro forma EBITDA: $280M
- Pro forma net income: $158M
- Pro forma EPS: $1.33
- Result: +10.8% accretive

**Scenario B - Strong Synergies ($50M):**
- Pro forma EBITDA: $330M
- Pro forma net income: $188M
- Pro forma EPS: $1.58
- Result: +31.7% accretive

**Learning:** Synergies make or break deals. A $20M difference in synergies = 21% difference in accretion.

---

## Key Takeaways

### For Acquirer Shareholders:
1. **EPS is king** - Accretive = good, Dilutive = bad
2. **Synergies must be realistic** - Overpromising leads to failure
3. **Premium matters** - Every % of premium reduces accretion
4. **Financing matters** - Stock dilutes, cash doesn't (but costs money)

### For Target Shareholders:
1. **Premium is your reward** - Don't sell cheap
2. **Stock vs cash** - Stock = upside potential, cash = certainty
3. **Combined ownership** - More ownership = more influence

### For Investors:
1. **Accretion isn't everything** - Also consider strategy, risk, execution
2. **Near-term dilution** can be worth long-term value
3. **Synergies take time** - Years 1-2 are often dilutive even if long-term is good

---

## Glossary

**Accretion**: When a merger increases EPS for acquirer shareholders
**Dilution**: When a merger decreases EPS for acquirer shareholders
**EBITDA**: Earnings before interest, taxes, depreciation, amortization
**EPS**: Earnings Per Share - net income divided by shares
**Enterprise Value**: Total value of business (equity + debt)
**IRR**: Internal Rate of Return - annual percentage return
**Market Cap**: Total value of all shares (price × shares)
**Pro Forma**: "As if" - financials after the merger
**Premium**: Amount paid above current stock price
**Synergies**: Additional value created by combining companies

---

## Additional Resources

**For deeper learning:**
- Investment Banking textbooks (Rosenbaum & Pearl)
- CFA curriculum - Corporate Finance section
- Real M&A deal presentations from company websites
- SEC filings (proxy statements explain deal terms)

**Practice:**
- Try different scenarios in the simulator
- Compare your results to real deals (Google "Company X acquires Company Y presentation")
- Focus on understanding why deals are accretive or dilutive

---

*This guide is for educational purposes. Real M&A transactions involve many additional complexities including purchase price allocation, earnouts, contingent value rights, regulatory approvals, tax structures, and more.*
