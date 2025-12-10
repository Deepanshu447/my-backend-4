export default function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}
