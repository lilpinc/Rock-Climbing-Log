import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_TRAININGLOG } from "../../graphql/queries/trainingLog";
import { UPDATE_TRAININGLOG } from "../../graphql/mutations/trainingLog";
import './updateTrainingEvent.css'
import { Link } from 'react-router-dom';


export default function updateTrainingEvent() {
    const { trainingId } = useParams();
    const { loading, error, data } = useQuery(QUERY_TRAININGLOG, { variables: { id: trainingId } });
    const trainingData = data?.trainingLog || [];

    const [updateTraining, { errors }] = useMutation(UPDATE_TRAININGLOG);

    const [formState, setformState] = useState(
        {
            logName: trainingData.logName || '',
            date: trainingData.date || '',
            notes: trainingData.notes || ''
        });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformState({
            ...formState, [name]: value
        })

    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateTraining({
                variables: { id: trainingData._id, ...formState }
            });
            console.log(trainingData._id);
            console.log("Training Event updated successfully");
            window.location.replace('/myTraining');
        } catch (error) {
            console.error("Error updating training event:", error);
        }
    };


    return (
        <div className="add-new">
            <h2 className="card-header">Update Training Entry</h2>
            <Link to="/myTraining" >
                <i className="fa-solid fa-arrow-left return"></i>
            </Link>
            <form onSubmit={handleFormSubmit}>
                <div className="form-style">
                    <label name="name">Training Type:</label>
                    <input
                        className="form-input"
                        type="text"
                        name="logName"
                        placeholder={trainingData.logName}
                        value={formState.logName}
                        onChange={handleChange} />
                </div>
                <div className="form-style">
                    <label name="date">Date:</label>
                    <input type="text"
                        className="form-input"
                        name="date"
                        placeholder={trainingData.date}
                        value={formState.date}
                        onChange={handleChange} />
                </div>
                <div className="form-style">
                    <label name="notes">Comments:</label>
                    <input type="text"
                        className="form-input notes2"
                        name="notes"
                        placeholder={trainingData.notes}
                        value={formState.notes}
                        onChange={handleChange} />
                </div>
                <button className="formbtn" type="submit">Submit Changes</button>
            </form>
        </div>
    );

};