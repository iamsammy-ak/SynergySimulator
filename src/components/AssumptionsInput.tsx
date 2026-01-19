import { MergerAssumptions } from '../types';

interface AssumptionsInputProps {
  assumptions: MergerAssumptions;
  onChange: (assumptions: MergerAssumptions) => void;
}

export function AssumptionsInput({ assumptions, onChange }: AssumptionsInputProps) {
  const handleChange = (field: keyof MergerAssumptions, value: string) => {
    onChange({
      ...assumptions,
      [field]: parseFloat(value) || 0,
    });
  };

  return (
    <div className="assumptions-input">
      <h3>Merger Assumptions</h3>
      <div className="input-grid">
        <div className="input-group">
          <label>Acquisition Premium (%)</label>
          <input
            type="number"
            value={assumptions.premiumPercent}
            onChange={(e) => handleChange('premiumPercent', e.target.value)}
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label>Cash Consideration (%)</label>
          <input
            type="number"
            value={assumptions.cashPercent}
            onChange={(e) => handleChange('cashPercent', e.target.value)}
            step="1"
            max="100"
          />
        </div>

        <div className="input-group">
          <label>Stock Consideration (%)</label>
          <input
            type="number"
            value={assumptions.stockPercent}
            onChange={(e) => handleChange('stockPercent', e.target.value)}
            step="1"
            max="100"
          />
        </div>

        <div className="input-group">
          <label>Cost Synergies ($M)</label>
          <input
            type="number"
            value={assumptions.synergyCost}
            onChange={(e) => handleChange('synergyCost', e.target.value)}
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label>Revenue Synergies ($M)</label>
          <input
            type="number"
            value={assumptions.synergyRevenue}
            onChange={(e) => handleChange('synergyRevenue', e.target.value)}
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label>New Debt Financing ($M)</label>
          <input
            type="number"
            value={assumptions.debtFinancingAmount}
            onChange={(e) => handleChange('debtFinancingAmount', e.target.value)}
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label>Debt Interest Rate (%)</label>
          <input
            type="number"
            value={assumptions.debtInterestRate}
            onChange={(e) => handleChange('debtInterestRate', e.target.value)}
            step="0.1"
          />
        </div>
      </div>
    </div>
  );
}
