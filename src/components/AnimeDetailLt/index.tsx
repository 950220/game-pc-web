import React from 'react';
import styles from './index.less'
import Image from '@/components/Image'
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
          <div className={styles["item-text-top"]}>夏目友人帐</div>
          <div className={styles["item-text-bottom"]}>———— 妖与人与朋友</div>
        </div>
      </div>
      <div className={styles["content-item"]}>
        <div className={styles["content-item-image"]}>
          <Image src="/home/home_1.png" />
        </div>
        <div className={styles["content-item-text"]}>
          <div><b>夏目贵志</b></div>
          <div>
            夏目友人帐的主人公，自幼失去双亲，在各亲戚间辗转，后被父方的远房亲戚藤原夫妇收养。之后便生活在外婆夏目玲子年轻时曾居住的小镇。从玲子的遗物中得到了“友人帐”，于是决定将定下契约的妖怪们的名字一一归还...
          </div>
        </div>
      </div>
      <div className={styles["content-item1"]}>
        <div className={styles["content-item-text"]}>
          <div><b>夏目贵志</b></div>
          <div>
            夏目友人帐的主人公，自幼失去双亲，在各亲戚间辗转，后被父方的远房亲戚藤原夫妇收养。之后便生活在外婆夏目玲子年轻时曾居住的小镇。从玲子的遗物中得到了“友人帐”，于是决定将定下契约的妖怪们的名字一一归还...
          </div>
        </div>
        <div className={styles["content-item-image"]}>
          <Image src="/home/home_1.png" />
        </div>
      </div>
      <div className={styles["content-item2"]}>
        <div><b>剧情简介</b></div>
        <div>夏目贵志因继承了外婆的力量，从小就能看见妖怪，是一位待人友善、为人温和的少年，希望和人类及妖怪友好相处。自幼失去双亲，在各亲戚间辗转，后被父方的远房亲戚藤原夫妇收养。之后便生活在外婆夏目玲子年轻时曾居住的小镇。从玲子的遗物中得到了“友人帐”，于是决定将定下契约的妖怪们的名字一一归还。在和有着招财猫外表的猫咪老师一起归还名字的生活中，渐渐学会与人类及妖怪友好相处。</div>
      </div>
      <div className={styles["content-bottom"]}>
        <a href="#" onClick={goToDetail('111')}><i>查看更多&nbsp;>></i></a>
      </div>
    </div>
  )
}
export default AnimeDetailLt