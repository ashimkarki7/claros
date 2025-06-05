import HeaderStyles from './Header.module.scss';
import { useLocation } from 'react-router';
import Button from '@component/button';
import { useAppDispatch } from '@store/reduxHook.ts';
import { useNavigate } from 'react-router-dom';
import { signOut } from '@pages/Login/slice.ts';

const Header = () => {
  const router = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className={HeaderStyles?.navbarCustom}>
      <div className={`${HeaderStyles?.topBar} container-fluid`}>
        <div className="d-flex align-items-center gap-3">
          <div className={`${HeaderStyles?.logoTopbar} text-white`}>
            {`${router?.pathname?.replace('/', '').replace(/^./, (match) => match.toUpperCase())}`}
          </div>
          <Button
            hasIconOnly={true}
            title={'bi bi-list'}
            className={`btn btn-sm btn-outline-secondary me-1`}
            onClickHandler={(evt) => {
              navigate('/');
            }}
          />
        </div>
        <div className={`${HeaderStyles?.logoTopBarAction}`}>
          <i className="bi bi-globe fs-4  ms-1"></i>
          <i className="bi bi-bell fs-4  ms-1"></i>
          <i className="bi bi-person-circle fs-4  ms-1"></i>
          <Button
            title="Logout"
            className={`btn btn-sm btn-outline-dark`}
            onClickHandler={() => {
              dispatch(signOut());
              navigate('/');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
