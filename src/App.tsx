import { useState, useEffect } from 'react';
import { CompanyFinancials, MergerAssumptions } from './types';
import { CompanyInput } from './components/CompanyInput';
import { AssumptionsInput } from './components/AssumptionsInput';
import { ResultsDisplay } from './components/ResultsDisplay';
import { ScenarioSelector } from './components/ScenarioSelector';
import { SensitivityAnalysis } from './components/SensitivityAnalysis';
import { SensitivityMatrix } from './components/SensitivityMatrix';
import { ValidationWarnings } from './components/ValidationWarnings';
import { ExportButton } from './components/ExportButton';
import { ShareButton } from './components/ShareButton';
import { OwnershipChart } from './components/OwnershipChart';
import { FinancialComparison } from './components/FinancialComparison';
import { ThemeToggle } from './components/ThemeToggle';
import { calculateMerger } from './utils/calculations';
import { exampleScenarios, Scenario } from './utils/presets';
import './App.css';

function loadScenarioFromURL(): Scenario | null {
  const params = new URLSearchParams(window.location.search);
  const scenarioParam = params.get('scenario');

  if (!scenarioParam) return null;

  try {
    const decoded = atob(scenarioParam);
    const data = JSON.parse(decoded);
    return {
      name: 'Shared Scenario',
      description: 'Loaded from shared link',
      acquirer: data.acquirer,
      target: data.target,
      assumptions: data.assumptions,
    };
  } catch {
    return null;
  }
}

function App() {
  const sharedScenario = loadScenarioFromURL();
  const defaultScenario = sharedScenario || exampleScenarios[3];

  const [acquirer, setAcquirer] = useState<CompanyFinancials>(defaultScenario.acquirer);
  const [target, setTarget] = useState<CompanyFinancials>(defaultScenario.target);
  const [assumptions, setAssumptions] = useState<MergerAssumptions>(defaultScenario.assumptions);

  useEffect(() => {
    if (sharedScenario) {
      // Clear URL parameter after loading
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handleScenarioSelect = (scenario: Scenario) => {
    setAcquirer(scenario.acquirer);
    setTarget(scenario.target);
    setAssumptions(scenario.assumptions);
  };

  const results = calculateMerger(acquirer, target, assumptions);

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>M&A Merger Simulator</h1>
          <p>Model merger transactions with synergy analysis and accretion/dilution impact</p>
        </div>
        <ThemeToggle />
      </header>

      <main className="app-main">
        <section className="setup-section">
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
        </section>

        <section className="analysis-section">
          <div className="section-header">
            <h2>Analysis Results</h2>
            <div className="header-actions">
              <ShareButton
                acquirer={acquirer}
                target={target}
                assumptions={assumptions}
              />
              <ExportButton
                acquirer={acquirer}
                target={target}
                assumptions={assumptions}
                results={results}
              />
            </div>
          </div>

          <div className="charts-row">
            <OwnershipChart
              results={results}
              acquirerName={acquirer.name}
              targetName={target.name}
            />
            <FinancialComparison
              acquirer={acquirer}
              target={target}
              results={results}
            />
          </div>

          <ResultsDisplay results={results} />

          <div className="sensitivity-container">
            <SensitivityAnalysis
              acquirer={acquirer}
              target={target}
              baseAssumptions={assumptions}
            />

            <SensitivityMatrix
              acquirer={acquirer}
              target={target}
              baseAssumptions={assumptions}
            />
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Built by <a href="https://github.com/iamsammy-ak" target="_blank" rel="noopener noreferrer">Abhishek Kumar</a> | Open source (MIT License) on <a href="https://github.com/iamsammy-ak/merger-simulator" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </footer>
    </div>
  );
}

export default App;
