import { Dom } from '../DOM.js';
import { generateTodoItemsTemplate } from './templates.js';
import { todos } from '../data.js';
import { getTodos } from './apis/todosApiCalls.js';
import { addEditEvent } from './events.js';

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
			Dom.elements.listItemsContainer.textContent = '';
			generateTodoItemsTemplate(todos);

			listItemsArr.forEach(listItem => {
				renderToDom(Dom.elements.listItemsContainer, listItem);
			});
			addEditEvent();
		});
}
