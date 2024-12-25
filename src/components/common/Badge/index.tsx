import React from 'react'
import styles from './Badge.module.scss'

interface BadgeProps {
  counter?: number
  children?: React.ReactNode
}

const Badge: React.FC<BadgeProps> = ({ counter = 0, children }) => {
  if (counter > 0) {
    return (
      <div className={styles.badge}>
        <span className={styles.counter}>{counter}</span>
        {children}
      </div>
    )
  }
  return <>{children}</>
}

export default Badge
