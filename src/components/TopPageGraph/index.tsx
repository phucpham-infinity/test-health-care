import React from 'react'
import CircularProgress from '@/components/CircularProgress'
import styles from './TopPageGraph.module.scss'

const TopPageGraph: React.FC = () => {
  return (
    <div className={styles.body_graph}>
      <div className={styles.body_graph_left}>
        <CircularProgress value={80} date={'05/21'} />
      </div>
      <div className={styles.body_graph_right}>{/*<Graph />*/}</div>
    </div>
  )
}

export default TopPageGraph
