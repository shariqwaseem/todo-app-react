import React from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { MdRestoreFromTrash } from "react-icons/md";
import { IconContext } from "react-icons";

export default function TodoItem({
	todo,
	deleteTodo,
	undeleteTodo,
	completeTodo,
	uncompleteTodo,
}) {
	return (
		<IconContext.Provider
			value={{ style: { fontSize: "20px" } }}
		>
			<div className="todo-list-item">
				<button
					className="btn-icon btn-icon-check"
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

				<p
				className="todo-text"
					// style={{

					// 	flex: 1,
					// 	display: "flex",
					// 	alignSelf: "flex-start",
					// }}
				>
					{todo.text}
				</p>

				<button
					className="btn-icon btn-icon-delete"
					onClick={() => {
						if (!todo.deleted) {
							deleteTodo(todo.id);
						} else {
							undeleteTodo(todo.id);
						}
					}}
				>
					{todo.deleted ? <MdRestoreFromTrash /> : <AiFillDelete />}
				</button>
			</div>
		</IconContext.Provider>
	);
}
