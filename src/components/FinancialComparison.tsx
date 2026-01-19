import { CompanyFinancials, MergerResults } from '../types';

interface FinancialComparisonProps {
  acquirer: CompanyFinancials;
  target: CompanyFinancials;
  results: MergerResults;
}

export function FinancialComparison({ acquirer, target, results }: FinancialComparisonProps) {
  const metrics = [
    {
      label: 'Revenue',
      acquirer: acquirer.revenue,
      target: target.revenue,
      proForma: results.proFormaRevenue,
    },
    {
      label: 'EBITDA',
      acquirer: acquirer.ebitda,
      target: target.ebitda,
      proForma: results.proFormaEbitda,
    },
    {
      label: 'Net Income',
      acquirer: acquirer.netIncome,
      target: target.netIncome,
      proForma: results.proFormaNetIncome,
    },
  ];

  return (
    <div className="financial-comparison">
      <h3>Financial Comparison</h3>

      <div className="comparison-charts">
        {metrics.map((metric) => {
          const maxValue = Math.max(metric.acquirer, metric.target, metric.proForma);
          const acquirerWidth = (metric.acquirer / maxValue) * 100;
          const targetWidth = (metric.target / maxValue) * 100;
          const proFormaWidth = (metric.proForma / maxValue) * 100;

          const acquirerPercent = (metric.acquirer / metric.proForma) * 100;
          const targetPercent = (metric.target / metric.proForma) * 100;
          const synergiesPercent = ((metric.proForma - metric.acquirer - metric.target) / metric.proForma) * 100;

          return (
            <div key={metric.label} className="comparison-row">
              <div className="metric-name">{metric.label}</div>
              <div className="bars-container">
                <div className="bar-group">
                  <div className="bar-label">{acquirer.name}</div>
                  <div className="bar-wrapper">
                    <div
                      className="bar acquirer-bar"
                      style={{ width: `${acquirerWidth}%` }}
                    >
                      <span className="bar-value">${metric.acquirer.toFixed(0)}M</span>
                    </div>
                    <span className="bar-percent">{acquirerPercent.toFixed(1)}%</span>
                  </div>
                </div>

                <div className="bar-group">
                  <div className="bar-label">{target.name}</div>
                  <div className="bar-wrapper">
                    <div
                      className="bar target-bar"
                      style={{ width: `${targetWidth}%` }}
                    >
                      <span className="bar-value">${metric.target.toFixed(0)}M</span>
                    </div>
                    <span className="bar-percent">{targetPercent.toFixed(1)}%</span>
                  </div>
                </div>

                <div className="bar-group proforma">
                  <div className="bar-label">Pro Forma</div>
                  <div className="bar-wrapper">
                    <div
                      className="bar proforma-bar"
                      style={{ width: `${proFormaWidth}%` }}
                    >
                      <span className="bar-value">${metric.proForma.toFixed(0)}M</span>
                    </div>
                    {synergiesPercent > 0.5 && (
                      <span className="bar-percent synergies">+{synergiesPercent.toFixed(1)}% synergies</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
