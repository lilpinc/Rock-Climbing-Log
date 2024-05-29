import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CLIMB } from '../graphql/mutations/climbs';
import { Navigate } from 'react-router-dom';
// import Auth from '../utils/auth'
import './addClimb.css'

const AddClimb = (climb) => {
    // if (!Auth.loggedIn()) {
    //     return <Navigate to="/" />;
    //   }
    const [formState, setFormState] = useState({
        climbName: '',
        grade: '',
        climbType:'',
        location: '',
        date: '',
        notes: '',
    });
    const [addClimb, { error, data }] = useMutation(ADD_CLIMB);

    const handleFormSubmit = async (event) => {
        event.preventDefault();


        try {
            const { data } = await addClimb({
                variables: { ...formState },
            });

            window.location.replace('/myClimbs')
        } catch (err) {
            console.error(err);
        }
        // clear form values
        setFormState({
            climbName: '',
            grade: '',
            climbType:'',
            location: '',
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
            <h2 className="card-header">New Climb Entry</h2>
            <form onSubmit={handleFormSubmit}>
                <label name="climbName">Climb Name:</label>
                <input
                    className="form-input"
                    placeholder="Climb name"
                    name="climbName"
                    type="text"
                    value={formState.climbName}
                    onChange={handleChange}
                />
                <label name="grade">Grade:</label>
                <input
                    className="form-input"
                    placeholder="Grade"
                    name="grade"
                    type="text"
                    value={formState.grade}
                    onChange={handleChange}
                />
                 <label name="climbType">Climb Type:</label>
                <input
                    className="form-input"
                    placeholder="Climb Type"
                    name="climbType"
                    type="text"
                    value={formState.climbType}
                    onChange={handleChange}
                />
                <label name="location">Location:</label>
                <input
                    className="form-input"
                    placeholder="Location"
                    name="location"
                    type="text"
                    value={formState.location}
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

export default AddClimb;
