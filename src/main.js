import { generateTodoItemsTemplate } from './todos/templates.js';
import { getTodos, addTodo } from './todos/apis/todosApiCalls.js';
import { submitFormEvent, addEditEvent } from './todos/events.js';

const todos = [];

async function setTodos(arr) {
	const allTodos = await getTodos();
	arr.push(...allTodos);
}

export const listItems = [];

export const Dom = {
	elements: {
		formElement: document.querySelector('.add-todo-form'),
		listItemsContainer: document.querySelector('.todos-list'),
		addTodoForm: document.querySelector('.add-todo-form__input'),
		noTask: document.createElement('p'),
	},
	classes: {},
	names: {},
	color: {
		tan: '#e6e2d3',
		trafficWhite: '#f0f0f0',
		yellowGreen: '#4caf50',
		vermillionRed: '#c94c4c',
		blue: '#008cba',
	},
	icons: {
		editIcon: `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>`,
		deletIcon: `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`,
		arrowLeftIcon: `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIcon" aria-label="fontSize small"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>`,
		arrowRightIcon: `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon" aria-label="fontSize small"><path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>`,
	},
};

function renderToDom(parentElement, childElement) {
	parentElement.append(childElement);
}

function renderTodoListItems(listItemsArr) {
	generateTodoItemsTemplate(todos);

	listItemsArr.forEach(listItem => {
		renderToDom(Dom.elements.listItemsContainer, listItem);
	});
}

function reRenderTodoListItems() {
	Dom.elements.listItemsContainer.textContent = '';
	renderTodoListItems(listItems);
	addEditEvent();
}

function createTodo(text) {
	addTodo({
		text,
		completed: false,
	});
}

function init() {
	// having issues setting todos since its asychronous
	setTodos(todos);
	submitFormEvent(createTodo);

	renderTodoListItems(listItems);
	console.log(listItems);
}

init();
