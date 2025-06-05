import DashboardStyles from './Dashboard.module.scss';
import { type FC, useEffect, useState } from 'react';
import type { IObjectLiteral } from '@/types/type.ts';
import Search from '@component/search';
import Button from '@component/button';
import TableComponent from '@component/table';
import { characterTableHeaders } from '@pages/Dashboard/enum/characterEnum.tsx';

interface LoginFormProps {
  users?: IObjectLiteral;
  characters?: IObjectLiteral;
  fetchCharacters: (formData: number) => void;
  cleanCharacter: () => void;
}

const Dashboard: FC<LoginFormProps> = (props: any) => {
  const { fetchCharacters, characters, cleanCharacter } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchCharacters({
      page: page,
    });

    return () => {
      cleanCharacter();
    };
  }, []);

  const onFilterApply = (filterArgs: IObjectLiteral) => {
    fetchCharacters(filterArgs);
  };

  return (
    <div className="container-fluid mt-3">
      <div id="main-content">
        <div className={`${DashboardStyles?.tableSection}`}>
          <h4>Characters</h4>
          <div className="row mb-3" id={'SearchContainer'}>
            <div className="col-md-6">
              <div className={`d-flex position-relative align-items-center`}>
                <i
                  className={`bi bi-search ${DashboardStyles?.searchIconStyle}`}
                ></i>
                <Search
                  value={searchTerm}
                  onChangeHandler={(value: IObjectLiteral) => {
                    setSearchTerm(value?.target?.value);
                  }}
                  title={'characters'}
                  type="text"
                  className={`form-control  ${DashboardStyles?.customSearchInput}`}
                  placeholder={'Search by name'}
                />
                {searchTerm && (
                  <i
                    className={`bi bi-x-circle  ${DashboardStyles?.clearIconStyle}`}
                    onClick={() => {
                      setSearchTerm('');
                    }}
                  />
                )}
                <Button
                  onClickHandler={() => {
                    setPage(1);
                    onFilterApply({
                      page: 1,
                      name: searchTerm,
                    });
                  }}
                  title={'Search'}
                  className={`btn  ${DashboardStyles?.btnSearch}`}
                />
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <TableComponent
              rowData={characters?.results}
              headers={characterTableHeaders}
              className="table table-striped"
            />
          </div>
          <div id={'Pagination'}>
            <ul className="pagination justify-content-start flex-wrap">
              {characters?.info?.pages &&
                Array.from({ length: characters?.info?.pages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${index + 1 === page ? 'active' : ''}`}
                    onClick={() => {
                      setPage(index + 1);
                      onFilterApply({
                        page: index + 1,
                        name: searchTerm,
                      });
                    }}
                  >
                    <button className="page-link">{index + 1}</button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
