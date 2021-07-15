import Header from './Header';
import Meta from './Meta';
import styles from './../styles/Layout.module.css';
import React from 'react';

const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}></main>
        {children}
      </div>
    </>
  );
};

export default Layout;
