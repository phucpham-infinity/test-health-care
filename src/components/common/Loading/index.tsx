import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.lds_facebook}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loading
