import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oops !!!</h2>
            <Link to="/"><button className="btn bg-pink-600">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;