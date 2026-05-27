import './Button.css';

function Button({ label, isActive, type, variant }) {
  return (
    <button
      type={type}
      className={`button ${isActive ? 'button--active' : ''} ${variant ? `button--${variant}` : ''}`}
    >
      {label}
    </button>
  );
}

export default Button;