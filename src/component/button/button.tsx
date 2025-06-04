import React, { type MouseEvent } from 'react';
type ButtonProps = {
  title: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClickHandler,
  className = '',
  disabled = false,
}) => {
  console.log(className);
  return (
    <>
      <button
        disabled={disabled}
        className={` ${className}`}
        onClick={(event: MouseEvent<HTMLButtonElement>) =>
          onClickHandler(event)
        }
      >
        {title}
      </button>
    </>
  );
};

export default Button;
