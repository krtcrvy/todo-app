const Todo = ({ id, deleteTodo }) => {
	return (
		<div className="todo">
			<input type="text" className="input-todo" />
			<button className="button-actions" onClick={() => deleteTodo(id)}>
				Delete
			</button>
		</div>
	);
};

export default Todo;
