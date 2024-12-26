import classNames from 'classnames'
import MealCategories from '@/components/MealCategories'
import IconKnife from '@/components/Icons/IconKnife.tsx'
import IconCup from '@/components/Icons/IconCup.tsx'
import MealRecord from '@/components/MealRecord'
import Button from '@/components/Button'
import styles from './TopPageMealRecords.module.scss'

const TopPageMealRecords = () => {
  return (
    <div className={classNames('container', styles.top_page_meal_records)}>
      <MealCategories
        categories={[
          {
            id: 1,
            label: 'Breakfast',
            icon: <IconKnife />
          },
          {
            id: 2,
            label: 'Lunch',
            icon: <IconKnife />
          },
          {
            id: 3,
            label: 'Dinner',
            icon: <IconKnife />
          },
          {
            id: 4,
            label: 'Snack',
            icon: <IconCup />
          }
        ]}
      />
      <MealRecord
        meals={[
          {
            id: 1,
            imageUrl: 'https://picsum.photos/id/33/200',
            time: '05.21',
            type: 'Morning'
          },
          {
            id: 2,
            imageUrl: 'https://picsum.photos/id/33/200',
            time: '05.21',
            type: 'Morning'
          },
          {
            id: 3,
            imageUrl: 'https://picsum.photos/id/33/200',
            time: '05.21',
            type: 'Morning'
          },
          {
            id: 4,
            imageUrl: 'https://picsum.photos/id/33/200',
            time: '05.21',
            type: 'Morning'
          },
          {
            id: 5,
            imageUrl: 'https://picsum.photos/id/33/200',
            time: '05.21',
            type: 'Morning'
          }
        ]}
      />
      <div className={styles.load_more}>
        <Button label="コラムをもっと見る" />
      </div>
    </div>
  )
}

export default TopPageMealRecords
