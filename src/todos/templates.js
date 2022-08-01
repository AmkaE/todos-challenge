import { listItems, Dom } from '../main.js';

export function generateTodoItemsTemplate(todosArr) {
	let result = [];

	if (todosArr.length === 0) {
		Dom.elements.noTask.innerText = `no active task`;

		result.push(Dom.elements.noTask);
	} else {
		result.length = 0;
		listItems.length = 0;
		todosArr.forEach(todoItem => {
			const listItem = document.createElement('li');
			listItem.setAttribute('id', `id-${todoItem.id}`);

			listItem.innerHTML = `
      <li class="todos-listItem">
        <form class="edit-todo-form">
          <p>${todoItem.title}</p>
          <input
            type="text"
            id="input"
            class="edit-todo-form__input hidden"
            name="input-1"
          />
          <span>
            <span class="todos-listItem__edit-icon">
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="EditIcon"
                aria-label="fontSize small"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                ></path>
              </svg>
            </span>
            <span class="todos-listItem__delete-icon">
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="DeleteIcon"
                aria-label="fontSize small"
              >
                <path
                  d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                ></path>
              </svg>
						</span>
					</span>
        </form>
      </li>
			`;
			result.push(listItem);
		});
	}
	listItems.push(...result);
}
