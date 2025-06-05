import type { ChangeEvent } from 'react';
import type { IObjectLiteral, mainHeaders } from '@/types/type.ts';

export type TableProps = {
  errors?: IObjectLiteral;
  rowData?: IObjectLiteral[];
  headers?: mainHeaders[];
  tableStyles?: IObjectLiteral;
  onChangeHandler?: (event: ChangeEvent<HTMLElement>) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};
