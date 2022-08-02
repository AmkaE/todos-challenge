import { Dom } from './DOM.js';
import { listItems, todos } from './data.js';
import { getTodos, addTodo, deleteTodo } from './todos/apis/todosApiCalls.js';
import { generateTodoItemsTemplate } from './todos/templates.js';
import { submitFormEvent, addEditEvent } from './todos/events.js';

export function renderToDom(parentElement, childElement) {
	parentElement.append(childElement);
}

export async function renderTodoListItems(listItemsArr) {
	getTodos()
		.then(data => {
			todos.length = 0;
			todos.push(...data);
		})
		.then(() => {
			generateTodoItemsTemplate(todos);

			listItemsArr.forEach(listItem => {
				renderToDom(Dom.elements.listItemsContainer, listItem);
			});
			addEditEvent();
		});
}

export function reRenderTodoListItems() {
	Dom.elements.listItemsContainer.textContent = '';
	generateTodoItemsTemplate(todos);

	listItems.forEach(listItem => {
		renderToDom(Dom.elements.listItemsContainer, listItem);
	});
	addEditEvent();
}

export function createTodo(title) {
	addTodo({
		title,
		completed: false,
	});
}

function init() {
	renderTodoListItems(listItems);

	submitFormEvent();
}

init();

// const todos = []
