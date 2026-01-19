import { useState } from 'react';
import { CompanyFinancials, MergerAssumptions } from './types';
import { CompanyInput } from './components/CompanyInput';
import { AssumptionsInput } from './components/AssumptionsInput';
import { ResultsDisplay } from './components/ResultsDisplay';
import { ScenarioSelector } from './components/ScenarioSelector';
import { SensitivityAnalysis } from './components/SensitivityAnalysis';
import { ValidationWarnings } from './components/ValidationWarnings';
import { calculateMerger } from './utils/calculations';
import { exampleScenarios, Scenario } from './utils/presets';
import './App.css';

function App() {
  const defaultScenario = exampleScenarios[3]; // Custom Scenario
  const [acquirer, setAcquirer] = useState<CompanyFinancials>(defaultScenario.acquirer);
  const [target, setTarget] = useState<CompanyFinancials>(defaultScenario.target);
  const [assumptions, setAssumptions] = useState<MergerAssumptions>(defaultScenario.assumptions);

  const handleScenarioSelect = (scenario: Scenario) => {
    setAcquirer(scenario.acquirer);
    setTarget(scenario.target);
    setAssumptions(scenario.assumptions);
  };

  const results = calculateMerger(acquirer, target, assumptions);

  return (
    <div className="app">
      <header className="app-header">
        <h1>M&A Merger Simulator</h1>
        <p>Model merger transactions with synergy analysis and accretion/dilution impact</p>
      </header>

      <main className="app-main">
        <ScenarioSelector onSelect={handleScenarioSelect} />

        <ValidationWarnings
          acquirer={acquirer}
          target={target}
          assumptions={assumptions}
        />

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

        <ResultsDisplay results={results} />

        <SensitivityAnalysis
          acquirer={acquirer}
          target={target}
          baseAssumptions={assumptions}
        />
      </main>
    </div>
  );
}

export default App;
