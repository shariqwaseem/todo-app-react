import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
export default function TodosDisplay({
	todos,
	deleteTodo,
	undeleteTodo,
	completeTodo,
	newTodoAdded,
	uncompleteTodo,
	editTodo,
}) {
	const filteredStates = {
		undone: 0,
		completed: 1,
		deleted: 2,
	};
	const [filter, setFilter] = useState(filteredStates.undone);

	const showUndone = () => {
		setFilter(filteredStates.undone);
	};
	const showCompleted = () => {
		setFilter(filteredStates.completed);
	};
	const showDeleted = () => {
		setFilter(filteredStates.deleted);
	};
	useEffect(() => {
		showUndone();
	}, [newTodoAdded]);
	const todosToDisplay = todos?.reduce((arr, item) => {
		if (filter != filteredStates.undone) {
			if (filter == filteredStates.deleted) {
				if (item.deleted) {
					return [...arr, item];
				} else {
					return arr;
				}
			} else if (filter == filteredStates.completed) {
				if (item.completed && !item.deleted) {
					return [...arr, item];
				} else {
					return arr;
				}
			}
		} else {
			if (!item.completed && !item.deleted) {
				return [...arr, item];
			} else {
				return arr;
			}
		}
	}, []);
	return (
		<div className="todo-display-container">
			<div className="filter-buttons-container">
				<button
					className={`btn ${
						filter == filteredStates.undone ? "selected" : ""
					}`}
					onClick={showUndone}
				>
					Todos
				</button>
				<button
					className={`btn ${
						filter == filteredStates.completed ? "selected" : ""
					}`}
					onClick={showCompleted}
				>
					Completed
				</button>
				<button
					className={`btn ${
						filter == filteredStates.deleted ? "selected" : ""
					}`}
					onClick={showDeleted}
				>
					Deleted
				</button>
			</div>
			{todosToDisplay.length == 0 && (
				<p className="nothing-text">Nothing to show here</p>
			)}
			{todosToDisplay.map((todo, index) => {
				return (
					<TodoItem
						key={index}
						{...{
							todo,
							deleteTodo,
							undeleteTodo,
							completeTodo,
							editTodo,
							uncompleteTodo,
						}}
					/>
				);
			})}
		</div>
	);
}
