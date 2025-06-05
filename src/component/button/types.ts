import React from 'react';

export type ButtonProps = {
  hasIconOnly?: boolean;
  title?: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
};
