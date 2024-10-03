import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header className="page-header">
        <NavLink to="/">Home</NavLink>
        <br></br>
        <NavLink to="/beers">Galerie</NavLink> 
        
      </header>
      <Outlet />
    </div>
  );
}