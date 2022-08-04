import {
	addTodo,
	completeTodo,
	deleteTodo,
	editTodo,
	updateTodo,
} from './apis/todosApiCalls.js';
import { renderTodoListItems } from './renders.js';
import { listItems, completedListItems } from '../data.js';

// creates todo item and renders the page
export const createTodo = title => {
	addTodo({
		title,
		completed: false,
		isEditing: false,
	}).then(() => {
		renderTodoListItems(listItems, completedListItems);
	});
};

// deletes todo item and renders the page
export const deleteTodoItem = id => {
	deleteTodo(id).then(() => {
		renderTodoListItems(listItems, completedListItems);
	});
};

// changes completed on the specified todo item to true and renders the page
export const completeTodoItem = id => {
	completeTodo(id).then(() => {
		renderTodoListItems(listItems, completedListItems);
	});
};

// changes isEditing on the specified todo item to true and renders the page
export const editTodoItem = id => {
	editTodo(id).then(() => {
		renderTodoListItems(listItems, completedListItems);
	});
};

// updates todo item and renders the page
export const updateTodoItem = (id, updateTitle) => {
	updateTodo(id, updateTitle).then(() => {
		renderTodoListItems(listItems, completedListItems);
	});
};
