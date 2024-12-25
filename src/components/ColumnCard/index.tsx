import React from 'react'
import styles from './ColumnCard.module.scss'

interface ColumnCardProps {
  imageUrl: string
  date: string
  description: string
  tags: string[]
}

const ColumnCard: React.FC<ColumnCardProps> = ({
  imageUrl,
  date,
  description,
  tags
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={'photo'} className={styles.image} />
      <div className={styles.overlay}>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColumnCard
