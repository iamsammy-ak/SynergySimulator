import { CompanyFinancials, MergerAssumptions, MergerResults } from '../types';

export function calculateMerger(
  acquirer: CompanyFinancials,
  target: CompanyFinancials,
  assumptions: MergerAssumptions
): MergerResults {
  // Transaction pricing
  const offerPrice = target.stockPrice * (1 + assumptions.premiumPercent / 100);
  const totalConsideration = offerPrice * target.sharesOutstanding;
  const cashPortion = totalConsideration * (assumptions.cashPercent / 100);
  const stockPortion = totalConsideration * (assumptions.stockPercent / 100);

  // New shares issued to target shareholders
  const newSharesIssued = stockPortion / acquirer.stockPrice;

  // Pro forma shares
  const proFormaTotalShares = acquirer.sharesOutstanding + newSharesIssued;

  // Ownership split
  const acquirerOwnership = (acquirer.sharesOutstanding / proFormaTotalShares) * 100;
  const targetOwnership = (newSharesIssued / proFormaTotalShares) * 100;

  // Pro forma financials (with synergies)
  const proFormaRevenue = acquirer.revenue + target.revenue + assumptions.synergyRevenue;
  const proFormaEbitda = acquirer.ebitda + target.ebitda + assumptions.synergyCost;

  // Interest expense on new debt
  const interestExpense = assumptions.debtFinancingAmount * (assumptions.debtInterestRate / 100);

  // Pro forma net income (simplified - assumes same tax rate and D&A)
  const acquirerEbitdaMargin = acquirer.ebitda / acquirer.revenue;
  const targetEbitdaMargin = target.ebitda / target.revenue;
  const blendedMargin = (acquirerEbitdaMargin * acquirer.revenue + targetEbitdaMargin * target.revenue) /
                        (acquirer.revenue + target.revenue);

  // Simplified: Net income grows proportionally with EBITDA + synergies - new interest
  const baseProFormaNetIncome = acquirer.netIncome + target.netIncome;
  const synergyImpactOnNetIncome = (assumptions.synergyCost + assumptions.synergyRevenue * blendedMargin) * 0.7; // 30% tax
  const proFormaNetIncome = baseProFormaNetIncome + synergyImpactOnNetIncome - (interestExpense * 0.7);

  // EPS calculations
  const proFormaEps = proFormaNetIncome / proFormaTotalShares;
  const acquirerStandaloneEps = acquirer.netIncome / acquirer.sharesOutstanding;
  const epsChange = proFormaEps - acquirerStandaloneEps;
  const epsChangePercent = (epsChange / acquirerStandaloneEps) * 100;
  const isAccretive = epsChange > 0;

  // Valuation metrics
  const proFormaMarketCap = proFormaTotalShares * acquirer.stockPrice;
  const totalDebt = acquirer.debtOutstanding + target.debtOutstanding + assumptions.debtFinancingAmount;
  const proFormaEnterpriseValue = proFormaMarketCap + totalDebt;

  // Simplified IRR calculation (assumes synergies realized over 3 years, exit at 10x EBITDA)
  const year3Ebitda = proFormaEbitda;
  const exitValue = year3Ebitda * 10;
  const initialInvestment = totalConsideration + assumptions.debtFinancingAmount;
  const estimatedIrr = ((Math.pow(exitValue / initialInvestment, 1/3) - 1) * 100);

  return {
    offerPrice,
    totalConsideration,
    cashPortion,
    stockPortion,
    newSharesIssued,
    proFormaRevenue,
    proFormaEbitda,
    proFormaNetIncome,
    proFormaTotalShares,
    proFormaEps,
    acquirerOwnership,
    targetOwnership,
    acquirerStandaloneEps,
    epsChange,
    epsChangePercent,
    isAccretive,
    proFormaMarketCap,
    proFormaEnterpriseValue,
    estimatedIrr,
  };
}
