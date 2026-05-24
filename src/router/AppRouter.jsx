import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LikesPage from '../pages/LikesPage/LikesPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/likes" element={<LikesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;