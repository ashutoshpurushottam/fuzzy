import FuzzySearch from '../components/fuzzy-search';
import styles from '../styles/Home.module.css';
import characters from './../characters.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <FuzzySearch
          options={characters}
          fuseThreshold={0.4}
          keys={['name', 'company', 'species']}
          minChars={2}
        />
      </main>
    </div>
  );
}
