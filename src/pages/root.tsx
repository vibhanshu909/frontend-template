import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/auth/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/product/create">Create Product</Link>
          </li>
          <li>
            <Link to="/auth/logout">Logout</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>@copy; {new Date().getFullYear()}</footer>
    </div>
  );
}
