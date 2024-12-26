import React from 'react'
import styles from './MealRecord.module.scss'
import PhotoCard from '@/components/PhotoCard'

interface Meal {
  time: string
  imageUrl: string
  id: number
  type: string
}

interface MealRecordProps {
  meals: Meal[]
}

const MealRecord: React.FC<MealRecordProps> = ({ meals }) => {
  return (
    <div className={styles.grid}>
      {meals.map((meal) => (
        <PhotoCard
          key={meal.id}
          title={`${meal.time}.${meal.type}`}
          imageUrl={meal.imageUrl}
        />
      ))}
    </div>
  )
}

export default MealRecord
