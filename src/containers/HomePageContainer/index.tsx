import { useEffect, useState } from 'react'
import ArticleGrid from '@/components/ArticleGrid'
import Button from '@/components/Button'
import HeaderCategories from '@/components/HeaderCategories'
import ScrollButton from '@/components/ScrollButton'
import { useFetch } from '@/hooks/useFetch.ts'
import Loading from '@/components/common/Loading'

const HomePageContainer = () => {
  const [articles, setArticles] = useState([])
  const [articlesPage, setArticlesPage] = useState(1)
  const [categoryId, setCategoryId] = useState(1)

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
      setArticlesPage(1)
      setCategoryId(dataCategories[0].id)
    }
  }, [dataCategories])

  useEffect(() => {
    if (categoryId && articlesPage) {
      fetchDataArticles({ categoryId: categoryId, page: articlesPage })
    }
  }, [categoryId, articlesPage])

  useEffect(() => {
    if (dataArticles?.length) {
      if (articles?.length === 0) setArticles(dataArticles)
      else setArticles([...articles, ...dataArticles])
    }
  }, [dataArticles])

  const handleCategoryClick = (category: any) => {
    setCategoryId(category.id)
    setArticlesPage(1)
    setArticles([])
  }

  const handleLoadMore = () => {
    setArticlesPage(articlesPage + 1)
  }
  return (
    <>
      <HeaderCategories
        onCategoryClick={handleCategoryClick}
        categories={dataCategories}
      />
      {(() => {
        if (isLoadingArticles && !articles?.length) {
          return <Loading />
        }
        if (errorArticles) {
          return <div>Error...</div>
        }
        return <ArticleGrid articles={articles} />
      })()}
      {isLoading && <Loading />}
      {error && <div>Error...</div>}
      <Button label="コラムをもっと見る" onClick={handleLoadMore} />
      <ScrollButton />
    </>
  )
}

export default HomePageContainer
