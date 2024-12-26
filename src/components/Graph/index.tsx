import React from 'react'
import './Graph.module.scss'

interface DataPoint {
  month: string
  value1: number
  value2: number
}

const data: DataPoint[] = [
  { month: '6月', value1: 90, value2: 85 },
  { month: '7月', value1: 80, value2: 75 },
  { month: '8月', value1: 70, value2: 65 },
  { month: '9月', value1: 60, value2: 55 },
  { month: '10月', value1: 55, value2: 50 },
  { month: '11月', value1: 50, value2: 45 },
  { month: '12月', value1: 45, value2: 40 },
  { month: '1月', value1: 50, value2: 35 },
  { month: '2月', value1: 45, value2: 30 },
  { month: '3月', value1: 40, value2: 25 },
  { month: '4月', value1: 35, value2: 20 },
  { month: '5月', value1: 30, value2: 15 }
]

const GraphComponent: React.FC = () => {
  const maxValue = Math.max(...data.map((d) => Math.max(d.value1, d.value2)))

  return (
    <div className="graph-container">
      <svg viewBox="0 0 600 300" className="graph">
        {/* Axes */}
        <line
          x1="50"
          y1="250"
          x2="550"
          y2="250"
          stroke="#ccc"
          strokeWidth="1"
        />
        <line x1="50" y1="250" x2="50" y2="20" stroke="#ccc" strokeWidth="1" />

        {/* Grid lines and labels */}
        {data.map((point, index) => (
          <g key={index}>
            <line
              x1={50 + index * 50}
              y1="250"
              x2={50 + index * 50}
              y2="20"
              stroke="#444"
              strokeDasharray="2,2"
              strokeWidth="0.5"
            />
            <text
              x={50 + index * 50}
              y="270"
              textAnchor="middle"
              fill="#fff"
              fontSize="12"
            >
              {point.month}
            </text>
          </g>
        ))}

        {/* Lines */}
        <polyline
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
          points={data
            .map(
              (point, index) =>
                `${50 + index * 50},${250 - (point.value1 / maxValue) * 230}`
            )
            .join(' ')}
        />
        <polyline
          fill="none"
          stroke="#00CED1"
          strokeWidth="2"
          points={data
            .map(
              (point, index) =>
                `${50 + index * 50},${250 - (point.value2 / maxValue) * 230}`
            )
            .join(' ')}
        />

        {/* Dots */}
        {data.map((point, index) => (
          <circle
            key={`value1-${index}`}
            cx={50 + index * 50}
            cy={250 - (point.value1 / maxValue) * 230}
            r="4"
            fill="#FFD700"
          />
        ))}
        {data.map((point, index) => (
          <circle
            key={`value2-${index}`}
            cx={50 + index * 50}
            cy={250 - (point.value2 / maxValue) * 230}
            r="4"
            fill="#00CED1"
          />
        ))}
      </svg>
    </div>
  )
}

export default GraphComponent
