import React from 'react'
import styles from './CircularProgress.module.scss'

interface CircularProgressProps {
  value: number
  date: string
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value, date }) => {
  const radius = 85
  const strokeWidth = 4
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className={styles.container}>
      <svg className={styles.svg}>
        <circle
          cx="100"
          cy="100"
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          className={styles.progressCircle}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className={styles.overlay}>
        <span>{date}</span>
        <span>{value}%</span>
      </div>
    </div>
  )
}

export default CircularProgress
