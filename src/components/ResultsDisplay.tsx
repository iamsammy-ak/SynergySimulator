import { MergerResults } from '../types';

interface ResultsDisplayProps {
  results: MergerResults;
}

function formatCurrency(value: number): string {
  return `$${value.toFixed(2)}`;
}

function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

function formatNumber(value: number): string {
  return value.toFixed(2);
}

export function ResultsDisplay({ results }: ResultsDisplayProps) {
  return (
    <div className="results-display">
      <h2>Analysis Results</h2>

      <div className="results-section">
        <h3>Transaction Overview</h3>
        <div className="metrics-grid">
          <div className="metric">
            <span className="metric-label">Offer Price per Share</span>
            <span className="metric-value">{formatCurrency(results.offerPrice)}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Total Consideration</span>
            <span className="metric-value">{formatCurrency(results.totalConsideration)}M</span>
          </div>
          <div className="metric">
            <span className="metric-label">Cash Portion</span>
            <span className="metric-value">{formatCurrency(results.cashPortion)}M</span>
          </div>
          <div className="metric">
            <span className="metric-label">Stock Portion</span>
            <span className="metric-value">{formatCurrency(results.stockPortion)}M</span>
          </div>
          <div className="metric">
            <span className="metric-label">New Shares Issued</span>
            <span className="metric-value">{formatNumber(results.newSharesIssued)}M</span>
          </div>
        </div>
      </div>

      <div className="results-section">
        <h3>Pro Forma Financials</h3>
        <div className="metrics-grid">
          <div className="metric">
            <span className="metric-label">Revenue</span>
            <span className="metric-value">{formatCurrency(results.proFormaRevenue)}M</span>
          </div>
          <div className="metric">
            <span className="metric-label">EBITDA</span>
            <span className="metric-value">{formatCurrency(results.proFormaEbitda)}M</span>
          </div>
          <div className="metric">
            <span className="metric-label">Net Income</span>
            <span className="metric-value">{formatCurrency(results.proFormaNetIncome)}M</span>
          </div>
          <div className="metric">
            <span className="metric-label">Total Shares</span>
            <span className="metric-value">{formatNumber(results.proFormaTotalShares)}M</span>
          </div>
          <div className="metric">
            <span className="metric-label">EPS</span>
            <span className="metric-value">{formatCurrency(results.proFormaEps)}</span>
          </div>
        </div>
      </div>

      <div className="results-section">
        <h3>Ownership Structure</h3>
        <div className="metrics-grid">
          <div className="metric">
            <span className="metric-label">Acquirer Ownership</span>
            <span className="metric-value">{formatPercent(results.acquirerOwnership)}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Target Ownership</span>
            <span className="metric-value">{formatPercent(results.targetOwnership)}</span>
          </div>
        </div>
      </div>

      <div className="results-section">
        <h3>Accretion / Dilution Analysis</h3>
        <div className="metrics-grid">
          <div className="metric">
            <span className="metric-label">Standalone EPS</span>
            <span className="metric-value">{formatCurrency(results.acquirerStandaloneEps)}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Pro Forma EPS</span>
            <span className="metric-value">{formatCurrency(results.proFormaEps)}</span>
          </div>
          <div className="metric">
            <span className="metric-label">EPS Change</span>
            <span className={`metric-value ${results.isAccretive ? 'positive' : 'negative'}`}>
              {formatCurrency(results.epsChange)}
            </span>
          </div>
          <div className="metric">
            <span className="metric-label">EPS Change (%)</span>
            <span className={`metric-value ${results.isAccretive ? 'positive' : 'negative'}`}>
              {formatPercent(results.epsChangePercent)}
            </span>
          </div>
          <div className="metric highlight">
            <span className="metric-label">Transaction Impact</span>
            <span className={`metric-value ${results.isAccretive ? 'positive' : 'negative'}`}>
              {results.isAccretive ? 'ACCRETIVE' : 'DILUTIVE'}
            </span>
          </div>
        </div>
      </div>

      <div className="results-section">
        <h3>Valuation Metrics</h3>
        <div className="metrics-grid">
          <div className="metric">
            <span className="metric-label">Pro Forma Market Cap</span>
            <span className="metric-value">{formatCurrency(results.proFormaMarketCap)}M</span>
          </div>
          <div className="metric">
            <span className="metric-label">Pro Forma Enterprise Value</span>
            <span className="metric-value">{formatCurrency(results.proFormaEnterpriseValue)}M</span>
          </div>
          <div className="metric">
            <span className="metric-label">Estimated IRR</span>
            <span className="metric-value">{formatPercent(results.estimatedIrr)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
