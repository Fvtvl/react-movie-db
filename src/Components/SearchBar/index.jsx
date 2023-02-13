import React, { useEffect, useRef, useState } from 'react';

import { Wrapper, Content, CloseImage, SearchImage } from './SearchBar.styles';
import { BiSearchAlt } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import PropTypes from 'prop-types';

const SearchBar = React.memo(({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);
  const textInput = useRef(null);

  function handleClick() {
    textInput.current?.focus();
  }

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <SearchImage onClick={() => handleClick()}>
          <BiSearchAlt />
        </SearchImage>
        <input
          ref={textInput}
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
        <CloseImage onClick={() => setState('')}>
          <CgClose />
        </CloseImage>
      </Content>
    </Wrapper>
  );
});

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
