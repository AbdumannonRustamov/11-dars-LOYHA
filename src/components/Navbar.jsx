import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-base-200">
      <div className="navbar main-container">
        <div className="navbar-start">
          <Link className="btn btn-netural" to="/">
            Logo
          </Link>
        </div>
        <div className="navbar-end flex gap-3">
        
          <Link className="link link-primary" to="/register">
            <button className="btn btn-secondary btn-outline">Logout</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
