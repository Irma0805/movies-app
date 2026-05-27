import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/organisms/Header/Header';
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import { texts } from '../../config/texts';
import { useMovies } from '../../hooks/useMovies';
import { getPopularMovies } from '../../services/tmdb';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, app } = texts;
  const { movies } = useMovies(getPopularMovies);
  const backdrop = movies[6]?.backdrop;


  function handleLogin(e) {
    e.preventDefault();
    navigate('/home');
  }

  return (
    <div className="login-page">
      <Header />
      <main className="login-page__content">
        <section className="login-page__welcome">
          <h2 className="login-page__title">{login.title}</h2>
          <p className="login-page__subtitle">{login.subtitle}</p>
        </section>

        <div className="login-page__hero">
          {backdrop && (
            <img
              src={backdrop}
              alt="Cinema backdrop"
              className="login-page__hero-img"
            />
          )}
        </div>

        <form className="login-page__form" onSubmit={handleLogin}>
          <Input
            label={login.emailLabel}
            type="email"
            placeholder={login.emailPlaceholder}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            label={login.passwordLabel}
            type="password"
            placeholder={login.passwordPlaceholder}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <p className="login-page__forgot">{login.forgotPassword}</p>
          <Button label={login.loginButton} type="submit" variant="primary" />
          <p className="login-page__skip" onClick={() => navigate('/home')}>
            {login.skipLogin}
          </p>
        </form>

        <div className="login-page__divider">
          <span>{login.orContinueWith}</span>
        </div>

        <div className="login-page__social">
          <Button label={login.google} variant="outline" />
          <Button label={login.apple} variant="outline" />
        </div>

        <div className="login-page__register">
          <p>{login.noAccount}</p>
          <span className="login-page__register-link">{login.registerNow}</span>
        </div>

        <footer className="login-page__footer">
          <p>{login.legal}</p>
        </footer>
      </main>
    </div>
  );
}

export default LoginPage;