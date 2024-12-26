import React from 'react'
import styles from './ArticleGrid.module.scss'
import ColumnCard from '@/components/ColumnCard'

interface Article {
  id: number
  date: string
  time: string
  description: string
  tags: string[]
  imageUrl: string
}

interface ArticleGridProps {
  articles: Article[]
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  return (
    <div className={styles.article_grid}>
      {!!articles?.length &&
        articles.map((article) => (
          <ColumnCard
            key={article.id}
            date={article.date + ' ' + article.time}
            description={article.description}
            imageUrl={article.imageUrl}
            tags={article.tags}
          />
        ))}
    </div>
  )
}

export default ArticleGrid
