import { Navigate } from 'react-router-dom';

import type { JSX } from 'react';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = {};
  return user ? children : <Navigate to="/Login" />;
};

export default PrivateRoute;
