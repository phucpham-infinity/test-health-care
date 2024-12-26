import React from 'react'
import styles from './HeaderCategories.module.scss'

interface HeaderCategoriesProps {
  categories: { title: string; subtitle: string }[]
}

const HeaderCategories: React.FC<HeaderCategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.header_categories}>
      {categories.map((category, index) => (
        <div key={index} className={styles.category}>
          <h3>{category.title}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={2}
            viewBox="0 0 56 2"
            fill="none"
          >
            <path d="M0 1H56H0Z" fill="black" fillOpacity={0.01} />
            <path d="M0 1H56" stroke="white" />
          </svg>
          <p>{category.subtitle}</p>
        </div>
      ))}
    </div>
  )
}

export default HeaderCategories
