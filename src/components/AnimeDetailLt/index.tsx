import React from 'react';
import styles from './index.less'
import Image from '@/components/Image'
import { Item } from '_rc-menu@7.5.3@rc-menu';
interface animeProps {
  detail: any,
  position: string
}
const AnimeDetailLt = (props:animeProps) => {
  const detail = props.detail
  const goToDetail = (id: string) => {
    console.log(111)
  }
  return (
    <div className={props.position === 'left' ? styles["left-content"] + " " + styles["position-left"] : styles["left-content"] + " " + styles["position-right"]}>
      <div className={styles["content-title"]}>
        <div className={styles["content-title-item"]}>
          <div className={styles["item-text-top"]}>{detail.animeName}</div>
          <div className={styles["item-text-bottom"]}>———— {detail.label}</div>
        </div>
      </div>
      {
        detail.characterList&&detail.characterList.length !== 0&&detail.characterList.map((item, index) => {
          return (
            index % 2 === 0 ?
            <div className={styles["content-item"]}>
              <div className={styles["content-item-image"]}>
                <Image src="/home/home_1.png" />
              </div>
              <div className={styles["content-item-text"]}>
                <div><b>{item.characterName}</b></div>
                <div className={styles["text"]}>
                  {item.characterDesc}
                </div>
              </div>
            </div>
            :
            <div className={styles["content-item1"]}>
              <div className={styles["content-item-text"]}>
                <div><b>{item.characterName}</b></div>
                <div className={styles["text"]}>
                {item.characterDesc}
                </div>
              </div>
              <div className={styles["content-item-image"]}>
                <Image src="/home/home_1.png" />
              </div>
            </div>
          )
        })
      }
      <div className={styles["content-item2"]}>
        <div><b>剧情简介</b></div>
        <div className={styles["text"]}>{detail.synopsis}</div>
      </div>
      <div className={styles["content-bottom"]}>
        <a href="#" onClick={goToDetail('111')}><i>查看更多&nbsp;>></i></a>
      </div>
    </div>
  )
}
export default AnimeDetailLt