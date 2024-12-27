import React from 'react'
import styles from './MyDiaryGrid.module.scss'
import { IDiary } from '@/types'
import Button from '@/components/Button'

const DiaryCard: React.FC<IDiary> = ({ date, time, content }) => (
  <div className={styles.diary_card}>
    <h3>
      {date} <br />
      {time}
    </h3>
    <p>{content}</p>
  </div>
)

interface DiaryGridProps {
  data: IDiary[]
  isLoading?: boolean
  onLoadMore?: () => void
}

const DiaryGrid: React.FC<DiaryGridProps> = ({
  data,
  isLoading,
  onLoadMore
}) => {
  return (
    <div className={'container'}>
      <div className={styles.diary_grid}>
        <h2>MY DIARY</h2>
        <div className={styles.grid}>
          {!!data?.length &&
            data.map((entry, index) => <DiaryCard key={index} {...entry} />)}
        </div>
        {isLoading && <div>Loading...</div>}
        <div className={styles.load_more}>
          <Button onClick={onLoadMore} label="自分の日記をもっと見る" />
        </div>
      </div>
    </div>
  )
}

export default DiaryGrid
