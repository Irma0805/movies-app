import { NavLink } from 'react-router-dom';
import './BottomNav.css';

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `bottom-nav__tab ${isActive ? 'bottom-nav__tab--active' : ''}`}>
        <i className="fa-solid fa-house"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/explore" className={({ isActive }) => `bottom-nav__tab ${isActive ? 'bottom-nav__tab--active' : ''}`}>
        <i className="fa-solid fa-compass"></i>
        <span>Explore</span>
      </NavLink>
      <NavLink to="/likes" className={({ isActive }) => `bottom-nav__tab ${isActive ? 'bottom-nav__tab--active' : ''}`}>
        <i className="fa-regular fa-heart"></i>
        <span>Likes</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `bottom-nav__tab ${isActive ? 'bottom-nav__tab--active' : ''}`}>
        <i className="fa-regular fa-user"></i>
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;