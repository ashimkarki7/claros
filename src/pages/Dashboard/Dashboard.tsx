import DashboardStyles from './Dashboard.module.scss';
import { type FC, useEffect, useState } from 'react';
import type { IObjectLiteral } from '@/types/type.ts';
import Search from '@component/search';
import Button from '@component/button';
import TableComponent from '@component/table';
import { characterTableHeaders } from '@pages/Dashboard/enum/characterEnum.tsx';

interface DashboardProps {
  users?: IObjectLiteral;
  characters?: IObjectLiteral;
  charactersLoading?: boolean;
  fetchCharacters: (formData: IObjectLiteral) => void;
  cleanCharacter: () => void;
}

const Dashboard: FC<DashboardProps> = (props: any) => {
  const { fetchCharacters, characters, cleanCharacter, charactersLoading } =
    props;
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
                  onSubmit={() => {
                    setPage(1);
                    onFilterApply({
                      page: 1,
                      name: searchTerm,
                    });
                  }}
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
              loading={charactersLoading}
              rowData={characters?.results}
              headers={characterTableHeaders}
              className="table table-bordered border-dark table-centered table-hover  table-striped"
              tableStyles={{
                headerStyles: `table-dark`,
              }}
            />
          </div>
          <div id={'Pagination'}>
            <ul className="pagination justify-content-start flex-wrap gap-2">
              {characters?.info?.pages &&
                Array.from({ length: 10 }, (_, index) => (
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
                    <Button
                      onClickHandler={() => {
                        console.log('fte');
                      }}
                      title={`${index + 1}`}
                      className="page-link"
                    />
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
