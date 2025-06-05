import type { ChangeEvent } from 'react';
import type { IObjectLiteral, mainHeaders } from '@/types/type.ts';

export type TableProps = {
  rowData?: IObjectLiteral[];
  headers?: mainHeaders[];
  onChangeHandler?: (event: ChangeEvent<HTMLElement>) => void;
  className?: string;
  disabled?: boolean;
};
