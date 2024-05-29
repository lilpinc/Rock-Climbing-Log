import './footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <>
            <div className='footer'>
                <p>Created by Anna Pincus © 2024</p>
                <div>
                <Link to="/" className="sourcelinks">
                <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="/" className="sourcelinks">
                <i className="fa-brands fa-square-github"></i>
                </Link>
                <Link to="/" className="sourcelinks">
                <i className="fa-solid fa-envelope"></i>
                </Link>
                </div>
            </div>
        </>
    );
}