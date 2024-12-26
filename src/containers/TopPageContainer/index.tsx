import ScrollButton from '@/components/ScrollButton'
import TopPageGraph from '@/components/TopPageGraph'

import TopPageMealRecords from '@/components/TopPageMealRecords'

const HomePageContainer = () => {
  return (
    <>
      <TopPageGraph />
      <TopPageMealRecords />
      <ScrollButton />
    </>
  )
}

export default HomePageContainer
