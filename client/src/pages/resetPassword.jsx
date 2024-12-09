import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '/public/css/login.css';
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../graphql/queries/user";
import { RESET_PASSWORD } from "../graphql/mutations/user";

// import Auth from '../utils/auth';

const ResetPassword = (props) => {

  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');
  
  const [resetPassword] = useMutation(RESET_PASSWORD);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await resetPassword({ variables: { token, newPassword } });
      if (data.resetPassword.success) {
        setMessage('Password reset successfully. You can now log in.');
      } else {
        setMessage(data.resetPassword.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <main className="login-main backgroundlines">
      <div className="img">
        <div className="card">
          <h2 className="login-title">Reset Password</h2>
          <p>Enter your new password below</p>
          <div className="login-card">
            <form className="login-form" onSubmit={handleFormSubmit}>
              <input
                className="form-input1"
                placeholder="New Password"
                name="password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button
                className="startbtn"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>

    </main>
  );
};

  // const { userId } = useParams();
  // const { loading, error, data } = useQuery(QUERY_USER, { variables: { id: userId } });
  // const userData = data?.user || [];

  // const [resetPassword, { errors }] = useMutation(RESET_PASSWORD);

  // const [formState, setFormState] = useState(
  //   {
  //     id: userData._id,
  //     email: userData.email,
  //     password: userData.password,
  //   }
  // );


  // // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // //   submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   resetPassword({
  //     variables: { id: userData._id, ...formState }
  // })
  // window.location.replace('/')

  // };


export default ResetPassword;
