import React from 'react'
import styles from './index.less'
interface headerProps {
  goToPath?: (type: string)=> void
}
const Bottom = (props: headerProps) => {
  const goToPath = (type: string) => {
    if (props.goToPath) {
      props.goToPath(type)
    }
  }
  return (
    <div className={styles["bottom-content"]}>
      <div className={styles["bottom-content-title"]}>
        <span className={styles["title-item"]} onClick={() => {goToPath('home')}}>首页</span>
        <span className={styles["title-item"]} onClick={() => {goToPath('game')}}>游戏</span>
        <span className={styles["title-item"]} onClick={() => {goToPath('video')}}>番剧</span>
        <span className={styles["title-item"]} onClick={() => {goToPath('tribune')}}>论坛</span>
        <span className={styles["title-item"]} onClick={() => {goToPath('contact')}}>联系我们</span>
      </div>
    </div>
  )
}
export default Bottom