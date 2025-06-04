import type {JSX} from 'react';

interface RoleBasedRouteProps {
    children: JSX.Element;
}

const PublicBasedRoute = ({ children }: RoleBasedRouteProps) => {


    return children;
};

export default PublicBasedRoute;