import React from 'react'
import styles from './HeaderCategories.module.scss'

interface ICategory {
  title: string
  subtitle: string
  id: number
}

interface HeaderCategoriesProps {
  categories: ICategory[]
  onCategoryClick: (category: ICategory) => void
}

const HeaderCategories: React.FC<HeaderCategoriesProps> = ({
  categories,
  onCategoryClick
}) => {
  return (
    <div className={styles.header_categories}>
      {!!categories?.length &&
        categories.map((category, index) => (
          <div
            key={index}
            onClick={() => onCategoryClick(category)}
            className={styles.category}
          >
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
