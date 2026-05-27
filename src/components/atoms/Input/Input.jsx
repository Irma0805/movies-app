import './Input.css';

function Input({ label, type = 'text', placeholder, value, onChange }) {
  return (
    <div className="input-field">
      {label && <label className="input-field__label">{label}</label>}
      <input
        className="input-field__input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;