import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    
    return (
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        {error.status === 404 && (
          <div>
            <h2>page is not found</h2>
            <Link to="/">
              <button className="btn btn-warning">Go Home</button>
            </Link>
          </div>
        )}
      </div>
    );
};

export default ErrorPage;