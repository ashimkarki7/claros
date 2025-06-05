import React, { type ChangeEvent } from 'react';
import type { SearchProps } from './types.ts';
const Search: React.FC<SearchProps> = ({
  value,
  type,
  placeholder,
  title,
  onChangeHandler,
  className = '',
  disabled = false,
}) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(event: ChangeEvent<HTMLElement>) => onChangeHandler(event)}
      id={`search_${title}`}
      disabled={disabled}
      className={` ${className}`}
    />
  );
};

export default Search;
