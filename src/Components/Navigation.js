import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="pb-4">
      <nav className="navbar navbar-expand navbar-dark bg-dark ">
        <div className="container">
          {/* main */}
          <Link className="nav-link active me-1" aria-current="page" to="/">
            <FontAwesomeIcon
              icon={faBlog}
              type="button"
              className="text-white btn btn-lg border border-0"
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* home */}
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  <button
                    type="button"
                    className="btn btn-outline-light border border-0 fw-semibold"
                  >
                    Home
                  </button>
                </Link>
              </li>

              {/* blogs */}
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/blogs">
                  <button
                    type="button"
                    className="btn btn-outline-light border border-0 fw-semibold"
                  >
                    Blogs
                  </button>
                </Link>
              </li>

              {/* blogs_create */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/blogs/create"
                >
                  <button
                    type="button"
                    className="btn btn-outline-light border border-0 fw-semibold"
                  >
                    Create
                  </button>
                </Link>
              </li>

              {/* blogs_edit */}
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/blogs/edit">
                  <button
                    type="button"
                    className="btn btn-outline-light border border-0 fw-semibold"
                  >
                    Edit
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
