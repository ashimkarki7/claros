import type { JSX } from 'react';
import { useAppSelector } from '@store/reduxHook.ts';
import { Navigate, useNavigate } from 'react-router-dom';

interface RoleBasedRouteProps {
  children: JSX.Element;
}

const PublicBasedRoute = ({ children }: RoleBasedRouteProps) => {
  const currentUser = useAppSelector(
    (state) => state?.rootReducer?.user?.currentUser
  );
  const navigate = useNavigate();
  if (currentUser) {
    navigate('/dashboard');
  }
  return currentUser ? <Navigate to={'/dashboard'} /> : children;
};

export default PublicBasedRoute;
