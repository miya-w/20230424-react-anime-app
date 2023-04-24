import { NavLink, Outlet } from "react-router-dom";

export default function AccountLayout() {
  return (
    <div className="help-layout">
      <div className="title">
        <h2>Member Sign in / Log in</h2>
      </div>
      <nav className="account-nav">
        <NavLink to="login">Lon In</NavLink>
        <NavLink to="signup">Sign Up</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
