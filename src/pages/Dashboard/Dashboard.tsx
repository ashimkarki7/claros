import DashboardStyles from './Dashboard.module.scss';
import { type FC, useEffect, useState } from 'react';
import type { IObjectLiteral } from '@/types/type.ts';
import Search from '@component/search';
import Button from '@component/button';

interface LoginFormProps {
  users?: IObjectLiteral;
  characters?: IObjectLiteral;
  fetchCharacters: (formData: number) => void;
}

const Dashboard: FC<LoginFormProps> = (props: any) => {
  const { fetchCharacters, characters } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchCharacters({
      page: page,
    });
  }, []);

  const onSearch = () => {
    setPage(1);
    fetchCharacters({
      page: 1,
      name: searchTerm,
    });
  };

  return (
    <div className="container-fluid mt-3">
      <div id="main-content">
        <div className={`${DashboardStyles?.tableSection}`}>
          <h4>Characters</h4>
          <div className="row mb-3" id={'SearchContainer'}>
            <div className="col-md-6">
              <div
                className={`input-group ${DashboardStyles.customSearchGroup}`}
              >
                <span className="input-group-text bg-light border-0">
                  <i className="bi bi-search  text-muted"></i>
                </span>

                <Search
                  value={searchTerm}
                  onChangeHandler={(value: IObjectLiteral) => {
                    setSearchTerm(value?.target?.value);
                  }}
                  title={'characters'}
                  type="text"
                  className="form-control"
                  placeholder={'Search by name'}
                />
                <Button
                  onClickHandler={() => {
                    onSearch();
                  }}
                  title={'Search'}
                  className={`btn  ${DashboardStyles?.btnSearch}`}
                />
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table id="characterTable" className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Species</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {characters?.results?.map(
                  (charactersRes: IObjectLiteral, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{charactersRes.id}</td>
                        <td>{charactersRes.name}</td>
                        <td>{charactersRes.status}</td>
                        <td>{charactersRes.species}</td>
                        <td>{charactersRes.gender}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
