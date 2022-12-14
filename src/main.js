import { listItems, completedListItems } from './data.js';
import { submitFormEvent } from './todos/events.js';
import { renderTodoListItems } from './todos/renders.js';

// start up function
function init() {
	renderTodoListItems(listItems, completedListItems);
	submitFormEvent();
}

init();
