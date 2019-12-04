import React from 'react';
import styles from './index.less';
import router from 'umi/router';
import Image from '@/components/Image'
import AnimeDetailLt from '@/components/animeDetailLt'
import AnimeDetailRT from '@/components/animeDetailRt'
import AnimeDetailCt from '@/components/AnimeDetailCt'
import AnimeDetailVe from '@/components/AnimeDetailVe'
const Home: React.FC = (props) => {
  return (
    <div className={styles["content"]}>
      <Image src="/home/home.png"  className={styles["image-content"]}/>
      <div className={styles["content-item"]}>
        <div className={styles["content-item-title"]}>
          <div className={styles["item-title1"]}>青春之歌</div>
          <div className={styles["item-title2"]}>For The Youth</div>
        </div>
        <div className={styles["item-content"]}> 
          <AnimeDetailLt detail={{}} position="left"/>
          <AnimeDetailRT detail={{}} position="left"/>
        </div>
        <div className={styles["item-content"]}>
          <AnimeDetailRT detail={{}} position="right"/>
          <AnimeDetailLt detail={{}} position="right"/>
        </div>
      </div>
      <div className={styles["content-item"]}>
        <div className={styles["content-item-title"]}>
          <div className={styles["item-title1"]}>流年恋曲</div>
          <div className={styles["item-title2"]}>For Ohe Love</div>
        </div>
        <AnimeDetailCt detail={{}}/>
      </div>
      <div className={styles["content-item"]}>
        <div className={styles["content-item-title"]}>
          <div className={styles["item-title1"]}>澎湃热血</div>
          <div className={styles["item-title2"]}>Still Worth Fighting For</div>
        </div>
        <AnimeDetailVe detail={{}}/>
      </div>
    </div>
  )
}

export default Home;