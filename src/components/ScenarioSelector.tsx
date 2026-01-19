import { exampleScenarios, Scenario } from '../utils/presets';

interface ScenarioSelectorProps {
  onSelect: (scenario: Scenario) => void;
}

export function ScenarioSelector({ onSelect }: ScenarioSelectorProps) {
  return (
    <div className="scenario-selector">
      <h3>Example Scenarios</h3>
      <p className="scenario-description">
        Load pre-configured scenarios to explore different deal structures
      </p>
      <div className="scenario-grid">
        {exampleScenarios.map((scenario) => (
          <button
            key={scenario.name}
            className="scenario-card"
            onClick={() => onSelect(scenario)}
          >
            <div className="scenario-name">{scenario.name}</div>
            <div className="scenario-desc">{scenario.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
