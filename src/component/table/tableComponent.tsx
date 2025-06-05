import React from 'react';
import type { TableProps } from './types.ts';
import type { IObjectLiteral, mainHeaders } from '@/types/type.ts';

const TableComponent: React.FC<TableProps> = ({
  errors,
  rowData,
  headers,
  tableStyles,
  className = '',
  loading,
}) => {
  return (
    <table id="characterTable" className={`${className}`}>
      <thead className={tableStyles?.headerStyles}>
        <tr>
          {headers?.map((headerItems: mainHeaders, i) => (
            <th key={i}>{headerItems?.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {errors && typeof errors === 'string' && (
          <tr key={'containerLoader'}>
            <td key={'loader'} colSpan={headers?.length}>
              <div className=" text-center py-5">
                <h4>{`${errors}`}</h4>
              </div>{' '}
            </td>
          </tr>
        )}
        {loading && (
          <tr key={'containerLoader'}>
            <td key={'loader'} colSpan={headers?.length}>
              <div className=" text-center py-5">
                <div className="spinner-border" role="status"></div>
              </div>{' '}
            </td>
          </tr>
        )}
        {!loading &&
          rowData?.map((charactersRes: IObjectLiteral, index: number) => {
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
