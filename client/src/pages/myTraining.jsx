
import TrainingTable from "../components/Home Page/trainingTable";
import { useQuery } from "@apollo/client";
import { QUERY_TRAININGLOGS } from "../graphql/queries/trainingLog";
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth'
import { Link } from 'react-router-dom';


export default function myTraining() {

    if (!Auth.loggedIn()) {
        alert("Must be logged in to add a training session");
        return <Navigate to="/" />;
    }
    const { loading, data } = useQuery(QUERY_TRAININGLOGS);
    const trainingData = data?.trainingLogs || [];

    return (
        <div className='my-climbs'>
            <h1 id="overtitle">Training Sessions listed in your Log</h1>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (


                    <div className='tablebox'>
                        <TrainingTable
                            trainingLogs={trainingData}
                        />

                    </div>
                )}
            </div>
            <Link to="/" >
            <i className="fa-solid fa-arrow-left"></i>
            </Link>
        </ div>
    )
};