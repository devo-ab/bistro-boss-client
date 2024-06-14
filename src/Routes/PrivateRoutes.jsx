import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className='progress w-56'></progress>
    }

    if(user){
        return children;
    }

    return <Navigate to="/signin" state={{from: location}} replace></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
  };

export default PrivateRoutes;