import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodosDisplay from "./TodosDisplay";
import useTodos from "../hooks/useTodos";
export default function TodoList() {
	const {
		todos,
		addTodo,
		deleteTodo,
		undeleteTodo,
		completeTodo,
		uncompleteTodo,
		editTodo,
	} = useTodos();
	const [newTodoAdded, setNewTodoAdded] = useState(false)
	return (
		<div className="todo-list-container">
			<p className="heading-text">Todos</p>
			<TodoInput {...{ addTodo, setNewTodoAdded }} />
			<TodosDisplay
				{...{
					todos,
					newTodoAdded,
					deleteTodo,
					editTodo,
					undeleteTodo,
					completeTodo,
					uncompleteTodo,
				}}
			/>
		</div>
	);
}
