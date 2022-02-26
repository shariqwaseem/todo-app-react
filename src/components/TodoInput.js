import React, { useEffect, useState } from "react";

export default function TodoInput({ addTodo, setNewTodoAdded }) {
	const [todoInput, setTodoInput] = useState("");
	const submit = () => {
		if (todoInput.trim() != "") {
			addTodo(todoInput.trim());
		}
		setTodoInput("");
		setNewTodoAdded(old=>!old)
	};
	return (
		<div className="input-and-submit">
			<input
			placeholder="Enter a todo..."
			className="text-field"
				value={todoInput}
				onChange={(e) => {
					setTodoInput(e.target.value);
				}}
				onKeyPress={(e) => {
					if (e.which === 13) {
						submit();
					}
				}}
			></input>
			<button 
			className="btn-submit"
			onClick={submit}>Submit</button>
		</div>
	);
}
