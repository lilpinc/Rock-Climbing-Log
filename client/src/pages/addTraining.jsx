import './addTraining.css';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TRAININGLOG } from '../graphql/mutations/trainingLog';
import { Navigate } from 'react-router-dom';
// import Auth from '../utils/auth'



const AddTraining = (trainingLog) => {
    // if (!Auth.loggedIn()) {
    //     return <Navigate to="/" />;
    //   }
    const [formState, setFormState] = useState({
        logName: '',
        date: '',
        notes: '',
    });
    const [addTrainingLog, { error, data }] = useMutation(ADD_TRAININGLOG);
  
    const handleFormSubmit = async (event) => {
        event.preventDefault();


        try {
            const { data } = await addTrainingLog({
                variables: { ...formState },
            });

            window.location.replace('/myTraining')
        } catch (err) {
            console.error(err);
        }
        // clear form values
        setFormState({
            logName: '',
            date: '',
            notes: '',
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });

    }
    return (
        <div className="add-new">
            <h2 className="card-header">New Training Session Entry</h2>
            <form onSubmit={handleFormSubmit}>
                <label name="climbName">Training Type:</label>
                <input
                    className="form-input"
                    placeholder="Training Type"
                    name="logName"
                    type="text"
                    value={formState.logName}
                    onChange={handleChange}
                />
                <label name="date">Date Sent:</label>
                <input
                    className="form-input"
                    placeholder="Date"
                    name="date"
                    type="text"
                    value={formState.date}
                    onChange={handleChange}
                />
                 <label name="notes">Notes:</label>
                <input
                    className="form-input"
                    placeholder="Enter notes here"
                    name="notes"
                    type="text"
                    value={formState.notes}
                    onChange={handleChange}
                />
                <button
                    className="addbtn btn-block btn-primary"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                >
                    Submit
                </button>
                {error && (
                    <div className="col-12 my-3 bg-danger text-white p-3">
                        Something went wrong...
                    </div>
                )}
            </form>
        </div>
    );
};

export default AddTraining;
