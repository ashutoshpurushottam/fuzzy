import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import fuzzyStyles from './../../styles/Fuzzy.module.css';
import { props, FuzzyOption } from './model';
import uuid from 'react-uuid';

const FuzzySearch: React.FC<props> = ({ options, keys, fuseThreshold }) => {
  const fuse = new Fuse(options, {
    keys: keys,
    includeScore: true,
    threshold: fuseThreshold,
  });

  const [query, setQuery] = useState<string>('');
  const [filterItems, setFilterItems] = useState<FuzzyOption[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const results = fuse.search(query);
    console.log('==RESULTS==', results);
    const filteredItems = results.map(searchResult => searchResult.item);
    setFilterItems(filteredItems);
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
      <ul>
        {filterItems.map(item => {
          return <li key={uuid()}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FuzzySearch;
