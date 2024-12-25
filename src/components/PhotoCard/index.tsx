import React from 'react'
import styles from './PhotoCard.module.scss'

interface PhotoCardProps {
  imageUrl: string
  title: string
}

const PhotoCard: React.FC<PhotoCardProps> = ({ imageUrl, title }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="photo-card" className={styles.image} />
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default PhotoCard
