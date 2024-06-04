import UpdateClimbForm from '../components/Home Page/UpdateClimbForm'
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'





const SingleClimb = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }


  return (

          <UpdateClimbForm />

  );
};

export default SingleClimb;
