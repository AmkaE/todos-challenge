import { listItems } from './data.js';
import { submitFormEvent } from './todos/events.js';
import { renderTodoListItems } from './todos/renders.js';

function init() {
	renderTodoListItems(listItems);
	submitFormEvent();
}

init();
