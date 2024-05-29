import './myClimbs.css'
import ClimbTable from "../components/Home Page/climbTable";
import { useQuery } from "@apollo/client";
import { QUERY_CLIMBS } from "../graphql/queries/climbs";
// import { Navigate } from 'react-router-dom';
// import Auth from '../utils/auth'
import { Link } from 'react-router-dom';


export default function myClimbs() {

    // if (!Auth.loggedIn()) {
    //     return <Navigate to="/" />;
    // }
    const { loading, data } = useQuery(QUERY_CLIMBS);
    const climbsData = data?.climbs || [];

    return (
        <div className='my-climbs'>
            <h1 id="overtitle">Climbs listed in your Log</h1>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (


                    <div className='tablebox'>
                        <ClimbTable
                            climbs={climbsData}
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