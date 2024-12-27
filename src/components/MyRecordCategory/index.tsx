import React from 'react'
import styles from './MyRecordCategory.module.scss'
import RecordCard from '@/components/RecordCard'

import mr1 from '@/assets/images/MyRecommend-1.jpg'
import mr2 from '@/assets/images/MyRecommend-2.jpg'
import mr3 from '@/assets/images/MyRecommend-3.jpg'
import classNames from 'classnames'

interface MyRecordCategoryProps {
  onChangeCategory: (category: 'bodyRecord' | 'exercise' | 'diary') => any
}

const MyRecordCategory: React.FC<MyRecordCategoryProps> = ({
  onChangeCategory
}) => {
  return (
    <div className={classNames(styles.record_category, 'container')}>
      <RecordCard
        description={'自分のカラダの記録'}
        imageUrl={mr1}
        title={'BODY RECORD'}
        onClick={() => onChangeCategory('bodyRecord')}
      />
      <RecordCard
        description={'自分の運動の記録'}
        imageUrl={mr2}
        title={'MY EXERCISE'}
        onClick={() => onChangeCategory('exercise')}
      />
      <RecordCard
        description={'自分の日記'}
        imageUrl={mr3}
        title={'MY DIARY'}
        onClick={() => onChangeCategory('diary')}
      />
    </div>
  )
}

export default MyRecordCategory
