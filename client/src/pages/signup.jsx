import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../graphql/mutations/user';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const SignUp = (props) => {

    const currentPage = useLocation().pathname;

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',

    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
  


    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            username: '',
            email: '',
            password: '',
        });
    };

     // update state based on form input changes
     const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <main className="login-main backgroundlines">
        <div className="img">
          <div className="card">
            <h2 className="login-title">Sign Up</h2>
            <div className="login-card">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link style={{color: "white"}} to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    className="form-input1"
                                    placeholder="Your username"
                                    name="username"
                                    type="text"
                                    value={formState.username}
                                    onChange={handleChange}
                                />
                                <input
                                    className="form-input1"
                                    placeholder="Your email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className="form-input1"
                                    placeholder="Your Password"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <button
                                    className="startbtn"
                                    style={{ cursor: 'pointer' }}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        )}

                        {error && (
                            <div className="form-input1">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp;

