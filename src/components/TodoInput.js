import React, { useEffect, useState } from "react";

export default function TodoInput({ addTodo }) {
	const [todoInput, setTodoInput] = useState("");
	const submit = () => {
		if (todoInput.trim() != "") {
			addTodo(todoInput.trim());
		}
		setTodoInput("");
	};
	return (
		<div className="input-and-submit">
			<input
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
			<button onClick={submit}>Submit</button>
		</div>
	);
}
