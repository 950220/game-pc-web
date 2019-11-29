import React from 'react';
import { FormattedMessage, formatMessage } from "umi-plugin-react/locale";
import styles from './index.less'
import router from 'umi/router';
const Home: React.FC = (props) => {
  const goToCenter = () => {
    router.push({
      pathname: '/member/login'
    })
  }
  return (
    <div className={styles["otherInfo"]}>
      <div onClick={goToCenter}>前往个人中心</div>
    </div>
  )
}

export default Home;