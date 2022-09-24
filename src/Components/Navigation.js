import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="pb-4">
      <nav className="navbar navbar-expand navbar-dark bg-dark ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
