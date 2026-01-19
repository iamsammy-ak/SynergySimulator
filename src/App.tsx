import { useState } from 'react';
import { CompanyFinancials, MergerAssumptions } from './types';
import { CompanyInput } from './components/CompanyInput';
import { AssumptionsInput } from './components/AssumptionsInput';
import { ResultsDisplay } from './components/ResultsDisplay';
import { calculateMerger } from './utils/calculations';
import './App.css';

const defaultAcquirer: CompanyFinancials = {
  name: 'Acquirer Corp',
  revenue: 1000,
  ebitda: 200,
  netIncome: 120,
  sharesOutstanding: 100,
  stockPrice: 50,
  debtOutstanding: 300,
};

const defaultTarget: CompanyFinancials = {
  name: 'Target Inc',
  revenue: 400,
  ebitda: 80,
  netIncome: 45,
  sharesOutstanding: 50,
  stockPrice: 30,
  debtOutstanding: 100,
};

const defaultAssumptions: MergerAssumptions = {
  premiumPercent: 25,
  cashPercent: 50,
  stockPercent: 50,
  synergyCost: 20,
  synergyRevenue: 10,
  debtFinancingAmount: 200,
  debtInterestRate: 5,
};

function App() {
  const [acquirer, setAcquirer] = useState<CompanyFinancials>(defaultAcquirer);
  const [target, setTarget] = useState<CompanyFinancials>(defaultTarget);
  const [assumptions, setAssumptions] = useState<MergerAssumptions>(defaultAssumptions);

  const results = calculateMerger(acquirer, target, assumptions);

  return (
    <div className="app">
      <header className="app-header">
        <h1>M&A Merger Simulator</h1>
        <p>Model merger transactions with synergy analysis and accretion/dilution impact</p>
      </header>

      <main className="app-main">
        <div className="inputs-section">
          <CompanyInput
            label="Acquirer"
            company={acquirer}
            onChange={setAcquirer}
          />

          <CompanyInput
            label="Target"
            company={target}
            onChange={setTarget}
          />

          <AssumptionsInput
            assumptions={assumptions}
            onChange={setAssumptions}
          />
        </div>

        <div className="results-section">
          <ResultsDisplay results={results} />
        </div>
      </main>
    </div>
  );
}

export default App;
