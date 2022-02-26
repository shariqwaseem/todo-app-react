import React, { useState } from "react";

export default function EditableText({ todo, editTodo }) {
	const [editing, setEditing] = useState(false);
	const { id, text } = todo;
	const [newText, setNewText] = useState(text);
	return (
		<div className="todo-text">
			{editing ? (
				<input
					className="text-field-edit"
					value={newText}
					onChange={(e) => {
						setNewText(e.target.value);
					}}
					onKeyPress={(e) => {
						if (e.which === 13) {
							editTodo(id, newText);
							setEditing(false);
						}
					}}
				></input>
			) : (
				<p
					className={`${todo.completed ? "todo-completed" : ""} ${
						todo.deleted ? "todo-deleted" : ""
					}`}
					onClick={() => setEditing(true)}
				>
					{text}
				</p>
			)}
		</div>
	);
}
