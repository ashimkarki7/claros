import React, { type ChangeEvent, type KeyboardEvent } from 'react';
import type { SearchProps } from './types.ts';
const Search: React.FC<SearchProps> = ({
  value,
  type,
  placeholder,
  title,
  onChangeHandler,
  className = '',
  disabled = false,
  onSubmit,
}) => {
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      onSubmit(event?.target?.value);
    }
  };

  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(event: ChangeEvent<HTMLElement>) => onChangeHandler(event)}
      onKeyDown={handleKeyDown}
      id={`search_${title}`}
      disabled={disabled}
      className={` ${className}`}
    />
  );
};

export default Search;
