import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>This might be a header for my website</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/person">Person</Link>
          </li>
          <li>
            <Link to="/person/insert">Create Person</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;