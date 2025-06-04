import HeaderStyles from './Header.module.scss';
import { useLocation } from 'react-router';
import Button from '@component/button';
import { useAppDispatch, useAppSelector } from '@store/reduxHook.ts';
import { useNavigate } from 'react-router-dom';
import { signOut } from '@pages/Login/slice.ts';

const Header = () => {
  const router = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(
    (state) => state?.rootReducer?.user?.currentUser
  );
  return (
    <div className={HeaderStyles?.navbarCustom}>
      <div className={`${HeaderStyles?.topBar} container-fluid`}>
        <div className="d-flex align-items-center gap-3">
          <Button
            hasIconOnly={true}
            title={'bi bi-list'}
            className={`btn btn-sm btn-outline-secondary`}
            onClickHandler={(evt) => {
              navigate('/');
            }}
          />
          <div className={`${HeaderStyles?.logoTopbar} text-white`}>
            {`${router?.pathname?.replace('/', '').replace(/^./, (match) => match.toUpperCase())}`}
          </div>
        </div>
        <div className={`${HeaderStyles?.logoTopBarAction}`}>
          <i className="bi bi-person-circle fs-4  ms-1"></i>
          {currentUser?.toUpperCase()}
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
