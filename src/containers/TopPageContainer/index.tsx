import ScrollButton from '@/components/ScrollButton'
import TopPageGraph from '@/components/TopPageGraph'

import TopPageMealRecords from '@/components/TopPageMealRecords'
import { useFetch } from '@/hooks/useFetch.ts'
import { useEffect, useState } from 'react'

const HomePageContainer = () => {
  const [meals, setMeals] = useState([])
  const [mealType, setMealType] = useState<string>('Breakfast')
  const [page, setPage] = useState(1)

  const {
    data: dataMeals,
    isLoading: isLoadingMeals,
    error: errorMeals,
    fetchData: fetchDataMeals
  } = useFetch('/api/meals')

  const handleChangeMealType = (type: string) => {
    setMeals([])
    setPage(1)
    setMealType(type)
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if (mealType && page) {
      fetchDataMeals({ mealType: mealType, page })
    }
  }, [mealType, page])

  useEffect(() => {
    if (!dataMeals?.length) return
    if (meals?.length === 0) {
      setMeals(dataMeals)
    } else {
      setMeals([...meals, ...dataMeals])
    }
  }, [dataMeals])

  return (
    <>
      <TopPageGraph />
      <TopPageMealRecords
        meals={meals}
        isLoading={isLoadingMeals}
        error={errorMeals}
        onChangeMealType={handleChangeMealType}
        handleLoadMore={handleLoadMore}
      />
      <ScrollButton />
    </>
  )
}

export default HomePageContainer
