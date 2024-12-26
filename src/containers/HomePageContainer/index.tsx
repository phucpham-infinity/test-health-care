import { useEffect } from 'react'
import ArticleGrid from '@/components/ArticleGrid'
import Button from '@/components/Button'
import HeaderCategories from '@/components/HeaderCategories'
import ScrollButton from '@/components/ScrollButton'
import { useFetch } from '@/hooks/useFetch.ts'
import Loading from '@/components/common/Loading'

const HomePageContainer = () => {
  const {
    data: dataCategories,
    isLoading,
    error,
    fetchData
  } = useFetch('/api/categories')

  const {
    data: dataArticles,
    isLoading: isLoadingArticles,
    error: errorArticles,
    fetchData: fetchDataArticles
  } = useFetch('/api/articles')

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (dataCategories?.length) {
      fetchDataArticles(`/api/articles?categoryId=${dataCategories[0].id}`)
    }
  }, [dataCategories])

  if (isLoading) return <Loading />
  if (error) return <div>Error...</div>

  const handleCategoryClick = (category: any) => {
    fetchDataArticles(`/api/articles?categoryId=${category.id}`)
  }

  return (
    <>
      <HeaderCategories
        onCategoryClick={handleCategoryClick}
        categories={dataCategories}
      />
      {(() => {
        if (isLoadingArticles) {
          return <Loading />
        }
        if (errorArticles) {
          return <div>Error...</div>
        }
        return <ArticleGrid articles={dataArticles} />
      })()}
      <Button
        label="コラムをもっと見る"
        onClick={() => console.log('clicked')}
      />
      <ScrollButton />
    </>
  )
}

export default HomePageContainer
