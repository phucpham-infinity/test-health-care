// components/DropDownMenu.tsx
import React from 'react'
import styles from './DropDownMenu.module.scss'

interface DropDownMenuProps {
  label: string
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ label }) => {
  return (
    <div className={styles.menu}>
      <p>{label}</p>
    </div>
  )
}

export default DropDownMenu
