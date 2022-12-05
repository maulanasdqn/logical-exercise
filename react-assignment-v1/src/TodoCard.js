function TodoCard({ onClick, children }) {
  return (
    <>
      <div onClick={onClick} className="todo-card">
        {children}
      </div>
    </>
  );
}

export default TodoCard;
