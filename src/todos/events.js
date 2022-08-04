import { Dom } from '../DOM.js';
import {
	createTodo,
	completeTodoItem,
	deleteTodoItem,
	editTodoItem,
	updateTodoItem,
} from './todosActions.js';

// listens for submit event when the user submits add todo form.
export function submitFormEvent() {
	Dom.elements.formElement.addEventListener('submit', e => {
		e.preventDefault();
		const input = Dom.elements.addTodoForm;
		createTodo(input.value);

		input.value = '';
	});
}

// adds events to the buttons(delete btn, and edit btn)
export function addBtnEvents() {
	Dom.elements.editTodoForms = document.querySelectorAll('.edit-todo-form');
	const editButtonIcons = document.querySelectorAll('.edit-btn-icon');
	const deleteButtonIcons = document.querySelectorAll('.delete-btn-icon');
	const titles = document.querySelectorAll('.title');

	// listens for click event on the todo items title
	titles.forEach((title, i) => {
		title.addEventListener('click', () => {
			// select the input that's inside the li form
			const editTodoInput = titles[i].nextElementSibling;

			// get the id from editTodoInput "name" attribute
			const id = +editTodoInput.name.slice(6);
			completeTodoItem(id);
		});
	});

	// listens for click event on the edit button
	editButtonIcons.forEach((editButtonIcon, i) => {
		editButtonIcon.addEventListener('click', e => {
			if (
				e.target.nodeName === 'BUTTON' ||
				e.target.nodeName === 'svg' ||
				e.target.nodeName === 'path'
			) {
				// select the input that's inside the li form
				const editTodoInput =
					editButtonIcons[i].parentElement.previousElementSibling;

				// get the id from editTodoInput "name" attribute
				const id = +editTodoInput.name.slice(6);

				editTodoItem(id);

				const editTodoForm = editButtonIcons[i].parentElement.parentElement;

				editTodoForm.addEventListener('submit', e => {
					e.preventDefault();
					editTodoInput.value;
					updateTodoItem(id, editTodoInput.value);
				});
			}
		});
	});

	// listens for click event on the delete button
	deleteButtonIcons.forEach((deleteButtonIcon, i) => {
		deleteButtonIcon.addEventListener('click', e => {
			if (
				e.target.nodeName === 'BUTTON' ||
				e.target.nodeName === 'svg' ||
				e.target.nodeName === 'path'
			) {
				// select the input that's inside the li form
				const listItem =
					deleteButtonIcons[i].parentElement.parentElement.parentElement;
				// get the id from editTodoInput "name" attribute
				const id = +listItem.id.slice(3);
				deleteTodoItem(id);
			}
		});
	});
}
