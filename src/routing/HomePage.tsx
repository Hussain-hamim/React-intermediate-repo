import { Link } from "react-router-dom";

const HomePage = () => {
  // throw new Error("something failed");

  return (
    <>
      <p>
        <h2>Welcome dear</h2>
        <p>This is the Home page for the site</p>
      </p>
      <Link className="btn btn-primary" to="/users">
        Users
      </Link>
    </>
  );
};

export default HomePage;
