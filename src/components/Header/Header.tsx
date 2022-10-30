import React from 'react';

import styles from './Header.module.css';

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => (
  <div className={styles.header_container}>
    <h1 className={styles.header_title}>
      НУЖНО СДЕЛАТЬ <b>{todoCount}</b> ЗАДАЧУ(И)
    </h1>
  </div>
);
