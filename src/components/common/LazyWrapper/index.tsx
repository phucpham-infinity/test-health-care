import React, { Suspense } from 'react'
import Loading from '@/components/common/Loading'

const LazyWrapper: React.FC<{ component: React.LazyExoticComponent<any> }> = ({
  component: Component
}) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )
}
export default LazyWrapper
