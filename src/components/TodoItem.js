import React from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { MdRestoreFromTrash } from "react-icons/md";
export default function TodoItem({
	todo,
	deleteTodo,
	undeleteTodo,
	completeTodo,
	uncompleteTodo,
}) {
	return (
		<div>
			<button
				onClick={() => {
					if (!todo.completed) {
						completeTodo(todo.id);
					} else {
						uncompleteTodo(todo.id);
					}
				}}
			>
				{!todo.completed ? (
					<ImCheckboxUnchecked />
				) : (
					<ImCheckboxChecked />
				)}
			</button>

			<button
				onClick={() => {
					if (!todo.deleted) {
						deleteTodo(todo.id);
					} else {
						undeleteTodo(todo.id);
					}
				}}
			>
				{ todo.deleted ? (
					<MdRestoreFromTrash />
				) : (
					<AiFillDelete />
				)}
			</button>
			<p>{todo.text}</p>

		</div>
	);
}
