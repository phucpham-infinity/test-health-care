import React, { useRef, useState } from 'react'
import IconMenu from '@/components/Icons/IconMenu.tsx'
import styles from './MenuDropDown.module.scss'
import IconClose from '@/components/Icons/IconClose.tsx'
import DropDownMenu from '@/components/DropDownMenu'
import { useNavigate } from 'react-router-dom'
import useOnClickOutside from '@/hooks/useOnClickOutside.tsx'

const MENU_ITEMS = [
  {
    title: '自分の記録',
    link: '/my-record'
  },
  {
    title: '体重グラフ',
    link: '#'
  },
  {
    title: '目標',
    link: '#'
  },
  {
    title: '選択中のコース',
    link: '#'
  },
  {
    title: 'コラム一覧',
    link: '/'
  },
  {
    title: '設定',
    link: '#'
  }
]

const MenuDropDown = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const el = useRef<HTMLDivElement>(null)

  const handleToggle = () => setIsOpen(!isOpen)
  const handleClickMenu = (link: string) => {
    setIsOpen(false)
    navigate(link)
  }
  const handleClickOutside = () => {
    setIsOpen(false)
  }
  useOnClickOutside(el, handleClickOutside)

  return (
    <div ref={el} className={styles.menu_drop_down}>
      {!isOpen ? (
        <IconMenu onClick={handleToggle} />
      ) : (
        <IconClose onClick={handleToggle} />
      )}
      {isOpen && (
        <div className={styles.menu_content}>
          {MENU_ITEMS.map((x, index) => {
            return (
              <DropDownMenu
                onClick={() => handleClickMenu(x.link)}
                label={x.title}
                key={index * 33}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MenuDropDown
