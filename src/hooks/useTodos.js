import React, { useState, useEffect } from "react";

export default function useTodos() {
	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		setTodos((old) => [
			...old,
			{
				text: text,
				completed: false,
				deleted: false,
				id: Date.now().toString(),
			},
		]);
	};
	const deleteTodo = (id) => {
		setTodos((old) => {
			const index = old.findIndex((i) => i.id == id);
			if (index != -1) {
				let out = [...old];
				out[index].deleted = true;
				return out;
			}
		});
	};
	const editTodo = (id, text) => {
		setTodos((old) => {
			const index = old.findIndex((i) => i.id == id);
			if (index != -1) {
				let out = [...old];
				out[index].text = text;
				return out;
			}
		});
	};
	const undeleteTodo = (id) => {
		setTodos((old) => {
			const index = old.findIndex((i) => i.id == id);
			if (index != -1) {
				let out = [...old];
				out[index].deleted = false;
				return out;
			}
		});
	};
	const completeTodo = (id) => {
		setTodos((old) => {
			const index = old.findIndex((i) => i.id == id);
			if (index != -1) {
				let out = [...old];
				out[index].completed = true;
				return out;
			}
		});
	};
	const uncompleteTodo = (id) => {
		setTodos((old) => {
			const index = old.findIndex((i) => i.id == id);
			if (index != -1) {
				let out = [...old];
				out[index].completed = false;
				return out;
			}
		});
	};

	return {
		todos,
		addTodo,
		deleteTodo,
		editTodo,
		undeleteTodo,
		completeTodo,
		uncompleteTodo,
	};
}
