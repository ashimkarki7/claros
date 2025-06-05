import type { ChangeEvent } from 'react';

export type SearchProps = {
  title?: string;
  value: string;
  type?: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLElement>) => void;
  className?: string;
  disabled?: boolean;
};
