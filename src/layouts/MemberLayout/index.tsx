import React from 'react';
import styles from './index.less';

const MemberLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
};

export default MemberLayout;
