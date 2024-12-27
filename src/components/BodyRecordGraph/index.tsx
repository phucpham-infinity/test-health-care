import React, { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'
import styles from './BodyRecordGraph.module.scss'

interface DataPoint {
  month: string
  value1: number
  value2: number
}

interface BodyRecordGraphProps {
  data: DataPoint[]
  onFilterChange?: (filter: string) => void
  isLoading?: boolean
}
const filterOptions = [
  { key: 'day', label: '日' },
  { key: 'week', label: '週' },
  { key: 'month', label: '月' },
  { key: 'year', label: '年' }
]

const BodyRecordGraph: React.FC<BodyRecordGraphProps> = ({
  data,
  onFilterChange
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('year')

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter)
    if (onFilterChange) {
      onFilterChange(filter)
    }
  }

  return (
    <div className={'container'}>
      <div className={styles.graph_container}>
        <div className={styles.graph_header}>
          <h3>BODY RECORD</h3>
          <span>2021.05.21</span>
        </div>
        <div className={styles.chart_container}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 0, right: 30, bottom: 0, left: -25 }}
            >
              <CartesianGrid vertical={true} horizontal={false} stroke="#777" />
              <XAxis
                tick={{
                  style: { fill: '#fff', fontSize: '13px', fontWeight: 400 }
                }}
                axisLine={false}
                tickSize={0}
                dy={14}
                dataKey="label"
              />
              <YAxis tick={false} domain={['auto', 'auto']} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value1"
                stroke="#FFD700"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="value2"
                stroke="#40E0D0"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.filter_buttons}>
          {filterOptions.map((filter) => (
            <button
              key={filter.key}
              className={
                selectedFilter === filter.key ? styles.active_button : ''
              }
              onClick={() => handleFilterChange(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BodyRecordGraph
