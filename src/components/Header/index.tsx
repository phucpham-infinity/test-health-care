import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import Logo from '@/components/Logo'
import IconMenu from '@/components/Icons/IconMenu'
import IconMemo from '../Icons/IconMemo'
import IconChallenge from '../Icons/IconChallenge'
import IconInfo from '../Icons/IconInfo'
import Badge from '../common/Badge'

const MENU_ITEMS = [
  {
    title: '自分の記録',
    icon: <IconMemo />,
    counter: 0,
    link: '/'
  },
  {
    title: 'チャレンジ',
    icon: <IconChallenge />,
    counter: 0,
    link: '/'
  },
  {
    title: 'お知らせ',
    icon: <IconInfo />,
    counter: 5,
    link: '/'
  }
]

const Header = () => {
  return (
    <div className={classNames(styles.header, 'container')}>
      <div className={classNames('container', styles.header_content)}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.content_right}>
          <div className={styles.menu}>
            {MENU_ITEMS.map((x, index) => {
              return (
                <div key={index} className={styles.menu_item}>
                  <Badge counter={x.counter}>{x.icon}</Badge>
                  <span className={styles.menu_item_title}>{x.title}</span>
                </div>
              )
            })}
          </div>
          <IconMenu />
        </div>
      </div>
    </div>
  )
}

export default Header
