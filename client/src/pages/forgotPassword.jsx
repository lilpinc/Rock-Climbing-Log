import { useState } from 'react';
import '/public/css/login.css';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { FORGOT_PASSWORD } from "../graphql/mutations/user";

// import Auth from '../utils/auth';

const ForgotPassword = (props) => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [forgotPassword] = useMutation(FORGOT_PASSWORD);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    
    if (!email) {
      setMessage('Email is required.');
      return;
    }
    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    try {
      const { data } = await forgotPassword({ variables: { email } });
      if (data.forgotPassword.success) {
        setMessage('Check your email for a reset link.');
        console.log('Submitting email:', email);
      } else {
        setMessage(data.forgotPassword.message);
      }
    } catch (error) {
      console.error('Error:', error); // Log the error for debugging
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <main className="login-main backgroundlines">
      <div className="img">
      <Link to="/Login" className='back'><i class="fa-solid fa-arrow-left"></i></Link>
        <div className="card">
          <h2 className="login-title">Forgot Password</h2>
          <p>Forgot your password? Enter your email below to reset your password</p>
          <div className="login-card">
            <form className="login-form" onSubmit={handleFormSubmit}>
              <input
                className="form-input1"
                placeholder="Your email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;
