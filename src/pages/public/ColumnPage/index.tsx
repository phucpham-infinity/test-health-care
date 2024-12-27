import MainLayout from '@/layouts/MainLayout'
import HomePageContainer from '@/containers/HomePageContainer'
import classNames from 'classnames'
import styles from './ColumnPage.module.scss'

const ColumnPage = () => {
  return (
    <MainLayout>
      <div className={classNames('container', styles.home_page)}>
        <HomePageContainer />
      </div>
    </MainLayout>
  )
}

export default ColumnPage
