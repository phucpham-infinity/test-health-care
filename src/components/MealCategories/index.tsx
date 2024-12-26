// components/MealCategories.tsx
import React from 'react'
import styles from './MealCategories.module.scss'
import Hexagon from '@/components/Hexagon'

interface Category {
  id: number
  label: string
  icon: React.ReactNode
}

interface MealCategoriesProps {
  categories: Category[]
}

const MealCategories: React.FC<MealCategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Hexagon
          key={category.id}
          icon={category.icon}
          label={category.label}
        />
      ))}
    </div>
  )
}

export default MealCategories
