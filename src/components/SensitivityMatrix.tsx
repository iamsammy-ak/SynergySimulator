import { CompanyFinancials, MergerAssumptions } from '../types';
import { calculateMerger } from '../utils/calculations';

interface SensitivityMatrixProps {
  acquirer: CompanyFinancials;
  target: CompanyFinancials;
  baseAssumptions: MergerAssumptions;
}

export function SensitivityMatrix({ acquirer, target, baseAssumptions }: SensitivityMatrixProps) {
  // Premium levels for rows
  const premiumLevels = [15, 20, 25, 30, 35, 40];

  // Synergy levels for columns (as % of combined EBITDA)
  const combinedEbitda = acquirer.ebitda + target.ebitda;
  const synergyPercents = [0, 5, 10, 15, 20, 25];
  const synergyAmounts = synergyPercents.map(pct => (combinedEbitda * pct) / 100);

  // Calculate EPS change for each combination
  const matrix = premiumLevels.map(premium => {
    return synergyAmounts.map(synergy => {
      const assumptions = {
        ...baseAssumptions,
        premiumPercent: premium,
        synergyCost: synergy,
      };
      const results = calculateMerger(acquirer, target, assumptions);
      return {
        epsChange: results.epsChange,
        epsChangePercent: results.epsChangePercent,
        isAccretive: results.isAccretive,
      };
    });
  });

  const currentPremium = baseAssumptions.premiumPercent;
  const currentSynergyPercent = (baseAssumptions.synergyCost / combinedEbitda) * 100;

  return (
    <div className="sensitivity-matrix">
      <h3>2D Sensitivity Analysis</h3>
      <p className="sensitivity-description">
        EPS change (%) across different premium levels and cost synergies (% of combined EBITDA)
      </p>

      <div className="matrix-table-wrapper">
        <table className="matrix-table">
          <thead>
            <tr>
              <th className="corner-cell">Premium \ Synergies</th>
              {synergyPercents.map((pct) => (
                <th key={pct} className={Math.abs(currentSynergyPercent - pct) < 2 ? 'current-column' : ''}>
                  {pct}%
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {premiumLevels.map((premium, rowIndex) => (
              <tr key={premium} className={premium === currentPremium ? 'current-row' : ''}>
                <td className="row-header">
                  {premium}%
                  {premium === currentPremium && <span className="current-badge">CURRENT</span>}
                </td>
                {matrix[rowIndex].map((cell, colIndex) => {
                  const isCurrent =
                    premium === currentPremium &&
                    Math.abs(currentSynergyPercent - synergyPercents[colIndex]) < 2;

                  return (
                    <td
                      key={colIndex}
                      className={`
                        matrix-cell
                        ${cell.isAccretive ? 'accretive' : 'dilutive'}
                        ${isCurrent ? 'current-cell' : ''}
                      `}
                    >
                      {cell.epsChangePercent > 0 ? '+' : ''}
                      {cell.epsChangePercent.toFixed(1)}%
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="matrix-legend">
        <div className="legend-item">
          <span className="legend-color accretive"></span>
          <span>Accretive (positive EPS impact)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color dilutive"></span>
          <span>Dilutive (negative EPS impact)</span>
        </div>
      </div>
    </div>
  );
}
