import classNames from 'classnames'
import MealCategories from '@/components/MealCategories'
import IconKnife from '@/components/Icons/IconKnife.tsx'
import IconCup from '@/components/Icons/IconCup.tsx'
import MealRecord, { IMeal } from '@/components/MealRecord'
import Button from '@/components/Button'
import styles from './TopPageMealRecords.module.scss'
import React from 'react'
import Loading from '@/components/common/Loading'

interface TopPageMealRecordsProps {
  onChangeMealType: (type: string) => void
  handleLoadMore?: () => void
  meals: IMeal[]
  isLoading?: boolean
  error?: any
}

const TopPageMealRecords: React.FC<TopPageMealRecordsProps> = ({
  onChangeMealType,
  meals,
  isLoading,
  error,
  handleLoadMore
}) => {
  return (
    <div className={classNames('container', styles.top_page_meal_records)}>
      <MealCategories
        onChangeMealType={onChangeMealType}
        categories={[
          {
            id: 11,
            label: 'Breakfast',
            icon: <IconKnife />
          },
          {
            id: 21,
            label: 'Lunch',
            icon: <IconKnife />
          },
          {
            id: 31,
            label: 'Dinner',
            icon: <IconKnife />
          },
          {
            id: 41,
            label: 'Snack',
            icon: <IconCup />
          }
        ]}
      />
      <MealRecord meals={meals} />
      {isLoading && <Loading />}
      {error && <div>Error...</div>}
      <div className={styles.load_more}>
        <Button label="コラムをもっと見る" onClick={handleLoadMore} />
      </div>
    </div>
  )
}

export default TopPageMealRecords
