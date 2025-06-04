import React, { type MouseEvent } from 'react';
type ButtonProps = {
  hasIconOnly?: boolean;
  title?: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
};

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
