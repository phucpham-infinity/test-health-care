import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface MainLayoutProps {
  children?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
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
  )
}

export default MainLayout
