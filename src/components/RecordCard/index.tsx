import React from 'react'
import styles from './RecordCard.module.scss'

interface RecordCardProps {
  imageUrl: string
  title: string
  description: string
  onClick: () => void
}

const RecordCard: React.FC<RecordCardProps> = ({
  imageUrl,
  title,
  description,
  onClick
}) => {
  return (
    <div onClick={onClick} className={styles.card}>
      <img src={imageUrl} alt="Body Record" className={styles.image} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default RecordCard
