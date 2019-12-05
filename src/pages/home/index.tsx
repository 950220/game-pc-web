import React, { useState, useEffect } from 'react';
import styles from './index.less';
import router from 'umi/router';
import Image from '@/components/Image'
import { getHomeInfo } from './service'
import AnimeDetailLt from '@/components/AnimeDetailLt'
import AnimeDetailRT from '@/components/AnimeDetailRt'
import AnimeDetailCt from '@/components/AnimeDetailCt'
import AnimeDetailVe from '@/components/AnimeDetailVe'
const Home: React.FC = (props) => {

  const [youth, setYouth] = useState([])
  const [love, setLove] = useState([])
  const [action, setAction] = useState([])

  useEffect(() => {
    getHomeInfo().then((res: any) => {
      if (res.resultCode === 200) {
      }
    })
    .catch((err: any) => {
    })
  }, []);
  return (
    <div className={styles["content"]}>
      <Image src="/home/home.png"  className={styles["image-content"]}/>
      <div className={styles["content-item"]}>
        <div className={styles["content-item-title"]}>
          <div className={styles["item-title1"]}>青春之歌</div>
          <div className={styles["item-title2"]}>For The Youth</div>
        </div>
        {
          youth&&youth.map((item, index) => {
            return (
              index % 2 === 0 ? 
              <div className={styles["item-content"]} key={index}> 
                <AnimeDetailLt detail={item} position="left"/>
                <AnimeDetailRT detail={item} position="left"/>
              </div>
              :
              <div className={styles["item-content"]}>
                <AnimeDetailRT detail={item} position="right"/>
                <AnimeDetailLt detail={item} position="right"/>
              </div>
            )
          })
        }
      </div>
      <div className={styles["content-item"]}>
        <div className={styles["content-item-title"]}>
          <div className={styles["item-title1"]}>流年恋曲</div>
          <div className={styles["item-title2"]}>For Ohe Love</div>
        </div>
        {
          love&&love.map((item, index) => {
            return (
              <AnimeDetailCt detail={item}/>
            )
          })
        }
      </div>
      <div className={styles["content-item"]}>
        <div className={styles["content-item-title"]}>
          <div className={styles["item-title1"]}>澎湃热血</div>
          <div className={styles["item-title2"]}>Still Worth Fighting For</div>
        </div>
        {
          action&&action.map((item, index) => {
            return (
              <AnimeDetailVe detail={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home;