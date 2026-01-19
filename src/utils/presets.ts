import { CompanyFinancials, MergerAssumptions } from '../types';

export interface Scenario {
  name: string;
  description: string;
  acquirer: CompanyFinancials;
  target: CompanyFinancials;
  assumptions: MergerAssumptions;
}

export const exampleScenarios: Scenario[] = [
  {
    name: 'Tech Consolidation',
    description: 'Large tech company acquiring smaller competitor for market share',
    acquirer: {
      name: 'TechCorp',
      revenue: 2500,
      ebitda: 600,
      netIncome: 380,
      sharesOutstanding: 200,
      stockPrice: 85,
      debtOutstanding: 800,
    },
    target: {
      name: 'InnovateTech',
      revenue: 650,
      ebitda: 120,
      netIncome: 65,
      sharesOutstanding: 80,
      stockPrice: 42,
      debtOutstanding: 150,
    },
    assumptions: {
      premiumPercent: 28,
      cashPercent: 40,
      stockPercent: 60,
      synergyCost: 45,
      synergyRevenue: 30,
      debtFinancingAmount: 400,
      debtInterestRate: 4.5,
    },
  },
  {
    name: 'Financial Services Merger',
    description: 'Bank acquiring regional competitor for geographic expansion',
    acquirer: {
      name: 'National Bank',
      revenue: 1800,
      ebitda: 540,
      netIncome: 320,
      sharesOutstanding: 150,
      stockPrice: 65,
      debtOutstanding: 2000,
    },
    target: {
      name: 'Regional Finance',
      revenue: 450,
      ebitda: 110,
      netIncome: 62,
      sharesOutstanding: 60,
      stockPrice: 38,
      debtOutstanding: 500,
    },
    assumptions: {
      premiumPercent: 22,
      cashPercent: 30,
      stockPercent: 70,
      synergyCost: 35,
      synergyRevenue: 15,
      debtFinancingAmount: 250,
      debtInterestRate: 5.2,
    },
  },
  {
    name: 'Healthcare Roll-Up',
    description: 'Healthcare company acquiring smaller player for vertical integration',
    acquirer: {
      name: 'HealthSystems Inc',
      revenue: 3200,
      ebitda: 480,
      netIncome: 285,
      sharesOutstanding: 180,
      stockPrice: 72,
      debtOutstanding: 1200,
    },
    target: {
      name: 'MedTech Solutions',
      revenue: 380,
      ebitda: 65,
      netIncome: 32,
      sharesOutstanding: 45,
      stockPrice: 28,
      debtOutstanding: 120,
    },
    assumptions: {
      premiumPercent: 32,
      cashPercent: 55,
      stockPercent: 45,
      synergyCost: 28,
      synergyRevenue: 22,
      debtFinancingAmount: 300,
      debtInterestRate: 4.8,
    },
  },
  {
    name: 'Custom Scenario',
    description: 'Start with default values and customize',
    acquirer: {
      name: 'Acquirer Corp',
      revenue: 1000,
      ebitda: 200,
      netIncome: 120,
      sharesOutstanding: 100,
      stockPrice: 50,
      debtOutstanding: 300,
    },
    target: {
      name: 'Target Inc',
      revenue: 400,
      ebitda: 80,
      netIncome: 45,
      sharesOutstanding: 50,
      stockPrice: 30,
      debtOutstanding: 100,
    },
    assumptions: {
      premiumPercent: 25,
      cashPercent: 50,
      stockPercent: 50,
      synergyCost: 20,
      synergyRevenue: 10,
      debtFinancingAmount: 200,
      debtInterestRate: 5,
    },
  },
];
