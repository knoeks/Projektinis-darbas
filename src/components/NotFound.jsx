import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <h1>404 - Page not found</h1>
      <Link to="/home">Go back to the Home page</Link>
    </>
  );
}

export default NotFound;
