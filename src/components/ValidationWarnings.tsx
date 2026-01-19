import { CompanyFinancials, MergerAssumptions } from '../types';

interface ValidationWarningsProps {
  acquirer: CompanyFinancials;
  target: CompanyFinancials;
  assumptions: MergerAssumptions;
}

interface Warning {
  type: 'error' | 'warning';
  message: string;
}

function validateInputs(
  acquirer: CompanyFinancials,
  target: CompanyFinancials,
  assumptions: MergerAssumptions
): Warning[] {
  const warnings: Warning[] = [];

  // Check consideration mix
  const totalConsideration = assumptions.cashPercent + assumptions.stockPercent;
  if (Math.abs(totalConsideration - 100) > 0.01) {
    warnings.push({
      type: 'error',
      message: `Cash + Stock consideration must equal 100% (currently ${totalConsideration.toFixed(1)}%)`,
    });
  }

  // Check EBITDA margins
  const acquirerMargin = (acquirer.ebitda / acquirer.revenue) * 100;
  const targetMargin = (target.ebitda / target.revenue) * 100;

  if (acquirerMargin < 0 || acquirerMargin > 100) {
    warnings.push({
      type: 'warning',
      message: `Acquirer EBITDA margin (${acquirerMargin.toFixed(1)}%) seems unusual`,
    });
  }

  if (targetMargin < 0 || targetMargin > 100) {
    warnings.push({
      type: 'warning',
      message: `Target EBITDA margin (${targetMargin.toFixed(1)}%) seems unusual`,
    });
  }

  // Check if net income is consistent with EBITDA
  if (acquirer.netIncome > acquirer.ebitda) {
    warnings.push({
      type: 'warning',
      message: 'Acquirer net income exceeds EBITDA (check depreciation/interest)',
    });
  }

  if (target.netIncome > target.ebitda) {
    warnings.push({
      type: 'warning',
      message: 'Target net income exceeds EBITDA (check depreciation/interest)',
    });
  }

  // Check premium reasonableness
  if (assumptions.premiumPercent < 0) {
    warnings.push({
      type: 'warning',
      message: 'Negative premium - acquiring at a discount to market price',
    });
  }

  if (assumptions.premiumPercent > 100) {
    warnings.push({
      type: 'warning',
      message: `${assumptions.premiumPercent}% premium is unusually high for most transactions`,
    });
  }

  // Check synergy reasonableness
  const totalSynergies = assumptions.synergyCost + assumptions.synergyRevenue;
  const combinedEbitda = acquirer.ebitda + target.ebitda;
  const synergyPercent = (totalSynergies / combinedEbitda) * 100;

  if (synergyPercent > 30) {
    warnings.push({
      type: 'warning',
      message: `${synergyPercent.toFixed(0)}% synergy as % of combined EBITDA is aggressive`,
    });
  }

  return warnings;
}

export function ValidationWarnings({ acquirer, target, assumptions }: ValidationWarningsProps) {
  const warnings = validateInputs(acquirer, target, assumptions);

  if (warnings.length === 0) {
    return null;
  }

  return (
    <div className="validation-warnings">
      {warnings.map((warning, index) => (
        <div key={index} className={`warning-item ${warning.type}`}>
          <span className="warning-icon">{warning.type === 'error' ? '⚠' : 'ⓘ'}</span>
          <span className="warning-message">{warning.message}</span>
        </div>
      ))}
    </div>
  );
}
