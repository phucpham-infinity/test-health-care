import MainLayout from '@/layouts/MainLayout'
import Button from '@/components/Button'
import classNames from 'classnames'
import styles from './LoginPage.module.scss'
import { useAuth } from '@/hooks/useAuth.tsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/top-page')
    }
  }, [isAuthenticated])
  return (
    <MainLayout>
      <div className={classNames('container', styles.login_page)}>
        <Button onClick={login} label={'Login'} />.
      </div>
    </MainLayout>
  )
}

export default LoginPage
