import React from 'react';
import type { TableProps } from './types.ts';
import type { IObjectLiteral, mainHeaders } from '@/types/type.ts';
const TableComponent: React.FC<TableProps> = ({
  rowData,
  headers,
  className = '',
}) => {
  return (
    <table id="characterTable" className={`${className}`}>
      <thead>
        <tr>
          {headers?.map((headerItems: mainHeaders, i) => (
            <th key={i}>{headerItems?.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData?.map((charactersRes: IObjectLiteral, index: number) => {
          return (
            <tr key={index}>
              <td>{charactersRes.id}</td>
              <td>{charactersRes.name}</td>
              <td>{charactersRes.status}</td>
              <td>{charactersRes.species}</td>
              <td>{charactersRes.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
