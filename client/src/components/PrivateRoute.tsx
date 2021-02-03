import { Redirect, Route } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { UserContextType } from '../models/user';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const { user } = useContext(UserContext) as UserContextType;

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? (
                    <Component {...props} user={user} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
