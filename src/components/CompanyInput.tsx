import { CompanyFinancials } from '../types';

interface CompanyInputProps {
  label: string;
  company: CompanyFinancials;
  onChange: (company: CompanyFinancials) => void;
}

export function CompanyInput({ label, company, onChange }: CompanyInputProps) {
  const handleChange = (field: keyof CompanyFinancials, value: string) => {
    onChange({
      ...company,
      [field]: field === 'name' ? value : parseFloat(value) || 0,
    });
  };

  return (
    <div className="company-input">
      <h3>{label}</h3>
      <div className="input-grid">
        <div className="input-group">
          <label>Company Name</label>
          <input
            type="text"
            value={company.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Revenue ($M)</label>
          <input
            type="number"
            value={company.revenue}
            onChange={(e) => handleChange('revenue', e.target.value)}
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label>EBITDA ($M)</label>
          <input
            type="number"
            value={company.ebitda}
            onChange={(e) => handleChange('ebitda', e.target.value)}
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label>Net Income ($M)</label>
          <input
            type="number"
            value={company.netIncome}
            onChange={(e) => handleChange('netIncome', e.target.value)}
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label>Shares Outstanding (M)</label>
          <input
            type="number"
            value={company.sharesOutstanding}
            onChange={(e) => handleChange('sharesOutstanding', e.target.value)}
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label>Stock Price ($)</label>
          <input
            type="number"
            value={company.stockPrice}
            onChange={(e) => handleChange('stockPrice', e.target.value)}
            step="0.01"
          />
        </div>

        <div className="input-group">
          <label>Debt Outstanding ($M)</label>
          <input
            type="number"
            value={company.debtOutstanding}
            onChange={(e) => handleChange('debtOutstanding', e.target.value)}
            step="0.1"
          />
        </div>
      </div>
    </div>
  );
}
