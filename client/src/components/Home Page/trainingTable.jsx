import { Link, useLocation } from "react-router-dom";
import { DELETE_TRAININGLOG} from "../../graphql/mutations/trainingLog";
import { QUERY_TRAININGLOG } from "../../graphql/queries/trainingLog";
import { useMutation } from "@apollo/client";


export default function TrainingTable({ trainingLogs }) {

  const currentPage = useLocation().pathname;

  const [removeClimb, { errors }] = useMutation(
    DELETE_TRAININGLOG,
    {
      refetchQueries: [
        QUERY_TRAININGLOG,
        'trainingLogs'
      ]
    }
  );


  return (
    <div className="container">
      <Link id="addbtn" style={{ textDecoration: "none", color: "black" }}
        to="/AddTraining"
        className={currentPage === '/AddTraining' ? 'nav-link active' : 'nav-link'}>
        <i className="fa-solid fa-plus"></i>
      </Link>

      <table className="table">
        <tbody className="tbody">
          <tr>
            <th></th>
            <th className="th titles">Training Type:</th>
            <th className="th titles">Date:</th>
            <th className="th titles notes">Comments:</th>
          </tr>
          {trainingLogs &&
            trainingLogs.map((trainingLog) => (
              <tr key={trainingLog._id}>
                <td className="th">
                    <Link style={{ textDecoration: "none", color: "black" }}
                      className="btn btn-primary btn-block btn-squared"
                      to={`/Training/${trainingLog._id}`}
                    >
                     <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                </td>
                <td className="th tdname">{trainingLog.logName}</td>
                <td className="th td">{trainingLog.date}</td>
                <td className="th td tdnote">{trainingLog.notes}</td>
                <td className="th">
                  <i className="fa-solid fa-trash-can" onClick={() => removeClimb({ variables: { id: trainingLog._id } })}></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
