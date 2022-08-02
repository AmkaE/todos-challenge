import { Dom } from '../DOM.js';
import { todos, listItems } from '../data.js';
import {
	reRenderTodoListItems,
	renderTodoListItems,
	createTodo,
	renderToDom,
} from '../main.js';
import {
	getTodos,
	deleteTodo,
	completeTodo,
	updateTodo,
} from './apis/todosApiCalls.js';

export function submitFormEvent() {
	Dom.elements.formElement.addEventListener('submit', e => {
		e.preventDefault();
		const input = Dom.elements.addTodoForm;
		createTodo(input.value);

		reRenderTodoListItems();

		input.value = '';
	});
}

// not done yet
export function addEditEvent() {
	document.querySelectorAll('.todos-listItem__edit-icon').forEach(editIcon => {
		editIcon.addEventListener('click', e => {
			// e.preventDefault();
			//
		});
	});

	Dom.elements.editTodoForms = document.querySelectorAll('.edit-todo-form');
	const editButtonIcons = document.querySelectorAll('.edit-btn-icon');
	const deleteButtonIcons = document.querySelectorAll('.delete-btn-icon');
	//

	// Dom.elements.editTodoForms.forEach((editTodoForms, i) => {})
	// editTodoForms.addEventListener('submit', e => {});

	editButtonIcons.forEach((editButtonIcon, i) => {
		editButtonIcon.addEventListener('click', e => {
			if (
				e.target.nodeName === 'BUTTON' ||
				e.target.nodeName === 'svg' ||
				e.target.nodeName === 'path'
			) {
				const titleElement =
					editButtonIcons[i].parentElement.previousElementSibling
						.previousElementSibling;
				const titleText =
					editButtonIcons[i].parentElement.previousElementSibling
						.previousElementSibling.innerText;
				const editTodoInput =
					editButtonIcons[i].parentElement.previousElementSibling;

				const id = +editTodoInput.name.slice(6);
				completeTodo(id);
			}
		});
	});

	deleteButtonIcons.forEach((deleteButtonIcon, i) => {
		deleteButtonIcon.addEventListener('click', e => {
			if (
				e.target.nodeName === 'BUTTON' ||
				e.target.nodeName === 'svg' ||
				e.target.nodeName === 'path'
			) {
				const editTodoInput =
					deleteButtonIcons[i].parentElement.previousElementSibling;
				const id = +editTodoInput.name.slice(6);

				deleteTodo(id);
			}
		});
	});
}
