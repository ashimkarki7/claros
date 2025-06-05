import type { JSX } from 'react';
import { useAppSelector } from '@store/reduxHook.ts';
import { useNavigate, Navigate } from 'react-router-dom';
import PageLayout from '@component/pagelayout';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  const currentUser = useAppSelector(
    (state) => state?.rootReducer?.user?.currentUser
  );
  if (!currentUser) {
    navigate('/');
  }

  return currentUser ? (
    <PageLayout>{children}</PageLayout>
  ) : (
    <Navigate to={'/'} />
  );
};

export default PrivateRoute;
