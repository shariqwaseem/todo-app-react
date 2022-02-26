import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
export default function TodosDisplay({
	todos,
	deleteTodo,
	undeleteTodo,
	completeTodo,
	uncompleteTodo,
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
	return (
		<div>
			<button onClick={showUndone}>Todos</button>
			<button onClick={showCompleted}>Completed</button>
			<button onClick={showDeleted}>Deleted</button>

			{todos
				?.reduce((arr, item) => {
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
				}, [])
				.map((todo, index) => {
					return (
						<TodoItem
							key={index}
							{...{
								todo,
								deleteTodo,
								undeleteTodo,
								completeTodo,
								uncompleteTodo,
							}}
						/>
					);
				})}
		</div>
	);
}
