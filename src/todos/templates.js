import { Dom } from '../DOM.js';
import { listItems, todos } from '../data.js';

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
			listItem.classList.add(Dom.classes.todosListItem);

			listItem.innerHTML = `
        <form class="edit-todo-form">
          <p class"title">${todoItem.title}</p>
          <input
            type="text"
            id="input"
            class="edit-todo-form__input hidden"
            name="input-${todoItem.id}"
          />
          <span class="icons">
            <button class="btn edit-btn-icon" type="button">
              ${Dom.icons.editIcon}
            </button>
            <button class="btn delete-btn-icon" type="button">
              ${Dom.icons.deleteIcon}
						</button>
					</span>
        </form>
			`;
			result.push(listItem);
		});
	}
	listItems.push(...result);
}
