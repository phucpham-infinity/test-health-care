import React from 'react'
import styles from './MyExerciseList.module.scss'
import { IExerciseRecord } from '@/types'
import classNames from 'classnames'

interface MyExerciseListProps {
  records: IExerciseRecord[]
  isLoading: boolean
}

const MyExerciseList: React.FC<MyExerciseListProps> = ({
  records,
  isLoading
}) => {
  return (
    <div className={'container'}>
      <div className={styles.page_container}>
        <div className={styles.header}>
          <h3>MY EXERCISE</h3>
          <span>2021.05.21</span>
        </div>
        {isLoading && <p>Loading...</p>}
        <div className={classNames(styles.list_container, 'custom-scrollbar')}>
          {!!records?.length &&
            records.map((record, index) => (
              <div key={index} className={styles.record}>
                <div className={styles.title}>
                  <p>
                    <h5>●</h5>
                    {record.activity}
                  </p>
                  <span>{record.duration}</span>
                </div>
                <div className={styles.calories}>{record.calories}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={416}
                  height={2}
                  viewBox="0 0 416 2"
                  fill="none"
                >
                  <path d="M0 1H416" stroke="#777777" />
                </svg>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MyExerciseList
