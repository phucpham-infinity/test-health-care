import React, { useEffect, useRef, useState } from 'react'
import CircularProgress from '@/components/CircularProgress'
import styles from './TopPageGraph.module.scss'
import Graph from '@/components/Graph'

const TopPageGraph: React.FC = () => {
  const bodyGraphRightRef = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (bodyGraphRightRef.current) {
      const { width, height } =
        bodyGraphRightRef.current.getBoundingClientRect()
      setSize({ width, height })
    }
  }, [bodyGraphRightRef?.current]) //

  return (
    <div className={styles.body_graph}>
      <div className={styles.body_graph_left}>
        <CircularProgress value={80} date={'05/21'} />
      </div>
      <div ref={bodyGraphRightRef} className={styles.body_graph_right}>
        <div className={styles.body_graph_content}>
          <Graph width={size?.width} height={size?.height} />
        </div>
      </div>
    </div>
  )
}

export default TopPageGraph
