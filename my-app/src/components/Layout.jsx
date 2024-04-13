import { Link, Outlet } from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <>
      <div className="header">
        <ul className="navSite">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </>
  );
};
export default Layout;
