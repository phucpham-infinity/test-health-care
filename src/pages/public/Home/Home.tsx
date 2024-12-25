import Button from '@/components/Button'
import Badge from '@/components/common/Badge'
import DropDownMenu from '@/components/DropDownMenu'
import Header from '@/components/Header'
import Hexagon from '@/components/Hexagon'
import IconInfo from '@/components/Icons/IconInfo'
import IconKnife from '@/components/Icons/IconKnife'
import PhotoCard from '@/components/PhotoCard'
import ScrollButton from '@/components/ScrollButton'
import RecordCard from '@/components/RecordCard'
import ColumnCard from '@/components/ColumnCard'

import m01 from '@/assets/images/m01.jpg'
import myRecommend1 from '@/assets/images/MyRecommend-1.jpg'
import column1 from '@/assets/images/column-1.jpg'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: 30 }}>
        <Badge counter={5}>
          <IconInfo />
        </Badge>
        <Hexagon label="Morning" icon={<IconKnife />} />
        This is home
        <Button
          label="記録をもっと見る"
          onClick={() => console.log('clicked')}
        />
        <DropDownMenu label="自分の記録" />
        <ScrollButton />
        <PhotoCard imageUrl={m01} title="05.21.Morning" />
        <RecordCard
          imageUrl={myRecommend1}
          title="BODY RECORD"
          description="自分のカラダの記録"
        />
        <ColumnCard
          imageUrl={column1}
          date="2021.05.17   23:25"
          description="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ"
          tags={['魚料理', '和食', 'DHA']}
        />
        <Footer
          links={[
            { label: '会員登録', href: '/' },
            { label: '運営会社', href: '/' },
            { label: '利用規約', href: '/' },
            { label: '個人情報の取扱について', href: '/' },
            { label: '特定商取引法に基づく表記', href: '/' },
            { label: 'お問い合わせ', href: '/' }
          ]}
        />
      </div>
    </div>
  )
}

export default Home
