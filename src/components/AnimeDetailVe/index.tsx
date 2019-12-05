import React from 'react';
import styles from './index.less'
import Image from '@/components/Image'

interface animeProps {
  detail: any
}
const AnimeDetailCt = (props: animeProps) => {
  const detail = props.detail
  const goToDetail = (id: string) => {

  }
  return (
    <div className={styles["content"]}>
      <video id="media" src="http://www.sundxs.com/test.mp4" controls width="1100px" heigt="580px" align="center"></video> 
      <div className={styles["content-item"]}>
        <div className={styles["item"]}>
          <div className={styles["item-title"]}>剧情简介</div>
          <div className={styles["item-text"]}>{detail.synopsis}</div>
        </div>
        <div className={styles["content-bottom"]}>
          <a href="#" onClick={goToDetail('111')}><i>查看更多&nbsp;>></i></a>
        </div>
      </div>
    </div>
  )
}
export default AnimeDetailCt