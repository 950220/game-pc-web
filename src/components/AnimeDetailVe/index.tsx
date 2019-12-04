import React from 'react';
import styles from './index.less'
import Image from '@/components/Image'

interface animeProps {
  detail: any
}
const AnimeDetailCt = (props: animeProps) => {
  const goToDetail = (id: string) => {

  }
  return (
    <div className={styles["content"]}>
      <video id="media" src="http://www.sundxs.com/test.mp4" controls width="1100px" heigt="580px"></video> 
      <div className={styles["content-item"]}>
        <div className={styles["item"]}>
          <div className={styles["item-title"]}>剧情简介</div>
          <div className={styles["item-text"]}>房贷首付付付付付付付付付付付付付付付付房贷首付付付付付付付付付付付付付付付付付付付飞洒付付付付付付付付付付付付付</div>
        </div>
        <div className={styles["content-bottom"]}>
          <a href="#" onClick={goToDetail('111')}><i>查看更多&nbsp;>></i></a>
        </div>
      </div>
    </div>
  )
}
export default AnimeDetailCt