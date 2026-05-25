
import Header from '../../organisms/Header/Header';
import BottomNav from '../../organisms/BottomNav/BottomNav';
import './PageLayout.css';

function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <Header />
      <main className="page-layout__content">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}

export default PageLayout;