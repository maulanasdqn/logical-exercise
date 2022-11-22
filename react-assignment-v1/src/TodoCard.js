function TodoCard({ className, onClick, title, status }) {
  return (
    <div onClick={onClick} className={className}>
      <h2>{title}</h2>
      <p>{status}</p>
    </div>
  );
}

export default TodoCard;
