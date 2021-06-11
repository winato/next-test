import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Showcase from './Showcase';

export default function Layout({ title, description, children, keywords }) {
  return (
    <div>
      <Head description={description}>
        <title>{title}</title>
        <meta content={description} name='description' />
        <meta content={keywords} name='keywords' />
      </Head>
      <Header />
      <Showcase />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Title',
  description: 'description',
  keywords: 'keywords',
};
