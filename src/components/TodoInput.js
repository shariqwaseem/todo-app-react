import React, { useEffect, useState } from "react";

export default function TodoInput({ addTodo }) {
	const [todoInput, setTodoInput] = useState("");
	const submit = () => {
		addTodo(todoInput)
	};
	return (
		<div>
			<input
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
