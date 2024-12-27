import { useEffect, useRef, useState } from 'react'
import { useFetch } from '@/hooks/useFetch.ts'

import MyRecordCategory from '@/components/MyRecordCategory'
import ScrollButton from '@/components/ScrollButton'
import BodyRecordGraph from '@/components/BodyRecordGraph'
import MyExerciseList from '@/components/MyExerciseList'
import { IDiary, IExerciseRecord } from '@/types'
import MyDiaryGrid from '@/components/MyDiaryGrid'

const MyRecordPageContainer = () => {
  const [filter, setFilter] = useState('year')
  const [diaryPage, setDiaryPage] = useState(1)
  const [diaryAllData, setDiaryAllData] = useState([])

  const {
    data: recordsData,
    fetchData: fetchDataRecords,
    isLoading: isLoadingRecords
  } = useFetch('/api/records')

  const {
    data: exercisesData,
    fetchData: fetchExercisesRecords,
    isLoading: isLoadingExercises
  } = useFetch<IExerciseRecord[]>('/api/exercises')

  const {
    data: diaryData,
    fetchData: fetchDataDiary,
    isLoading: isLoadingDiary
  } = useFetch<IDiary[]>('/api/diary')

  useEffect(() => {
    fetchExercisesRecords()
  }, [])

  useEffect(() => {
    if (filter) fetchDataRecords({ filter })
  }, [filter])

  useEffect(() => {
    if (diaryPage) fetchDataDiary({ page: diaryPage })
  }, [diaryPage])

  useEffect(() => {
    if (!diaryData?.length) return
    if (diaryAllData?.length === 0) setDiaryAllData(diaryData)
    if (diaryAllData?.length > 0)
      setDiaryAllData([...diaryAllData, ...diaryData])
  }, [diaryData])

  const handleLoadMoreDiary = () => {
    setDiaryPage(diaryPage + 1)
  }

  const bodyRecordGraphRef = useRef<HTMLDivElement>(null)
  const bodyRecordListRef = useRef<HTMLDivElement>(null)
  const bodyRecordDiaryRef = useRef<HTMLDivElement>(null)

  const handleOnChangeCategory = (id: 'bodyRecord' | 'exercise' | 'diary') => {
    switch (id) {
      case 'bodyRecord':
        bodyRecordGraphRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'exercise':
        bodyRecordListRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'diary':
        bodyRecordDiaryRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
    }
  }

  return (
    <>
      <MyRecordCategory onChangeCategory={handleOnChangeCategory} />
      <div ref={bodyRecordGraphRef}>
        <BodyRecordGraph
          isLoading={isLoadingRecords}
          onFilterChange={setFilter}
          data={recordsData}
        />
      </div>

      <div ref={bodyRecordListRef}>
        <MyExerciseList
          isLoading={isLoadingExercises}
          records={exercisesData}
        />
      </div>
      <div ref={bodyRecordDiaryRef}>
        <MyDiaryGrid
          data={diaryAllData}
          isLoading={isLoadingDiary}
          onLoadMore={handleLoadMoreDiary}
        />
      </div>

      <ScrollButton />
    </>
  )
}
export default MyRecordPageContainer
