import './footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <>
            <div className='footer'>
                <p>Created by Anna Pincus © 2024</p>
                <div>
                <Link to="https://www.linkedin.com/in/anna-britta-pincus-25293b137/" className="sourcelinks" target = "_blank">
                <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link to="https://github.com/lilpinc" className="sourcelinks" target = "_blank">
                <i className="fa-brands fa-square-github"></i>
                </Link>
                <Link to="mailto:ab.pincus002@gmail.com" className="sourcelinks">
                <i className="fa-solid fa-envelope"></i>
                </Link>
                </div>
            </div>
        </>
    );
}