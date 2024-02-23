import { Link } from "react-router-dom";
const ErrorPage = () => {
    return ( 
        <div className="error-page">
            <h1>Error</h1>
            <p>Sorry, there was an error processing your request.</p>
            <Link  to={'/'}>Lets go to the home page</Link>
        </div>
     );
}
 
export default ErrorPage;