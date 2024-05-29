import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CLIMB } from "../../graphql/queries/climbs";
import { UPDATE_CLIMB } from "../../graphql/mutations/climbs";
import './updateClimbForm.css'


export default function UpdateClimbForm() {
    const { climbId } = useParams();
    const { loading, error, data } = useQuery(QUERY_CLIMB, { variables: { id: climbId } });
    const climbData = data?.climb || [];

    const [updateClimb, { errors }] = useMutation(UPDATE_CLIMB);

    const [formState, setformState] = useState(

        {
            id: climbData._id,
            climbName: climbData.climbName,
            grade: climbData.grade,
            location: climbData.location,
            date: climbData.date,
            notes: climbData.notes,
        }

    );


    const handleChange = (event) => {
        const { name, value } = event.target;
        setformState({
            ...formState, [name]: value
        })

    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        updateClimb({
            variables: { id: climbData._id, ...formState }
        })
        window.location.replace('/myClimbs')
    }


    return (
        <div className="add-new">
            <h2 className="card-header">Update Climb Entry</h2>
            <form onSubmit={handleFormSubmit}>
                <label name="name">Climb Name:</label>
                <input
                    className="form-input"
                    type="text"
                    name="climbName"
                    placeholder={climbData.climbName}
                    value={formState.climbName}
                    onChange={handleChange} />
                <label name="beginDate">Grade:</label>
                <input
                    className="form-input"
                    type="text"
                    name="grade"
                    placeholder={climbData.grade}
                    value={formState.grade}
                    onChange={handleChange} />
                <label name="location">Location:</label>
                <input type="text"
                    className="form-input"
                    name="location"
                    placeholder={climbData.location}
                    value={formState.location}
                    onChange={handleChange} />
                <label name="date">Date:</label>
                <input type="text"
                    className="form-input"
                    name="date"
                    placeholder={climbData.date}
                    onChange={handleChange} />
                <label name="notes">Notes:</label>
                <input type="text"
                    className="form-input"
                    name="notes"
                    placeholder={climbData.notes}
                    onChange={handleChange} />
                <button className="addbtn" type="submit">Submit Changes</button>
            </form>
        </div>
    );

};