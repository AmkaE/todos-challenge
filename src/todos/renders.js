import { Dom } from '../DOM.js';
import {
	generateTodoItemsTemplate,
	generateCompletedTodoItemsTemplate,
} from './templates.js';
import { todos, completedTodos, listItems } from '../data.js';
import { getTodos } from './apis/todosApiCalls.js';
import { addBtnEvents } from './events.js';

export function renderToDom(parentElement, childElement) {
	parentElement.append(childElement);
}

export async function renderTodoListItems(listItemsArr, completedistItemsArr) {
	getTodos()
		.then(todosData => {
			completedTodos.length = 0;
			todos.length = 0;
			listItems.length = 0;

			todos.push(...todosData.filter(todoData => todoData.completed === false));
			completedTodos.push(
				...todosData.filter(todoData => todoData.completed === true),
			);
		})
		.then(() => {
			Dom.elements.listItemsContainer.textContent = '';
			Dom.elements.completedListItemsContainer.textContent = '';
			generateTodoItemsTemplate(todos);
			generateCompletedTodoItemsTemplate(completedTodos);

			listItemsArr.forEach(listItem => {
				renderToDom(Dom.elements.listItemsContainer, listItem);
			});

			completedistItemsArr.forEach(completedListItem => {
				renderToDom(
					Dom.elements.completedListItemsContainer,
					completedListItem,
				);
			});
			addBtnEvents();
		});
}
