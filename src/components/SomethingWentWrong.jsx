import { Link } from "react-router";

function SomethingWentWrong({ resetErrorBoundary }) {

    const handleReturnHome = () => {
        resetErrorBoundary();
      };
  return (
    <div>
      <h1>
        Something went horribly wrong! Use this unique helping button to go back
        to the home page
      </h1>
      <Link to="home">
        <button className="p-4 bg-red" onClick={handleReturnHome}>Go back</button>
      </Link>
    </div>
  );
}

export default SomethingWentWrong;
