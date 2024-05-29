import { Link, useLocation } from "react-router-dom";
import { DELETE_CLIMB} from "../../graphql/mutations/climbs";
import { QUERY_CLIMB } from "../../graphql/queries/climbs";
import { useMutation } from "@apollo/client";
import './climbTable.css'

export default function ClimbTable({ climbs }) {

  const currentPage = useLocation().pathname;

  const [removeClimb, { errors }] = useMutation(
    DELETE_CLIMB,
    {
      refetchQueries: [
        QUERY_CLIMB,
        'climbs'
      ]
    }
  );


  return (
    <div className="container">

      <Link id="addbtn" style={{ textDecoration: "none", color: "black" }}
        to="/AddClimb"
        className={currentPage === '/AddClimb' ? 'nav-link active' : 'nav-link'}>
        <i className="fa-solid fa-plus"></i>
      </Link>

      <table className="table">
        <tbody className="tbody">
          <tr>
            <th></th>
            <th className="th titles">Climb Name:</th>
            <th className="th titles">Grade:</th>
            <th className="th titles">Location:</th>
            <th className="th titles">Date:</th>
            <th className="th titles notes">Comments:</th>
          </tr>
          {climbs &&
            climbs.map((climb) => (
              <tr key={climb._id}>
                <td className="th">
                  <button className="tablebtn">
                    <Link style={{ textDecoration: "none", color: "black" }}
                      className="btn btn-primary btn-block btn-squared"
                      to={`/Climb/${climb._id}`}
                    >
                      Edit
                    </Link>
                  </button>
                </td>
                <td className="th tdname">{climb.climbName}</td>
                <td className="th td">{climb.grade}</td>
                <td className="th td"> {climb.location}</td>
                <td className="th td">{climb.date}</td>
                <td className="th td tdnote">{climb.notes}</td>
                <td className="th">
                  <i className="fa-solid fa-trash-can" onClick={() => removeClimb({ variables: { id: climb._id } })}></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
