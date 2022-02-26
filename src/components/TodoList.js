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
	} = useTodos();

	return (
		<div className="todo-list-container">
			<p>Todolist</p>
			<TodoInput {...{ addTodo }} />
			<TodosDisplay
				{...{
					todos,
					deleteTodo,
					undeleteTodo,
					completeTodo,
					uncompleteTodo,
				}}
			/>
		</div>
	);
}
