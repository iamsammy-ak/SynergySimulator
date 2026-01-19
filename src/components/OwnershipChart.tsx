import { MergerResults } from '../types';

interface OwnershipChartProps {
  results: MergerResults;
  acquirerName: string;
  targetName: string;
}

export function OwnershipChart({ results, acquirerName, targetName }: OwnershipChartProps) {
  const acquirerPercent = results.acquirerOwnership;
  const targetPercent = results.targetOwnership;

  // Calculate pie chart segments
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  const acquirerDasharray = (acquirerPercent / 100) * circumference;
  const targetDasharray = (targetPercent / 100) * circumference;
  const acquirerOffset = 0;
  const targetOffset = -acquirerDasharray;

  return (
    <div className="ownership-chart">
      <h3>Post-Merger Ownership</h3>

      <div className="chart-container">
        <div className="pie-chart-wrapper">
          <svg viewBox="0 0 200 200" className="pie-chart">
            {/* Target segment */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#c41e3a"
              strokeWidth="60"
              strokeDasharray={`${targetDasharray} ${circumference}`}
              strokeDashoffset={targetOffset}
              transform="rotate(-90 100 100)"
            />
            {/* Acquirer segment */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#0a6e0a"
              strokeWidth="60"
              strokeDasharray={`${acquirerDasharray} ${circumference}`}
              strokeDashoffset={acquirerOffset}
              transform="rotate(-90 100 100)"
            />
            {/* Center circle for donut effect */}
            <circle cx="100" cy="100" r="50" fill="var(--center-fill, white)" className="pie-center" />

            {/* Center text */}
            <text x="100" y="95" textAnchor="middle" className="pie-label-small">
              Ownership
            </text>
            <text x="100" y="110" textAnchor="middle" className="pie-label-large">
              Split
            </text>
          </svg>
        </div>

        <div className="chart-legend">
          <div className="legend-row">
            <span className="legend-dot acquirer"></span>
            <span className="legend-label">{acquirerName}</span>
            <span className="legend-value">{acquirerPercent.toFixed(1)}%</span>
          </div>
          <div className="legend-row">
            <span className="legend-dot target"></span>
            <span className="legend-label">{targetName}</span>
            <span className="legend-value">{targetPercent.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
