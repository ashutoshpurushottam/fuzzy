import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import fuzzyStyles from './Fuzzy.module.css';
import { props, FuzzyOption } from './model';
import uuid from 'react-uuid';

const FuzzySearch: React.FC<props> = ({
  options,
  keys,
  fuseThreshold,
  minChars,
}) => {
  const fuse = new Fuse(options, {
    keys: keys,
    includeScore: true,
    threshold: fuseThreshold,
  });

  const [query, setQuery] = useState<string>('');
  const [filterItems, setFilterItems] = useState<FuzzyOption[]>([]);
  const [selectedItems, setSelectedItems] = useState<FuzzyOption[]>([]);

  useEffect(() => {
    if (query.length === 0) {
      setFilterItems([]);
    }
  }, [query]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuery = e.target.value;
    console.log('==QUERY==', inputQuery);
    setQuery(inputQuery);
    const results = fuse.search(inputQuery);
    console.log('==RESULTS==', results);
    const filteredItems = results.map(searchResult => searchResult.item);
    setFilterItems(filteredItems);
  };

  const handleOnSelection = (item: FuzzyOption) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      setQuery('');
    }
  };

  return (
    <div className={fuzzyStyles.fuzzy}>
      <h3>Fuzzy</h3>
      <input
        type='text'
        value={query}
        onChange={handleOnChange}
        placeholder='Search'
      />
      {selectedItems.map((item: FuzzyOption) => {
        return (
          <span className={fuzzyStyles.button} key={uuid()}>
            {item.name}
          </span>
        );
      })}
      <div className={fuzzyStyles.suggestions_container}>
        {filterItems &&
          filterItems.map((item: FuzzyOption, idx: number) => {
            return (
              <div
                key={uuid()}
                className={fuzzyStyles.item}
                onClick={() => handleOnSelection(item)}>
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FuzzySearch;
