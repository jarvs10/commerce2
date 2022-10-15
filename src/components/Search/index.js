import React from 'react'
import { useState } from 'react';
import { SearchWrapper, SearchInput, SearchClearWrapper } from './styles';
import { IoClose } from 'react-icons/io5';

const Search = ({ searchTerm = '', Listener }) => {

  const [searchText, setSearchText] = useState(searchTerm);

  function handlerChangeText(e) {
    const data = e.target.value;
    setSearchText(data);
    Listener(data);
  }

  function clearSearchHandler() {
    setSearchText('');
    Listener('');
  }

  return (
    <SearchWrapper>
      <SearchInput
        value={searchText}
        onChange={handlerChangeText}
        type='text'
        placeholder='Search...'
      />

      <SearchClearWrapper
        onClick={clearSearchHandler}
        hasText={searchText !== ''}
      >
        <IoClose />
      </SearchClearWrapper>
    </SearchWrapper>
  )
}

export default Search