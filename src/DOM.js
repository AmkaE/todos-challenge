// related to DOM - selecting or creating elements
export const Dom = {
	elements: {
		formElement: document.querySelector('.add-todo-form'),
		listItemsContainer: document.querySelector('.todos-list'),
		addTodoForm: document.querySelector('.add-todo-form__input'),
		noTask: document.createElement('p'),
		completedListItemsContainer: document.querySelector(
			'.completed-todos-list',
		),
	},
	classes: {
		todosListItem: 'todos-listItem',
	},
	color: {
		tan: '#e6e2d3',
		trafficWhite: '#f0f0f0',
		yellowGreen: '#4caf50',
		vermillionRed: '#c94c4c',
		blue: '#008cba',
	},
	icons: {
		editIcon: `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>`,
		deleteIcon: `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`,
	},
};
