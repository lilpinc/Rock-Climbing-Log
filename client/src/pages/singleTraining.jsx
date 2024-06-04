import { Navigate } from 'react-router-dom';
import UpdateTrainingEvent from '../components/Home Page/UpdateTrainingEvent'
import Auth from '../utils/auth'





const SingleTraining = () => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }


  return (

          <UpdateTrainingEvent />

  );
};

export default SingleTraining;