import './BottomNav.css';

function BottomNav({ activeTab }) {
  return (
    <nav className="bottom-nav">
      <div className={`bottom-nav__tab ${activeTab === 'home' ? 'bottom-nav__tab--active' : ''}`}>
        <i className="fa-solid fa-house"></i>
        <span>Home</span>
      </div>
      <div className={`bottom-nav__tab ${activeTab === 'explore' ? 'bottom-nav__tab--active' : ''}`}>
        <i className="fa-solid fa-compass"></i>
        <span>Explore</span>
      </div>
      <div className={`bottom-nav__tab ${activeTab === 'likes' ? 'bottom-nav__tab--active' : ''}`}>
        <i className="fa-regular fa-heart"></i>
        <span>Likes</span>
      </div>
      <div className={`bottom-nav__tab ${activeTab === 'profile' ? 'bottom-nav__tab--active' : ''}`}>
        <i className="fa-regular fa-user"></i>
        <span>Profile</span>
      </div>
    </nav>
  );
}

export default BottomNav;