function Button({ children, size, color, onClick }) {
  return (
    <button className={`btn btn-${size} btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
