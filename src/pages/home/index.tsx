import React from 'react';
import { FormattedMessage, formatMessage } from "umi-plugin-react/locale";
import styles from './index.less'
import router from 'umi/router';
import Header from '@/components/header'
const Home: React.FC = (props) => {
  const goToPath = (type: string) => {
    let routerPath = {
      home: '/',
      game: '/game',
      video: '/video',
      tribune: '/tribune',
      center: '/member/login'
    }
    router.push({
      pathname: routerPath[type]
    })
  }
  return (
    <div className={styles["content"]}>
      <Header goToPath={(type) => {goToPath(type)}}/>
    </div>
  )
}

export default Home;