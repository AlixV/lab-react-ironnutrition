import React from 'react';

const Search = ({searchedString, callbackSearch }) => {
  return (
    <div>
        <input
            type="text"
            placeholder='Search some food'
            value={searchedString}
            onChange={(e)=> callbackSearch (e.target.value)}
        />
  </div>
  );
};

export default Search;
