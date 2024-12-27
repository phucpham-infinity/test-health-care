import React from 'react'
import styles from './DropDownMenu.module.scss'

interface DropDownMenuProps {
  label: string
  onClick?: () => void
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className={styles.menu}>
      <p>{label}</p>
    </div>
  )
}

export default DropDownMenu
