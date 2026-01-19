import { CompanyFinancials, MergerAssumptions } from '../types';
import { calculateMerger } from '../utils/calculations';

interface SensitivityAnalysisProps {
  acquirer: CompanyFinancials;
  target: CompanyFinancials;
  baseAssumptions: MergerAssumptions;
}

export function SensitivityAnalysis({ acquirer, target, baseAssumptions }: SensitivityAnalysisProps) {
  const premiumLevels = [10, 15, 20, 25, 30, 35, 40, 50];

  const scenarios = premiumLevels.map(premium => {
    const assumptions = { ...baseAssumptions, premiumPercent: premium };
    const results = calculateMerger(acquirer, target, assumptions);
    return {
      premium,
      offerPrice: results.offerPrice,
      totalConsideration: results.totalConsideration,
      proFormaEps: results.proFormaEps,
      epsChange: results.epsChange,
      epsChangePercent: results.epsChangePercent,
      isAccretive: results.isAccretive,
    };
  });

  const currentPremium = baseAssumptions.premiumPercent;

  return (
    <div className="sensitivity-analysis">
      <h3>Sensitivity Analysis: Premium Scenarios</h3>
      <p className="sensitivity-description">
        Impact on EPS accretion/dilution at different acquisition premiums
      </p>

      <div className="sensitivity-table-wrapper">
        <table className="sensitivity-table">
          <thead>
            <tr>
              <th>Premium</th>
              <th>Offer Price</th>
              <th>Total Value</th>
              <th>Pro Forma EPS</th>
              <th>EPS Change</th>
              <th>Impact</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((scenario) => (
              <tr
                key={scenario.premium}
                className={scenario.premium === currentPremium ? 'current-scenario' : ''}
              >
                <td className="premium-cell">
                  {scenario.premium}%
                  {scenario.premium === currentPremium && <span className="current-badge">CURRENT</span>}
                </td>
                <td>${scenario.offerPrice.toFixed(2)}</td>
                <td>${scenario.totalConsideration.toFixed(0)}M</td>
                <td>${scenario.proFormaEps.toFixed(2)}</td>
                <td className={scenario.isAccretive ? 'positive' : 'negative'}>
                  {scenario.epsChange > 0 ? '+' : ''}{scenario.epsChange.toFixed(2)}
                  <span className="percent">({scenario.epsChangePercent > 0 ? '+' : ''}{scenario.epsChangePercent.toFixed(1)}%)</span>
                </td>
                <td>
                  <span className={`impact-badge ${scenario.isAccretive ? 'accretive' : 'dilutive'}`}>
                    {scenario.isAccretive ? 'ACCRETIVE' : 'DILUTIVE'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
