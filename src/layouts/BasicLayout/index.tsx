import React from 'react';
import router from 'umi/router';
import styles from './index.less';
import Header from '@/components/Header';
import Bottom from '@/components/Bottom'
interface IRouterPath {
  [key:string]: string
}
const BasicLayout: React.FC = props => {
  const goToPath = (type: string) => {
    let routerPath:IRouterPath = {
      home: '/',
      game: '/game',
      video: '/video',
      tribune: '/tribune',
      center: '/member/login',
      contact: '/contact'
    }
    router.push({
      pathname: routerPath[type]
    })
  }
  return (
    <div className={styles.normal}>
      <Header goToPath={(type) => {goToPath(type)}}/>
      {props.children}
      <Bottom goToPath={(type) => {goToPath(type)}}/>
    </div>
  );
};

export default BasicLayout;
