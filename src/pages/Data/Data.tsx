import { type FC, useEffect } from 'react';
import DashboardStyles from './Data.module.scss';
import image from '../../assets/avatar-2.jpg';
import type { IObjectLiteral } from '@/types/type.ts';

interface DataProps {
  episode?: IObjectLiteral;
  fetchEpisodeByID: (formData: IObjectLiteral) => void;
  cleanEpisodeID: () => void;
}

const Data: FC<DataProps> = (props) => {
  const { fetchEpisodeByID, episode, cleanEpisodeID } = props;
  console.log('fwwwwwf', episode);
  useEffect(() => {
    fetchEpisodeByID({
      id: 1,
    });
    return () => {
      cleanEpisodeID();
    };
  }, []);

  return (
    <div className="container-fluid mt-3">
      <div id="main-content">
        <div className={`${DashboardStyles?.tableSection}`}>
          <h4>Profile</h4>
        </div>
        <div className={`row`}>
          <div className={`col-sm-12}`}>
            <div
              className={`card`}
              style={{ backgroundColor: 'rgb(114, 124, 245)' }}
            >
              <div className="card-body profile-user-box">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <div className="avatar-lg">
                          <img
                            src={image}
                            alt=""
                            className="rounded-circle img-thumbnail"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div>
                          <h4 className="mt-1 mb-1 text-white">
                            {episode?.name}
                          </h4>
                          <p className="font-13 text-white-50">
                            {' '}
                            {episode?.episode}
                          </p>

                          <ul className="mb-0 list-inline text-light">
                            <li className="list-inline-item me-3">
                              <h5 className="mb-1 text-white">
                                {episode?.air_date}
                              </h5>
                              <p className="mb-0 font-13 text-white-50">
                                Release Data
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
