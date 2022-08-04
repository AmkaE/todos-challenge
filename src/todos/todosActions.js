import {
	addTodo,
	completeTodo,
	deleteTodo,
	editTodo,
	updateTodo,
} from './apis/todosApiCalls.js';
import { renderTodoListItems } from './renders.js';
import { listItems, completedListItems } from '../data.js';

export const createTodo = title => {
	addTodo({
		title,
		completed: false,
		isEditing: false,
	}).then(() => {
		renderTodoListItems(listItems, completedListItems);
	});
};

export const deleteTodoItem = id => {
	deleteTodo(id).then(() => {
		renderTodoListItems(listItems, completedListItems);
	});
};

export const completeTodoItem = id => {
	completeTodo(id).then(() => {
		renderTodoListItems(listItems, completedListItems);
	});
};

export const editTodoItem = id => {
	editTodo(id).then(() => {
		renderTodoListItems(listItems, completedListItems);
	});
};
export const updateTodoItem = (id, updateTitle) => {
	updateTodo(id, updateTitle).then(() => {
		renderTodoListItems(listItems, completedListItems);
	});
};
