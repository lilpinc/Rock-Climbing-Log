import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CLIMB } from "../../graphql/queries/climbs";
import { UPDATE_CLIMB } from "../../graphql/mutations/climbs";
import '/public/css/updateClimbForm.css'
import { Link } from 'react-router-dom';


export default function UpdateClimbForm() {
    const { climbId } = useParams();
    const { loading, error, data } = useQuery(QUERY_CLIMB, { variables: { id: climbId } });
    const climbData = data?.climb || [];

    const [updateClimb, { errors }] = useMutation(UPDATE_CLIMB);

    const [formState, setformState] = useState(

        {
            climbName: climbData.climbName || '',
            grade: climbData.grade || '',
            climbType: climbData.climbType || '',
            location: climbData.location || '',
            date: climbData.date || '',
            notes: climbData.notes || ''
        }

    );


    const handleChange = (event) => {
        const { name, value } = event.target;
        setformState({
            ...formState, [name]: value
        })

    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateClimb({
                variables: { id: climbData._id, ...formState }
            });
            console.log("Climb updated successfully");
            window.location.replace('/myClimbs');
        } catch (error) {
            console.error("Error updating climb:", error);
        }
    };


    return (
        <div className="add-new">
            <h2 className="card-header">Update Climb Entry</h2>
            <Link to="/myClimbs" >
            <i className="fa-solid fa-arrow-left return"></i>
            </Link>
            <form onSubmit={handleFormSubmit}>
                <div className="form-style">
                    <label name="name">Climb Name:</label>
                    <input
                        className="form-input"
                        type="text"
                        name="climbName"
                        placeholder={climbData.climbName}
                        value={formState.climbName}
                        onChange={handleChange} />
                </div>
                <div className="form-style">
                    <label name="grade">Grade:</label>
                    <input
                        className="form-input"
                        type="text"
                        name="grade"
                        placeholder={climbData.grade}
                        value={formState.grade}
                        onChange={handleChange} />
                </div>
                <div className="form-style">
                    <label name="climbType">Climb Type:</label>
                    <input
                        className="form-input"
                        type="text"
                        name="climbType"
                        placeholder={climbData.climbType}
                        value={formState.climbType}
                        onChange={handleChange} />
                </div>
                <div className="form-style">
                    <label name="location">Location:</label>
                    <input type="text"
                        className="form-input"
                        name="location"
                        placeholder={climbData.location}
                        value={formState.location}
                        onChange={handleChange} />
                </div>
                <div className="form-style">
                    <label name="date">Date:</label>
                    <input type="text"
                        className="form-input"
                        name="date"
                        placeholder={climbData.date}
                        value={formState.date}
                        onChange={handleChange} />
                </div>
                <div className="form-style">
                    <label name="notes">Notes:</label>
                    <input type="text"
                        className="form-input notes2"
                        name="notes"
                        placeholder={climbData.notes}
                        value={formState.notes}
                        onChange={handleChange} />
                </div>
                <button className="formbtn" type="submit">Submit Changes</button>
            </form>
        </div>
    );

};