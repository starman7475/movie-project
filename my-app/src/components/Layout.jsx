import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <>
      <div className="header">
        <ul className="navSite">
          <li class="home">
            <Link to="/" className="navSiteLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className="navSiteLink">
              Movies
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
