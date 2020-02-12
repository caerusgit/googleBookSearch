import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        React Google Books Search
      </a>



      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
            </li>
            <li class="nav-item">
              <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
            </li>
        </ul>
    </div>



    </nav>
  );
}

export default Nav;
