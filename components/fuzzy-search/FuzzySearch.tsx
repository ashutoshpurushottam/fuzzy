import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import fuzzyStyles from './../../styles/Fuzzy.module.css';
import { props } from './model';

interface FuzzyOption {
  name: string;
  company: string;
  species: string;
}

interface FuzzyOptions {
  options: Array<FuzzyOption>;
}

const FuzzySearch: React.FC<props> = ({ options, keys, fuseThreshold }) => {
  const fuse = new Fuse(options, {
    keys: keys,
    includeScore: true,
    threshold: fuseThreshold,
  });

  const [query, setQuery] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const results = fuse.search(query);
    console.log('==RESULTS==', results);
  };

  return (
    <div className={fuzzyStyles.container}>
      <h3>Fuzzy</h3>
      <input
        type='text'
        value={query}
        onChange={handleOnChange}
        placeholder='Search'
      />
    </div>
  );
};

export default FuzzySearch;
