import React, { useEffect, useState } from "react";

export default function TodoInput({ addTodo }) {
	const [todoInput, setTodoInput] = useState("");
	useEffect(() => {
		// console.log("text", todoInput);
	}, [todoInput]);

	const submit = () => {
		console.log("submit called");
		addTodo(todoInput)
// 		setTodos((old) => [
// 
// 			...old,
// 			{ text: todoInput, completed: false, deleted: false },
// 		]);
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
