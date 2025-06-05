import React, { type MouseEvent } from 'react';
import type { ButtonProps } from './types.ts';

const Button: React.FC<ButtonProps> = ({
  hasIconOnly,
  title,
  onClickHandler,
  className = '',
  disabled = false,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        className={` ${className}`}
        onClick={(event: MouseEvent<HTMLButtonElement>) =>
          onClickHandler(event)
        }
      >
        {hasIconOnly ? <i className={title}></i> : title}
      </button>
    </>
  );
};

export default Button;
