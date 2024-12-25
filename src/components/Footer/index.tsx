import React from 'react'
import styles from './Footer.module.scss'
import classNames from 'classnames'

interface FooterProps {
  links: { label: string; href: string }[]
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className={classNames(styles.footer, 'container')}>
      <ul className={styles.link_list}>
        {links.map((link, index) => (
          <li key={index} className={styles.link_item}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
