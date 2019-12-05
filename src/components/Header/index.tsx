import React from 'react'
import styles from './index.less'
interface headerProps {
  goToPath?: (type: string)=> void
}
const Header = (props: headerProps) => {
  const goToPath = (type: string) => {
    if (props.goToPath) {
      props.goToPath(type)
    }
  }
  return (
    <div className={styles["header-content"]}>
      <div className={styles["header-content-title"]}>
        <span className={styles["title-item"]} onClick={() => {goToPath('home')}}>首页</span>
        <span className={styles["title-item"]} onClick={() => {goToPath('game')}}>游戏</span>
        <span className={styles["title-item"]} onClick={() => {goToPath('video')}}>番剧</span>
        <span className={styles["title-item"]} onClick={() => {goToPath('tribune')}}>论坛</span>
        <span className={styles["title-item"]} onClick={() => {goToPath('center')}}>个人中心</span>
      </div>
    </div>
  )
}
export default Header