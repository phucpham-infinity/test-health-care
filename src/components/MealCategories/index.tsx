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
  onChangeMealType: (type: string) => void
}

const MealCategories: React.FC<MealCategoriesProps> = ({
  categories,
  onChangeMealType
}) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <div key={category.id} onClick={() => onChangeMealType(category.label)}>
          <Hexagon icon={category.icon} label={category.label} />
        </div>
      ))}
    </div>
  )
}

export default MealCategories
