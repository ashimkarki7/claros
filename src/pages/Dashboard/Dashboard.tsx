import DashboardStyles from './Dashboard.module.scss';
import { type FC, useEffect } from 'react';
import type { IObjectLiteral } from '@/types/type.ts';

interface LoginFormProps {
  users?: IObjectLiteral;
  characters?: IObjectLiteral;
  fetchCharacters: (formData: number) => void;
}

const Dashboard: FC<LoginFormProps> = (props: any) => {
  const { fetchCharacters, characters } = props;

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="container-fluid mt-3">
      <div id="main-content">
        <div className={`${DashboardStyles?.tableSection}`}>
          <h4>Characters</h4>
          <div className="row mb-3" id={'SearchContainer'}>
            <div className="col-md-6">
              <input
                type="text"
                id="searchInput"
                className="form-control"
                placeholder="Search by name"
              />
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
