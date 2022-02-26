import React from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { MdRestoreFromTrash } from "react-icons/md";
import { IconContext } from "react-icons";
import EditableText from "./EditableText";
export default function TodoItem({
	todo,
	deleteTodo,
	undeleteTodo,
	completeTodo,
	uncompleteTodo,
	editTodo,
}) {
	return (
		<IconContext.Provider value={{ style: { fontSize: "20px" } }}>
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

				<EditableText
				{...{todo, editTodo}}
				/>

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
