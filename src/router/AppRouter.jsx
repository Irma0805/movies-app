import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LikesPage from '../pages/LikesPage/LikesPage';
import LoginPage from '../pages/LoginPage/LoginPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/likes" element={<LikesPage />} />
        <Route path="/explore" element={<div>Explore — próximamente</div>} />
        <Route path="/profile" element={<div>Profile — próximamente</div>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
