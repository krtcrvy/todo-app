import { useState } from 'react';
import Todo from './components/Todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [todos, setTodos] = useState([]);

	const handleAddTodo = () => {
		setTodos((todos) => [
			...todos,
			{
				id: uuidv4(),
			},
		]);
	};

	const handleDeleteTodo = (id) => {
		setTodos(() => {
			return todos.filter((todo) => todo.id !== id);
		});
	};

	return (
		<main>
			<section>
				<div className="container-todo">
					<div>
						<h1 className="container-heading">TODOS</h1>
					</div>

					<div className="container-todos">
						{todos.map((todo) => {
							return (
								<Todo
									key={todo.id}
									id={todo.id}
									deleteTodo={handleDeleteTodo}
								/>
							);
						})}
					</div>

					<div className="container-add-button">
						<button className="button-add-todo" onClick={() => handleAddTodo()}>
							Add Todo
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
