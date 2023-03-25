import React from 'react';

const SearchBar = () => {
  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='검색어를 입력해주세요'
        className='search-input'
      />
    </div>
  );
};

export default SearchBar;
