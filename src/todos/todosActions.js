import { addTodo, completeTodo, deleteTodo } from './apis/todosApiCalls.js';
import { renderTodoListItems } from './renders.js';
import { listItems } from '../data.js';

export const createTodo = title => {
	addTodo({
		title,
		completed: false,
	}).then(() => {
		renderTodoListItems(listItems);
	});
};

export const deleteTodoItem = id => {
	deleteTodo(id).then(() => {
		renderTodoListItems(listItems);
	});
};

export const completeTodoItem = id => {
	completeTodo(id).then(() => {
		renderTodoListItems(listItems);
	});
};
