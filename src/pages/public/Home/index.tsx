import MainLayout from '@/layouts/MainLayout'
import HomePageContainer from '@/containers/HomePageContainer'
import classNames from 'classnames'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <MainLayout>
      <div className={classNames('container', styles.home_page)}>
        <HomePageContainer />
      </div>
    </MainLayout>
  )
}

export default Home
