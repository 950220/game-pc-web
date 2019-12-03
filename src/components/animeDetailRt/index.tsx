import React from 'react';
import styles from './index.less'
import Image from '@/components/Image'
interface animeProps {
  detail: any,
  position: string
}
const AnimeDetailRt = (props:animeProps) => {
  const detail = props.detail
  return (
    <div className={props.position === 'left' ? styles["right-content"] + " " + styles["position-left-1"] : styles["right-content"] + " " + styles["position-right-1"]}>
      <Image src="/home/home_2.png" className={styles["main-image"]}/>
      <div className={props.position === 'left' ? styles["left-position"] + " " + styles["position-left-2"] : styles["left-position"] + " " + styles["position-right-2"]}>
        <Image src="/home/home_left_1.png" className={styles["position-image"]}/>
        <Image src="/home/home_left_1.png" className={styles["position-image"]}/>
        <Image src="/home/home_left_1.png" className={styles["position-image"]}/>
        <Image src="/home/home_left_1.png" className={styles["position-image"]}/>
      </div>
    </div>
  )
}
export default AnimeDetailRt