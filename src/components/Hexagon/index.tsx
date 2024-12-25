import React from 'react'
import styles from './Hexagon.module.scss'

interface HexagonProps {
  label: string
  icon: React.ReactNode
}

const Hexagon: React.FC<HexagonProps> = ({ label, icon }) => {
  return (
    <div className={styles.hexagon}>
      {icon}
      <p>{label}</p>
    </div>
  )
}

export default Hexagon
