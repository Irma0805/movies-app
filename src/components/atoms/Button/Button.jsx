import './Button.css';

function Button({ label, isActive }) {
  return (
    <button className={isActive ? 'button button--active' : 'button'}>
      {label}
    </button>
  );
}

export default Button;