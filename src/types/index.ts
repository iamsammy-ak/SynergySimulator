export interface CompanyFinancials {
  name: string;
  revenue: number;
  ebitda: number;
  netIncome: number;
  sharesOutstanding: number;
  stockPrice: number;
  debtOutstanding: number;
}

export interface MergerAssumptions {
  premiumPercent: number;
  cashPercent: number;
  stockPercent: number;
  synergyCost: number;
  synergyRevenue: number;
  debtFinancingAmount: number;
  debtInterestRate: number;
}

export interface MergerResults {
  // Transaction metrics
  offerPrice: number;
  totalConsideration: number;
  cashPortion: number;
  stockPortion: number;
  newSharesIssued: number;

  // Pro forma metrics
  proFormaRevenue: number;
  proFormaEbitda: number;
  proFormaNetIncome: number;
  proFormaTotalShares: number;
  proFormaEps: number;

  // Ownership
  acquirerOwnership: number;
  targetOwnership: number;

  // Accretion/Dilution
  acquirerStandaloneEps: number;
  epsChange: number;
  epsChangePercent: number;
  isAccretive: boolean;

  // Valuation
  proFormaMarketCap: number;
  proFormaEnterpriseValue: number;

  // Returns
  estimatedIrr: number;
}
