import ArticleGrid from '@/components/ArticleGrid'
import Button from '@/components/Button'
import HeaderCategories from '@/components/HeaderCategories'
import ScrollButton from '@/components/ScrollButton'

const HomePageContainer = () => {
  return (
    <>
      <HeaderCategories
        categories={[
          { title: 'RECOMMENDED COLUMN', subtitle: 'オススメ' },
          { title: 'RECOMMENDED DIET', subtitle: 'ダイエット' },
          { title: 'RECOMMENDED BEAUTY', subtitle: '美容' },
          { title: 'RECOMMENDED HEALTH', subtitle: '健康' }
        ]}
      />
      <ArticleGrid
        articles={[
          {
            id: 1,
            date: '2021/01/01',
            time: '12:00',
            description: 'ダイエットの基本を学ぼうダイエットの基本を学ぼう',
            tags: ['ダイエット', '基本'],
            imageUrl: 'https://picsum.photos/id/1/200'
          },
          {
            id: 2,
            date: '2021/01/02',
            time: '12:00',
            description:
              '美容の基本を学ぼうダイエットの基本を学ぼうダイエットの基本を学ぼう',
            tags: ['美容', '基本'],
            imageUrl: 'https://picsum.photos/id/2/200'
          },
          {
            id: 3,
            date: '2021/01/03',
            time: '12:00',
            description: '健康の基本を学ぼうダイエットの基本を学ぼう',
            tags: ['健康', '基本'],
            imageUrl: 'https://picsum.photos/id/3/200'
          },
          {
            id: 4,
            date: '2021/01/04',
            time: '12:00',
            description: 'ダイエットの基本を学ぼうダイエットの基本を学ぼう',
            tags: ['ダイエット', '基本'],
            imageUrl: 'https://picsum.photos/id/4/200'
          },
          {
            id: 5,
            date: '2021/01/05',
            time: '12:00',
            description:
              '美容の基本を学ぼうダイエットの基本を学ぼうダイエットの基本を学ぼう',
            tags: ['美容', '基本'],
            imageUrl: 'https://picsum.photos/id/5/200'
          },
          {
            id: 6,
            date: '2021/01/06',
            time: '12:00',
            description: '健康の基本を学ぼうダイエットの基本を学ぼう',
            tags: ['健康', '基本'],
            imageUrl: 'https://picsum.photos/id/6/200'
          },
          {
            id: 7,
            date: '2021/01/07',
            time: '12:00',
            description: 'ダイエットの基本を学ぼうダイエットの基本を学ぼう',
            tags: ['ダイエット', '基本'],
            imageUrl: 'https://picsum.photos/id/7/200'
          },
          {
            id: 8,
            date: '2021/01/08',
            time: '12:00',
            description:
              '美容の基本を学ぼうダイエットの基本を学ぼうダイエットの基本を学ぼう',
            tags: ['美容', '基本'],
            imageUrl: 'https://picsum.photos/id/8/200'
          },
          {
            id: 9,
            date: '2021/01/09',
            time: '12:00',
            description: '健康の基本を学ぼうダイエットの基本を学ぼう',
            tags: ['健康', '基本'],
            imageUrl: 'https://picsum.photos/id/9/200'
          }
        ]}
      />
      <Button
        label="コラムをもっと見る"
        onClick={() => console.log('clicked')}
      />
      <ScrollButton />
    </>
  )
}

export default HomePageContainer
