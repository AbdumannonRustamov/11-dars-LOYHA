import { Link } from "react-router-dom";

function Navbar() {
  const userData = JSON.parse(localStorage.getItem("user"))
  return (
    <header className="bg-base-200">
      <div className="navbar main-container">
        <div className="navbar-start">
          <Link className="btn btn-netural" to="/">
            Logo
          </Link>
        </div>
        <div className="navbar-center"></div>   
        <div className="navbar-end flex gap-3">
          <p>{userData?.displayName}</p>
        <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
          <img src="https://st.depositphotos.com/40001914/60364/i/450/depositphotos_603643952-stock-illustration-illustration-businessman-cartoon-avatar.jpg" />
            </div>
          </div>
          <Link className="link link-primary" to="/register">
            <button className="btn btn-secondary btn-outline">Logout</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
