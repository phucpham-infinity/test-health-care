import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

import Logo from '@/components/Logo'
import IconMemo from '../Icons/IconMemo'
import IconChallenge from '../Icons/IconChallenge'
import IconInfo from '../Icons/IconInfo'
import Badge from '../common/Badge'
import MenuDropDown from '@/components/MenuDropDown'

const MENU_ITEMS = [
  {
    title: '自分の記録',
    icon: <IconMemo />,
    counter: 0,
    link: '/my-record'
  },
  {
    title: 'チャレンジ',
    icon: <IconChallenge />,
    counter: 0,
    link: '#'
  },
  {
    title: 'お知らせ',
    icon: <IconInfo />,
    counter: 5,
    link: '#'
  }
]

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className={classNames(styles.header, 'container')}>
      <div className={classNames('container', styles.header_content)}>
        <div onClick={() => navigate('/top-page')} className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.content_right}>
          <div className={styles.menu}>
            {MENU_ITEMS.map((x, index) => {
              return (
                <div
                  onClick={() => navigate(x.link)}
                  key={index}
                  className={styles.menu_item}
                >
                  <Badge counter={x.counter}>{x.icon}</Badge>
                  <span className={styles.menu_item_title}>{x.title}</span>
                </div>
              )
            })}
          </div>
          <MenuDropDown />
        </div>
      </div>
    </div>
  )
}

export default Header
