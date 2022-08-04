import { Dom } from '../DOM.js';
import { listItems, completedListItems } from '../data.js';

// genereate a list item(s) based on the length of completed todos array
export function generateTodoItemsTemplate(todosArr) {
	// this array will hold the generate list item(s) if
	// the completed todos array is not empty but if its empty
	// it will hold the a paragraph element
	let result = [];
	result.length = 0;

	if (todosArr.length <= 0) {
		result.length = 0;
		Dom.elements.noTask.innerText = `no active task`;
		Dom.elements.noTask.classList.add('no-active-task');

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
          <p class="title ${todoItem.isEditing ? 'hidden' : ''} ${
				todoItem.completed ? 'line-through' : ''
			}">
						${todoItem.title}
					</p>
          <input
            type="text"
            id="input"
            class="edit-todo-form__input  
						${todoItem.isEditing ? '' : 'hidden'}"
            name="input-${todoItem.id}"
						value="${todoItem.title}"
          />
          <span class="icons">
            <button class="btn edit-btn-icon" type="${
							todoItem.isEditing ? 'submit' : 'button'
						}">
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
	// this will push the result into the list items array
	// whether it contains the paragraph or generated list item(s)
	listItems.push(...result);
}

//  generate a list item(s) based on the length of uncompleted todos array
export function generateCompletedTodoItemsTemplate(completedTodosArr) {
	completedListItems.length = 0;
	completedTodosArr.forEach(completedTodoItem => {
		const completedListItem = document.createElement('li');
		completedListItem.setAttribute('id', `id-${completedTodoItem.id}`);
		completedListItem.classList.add(Dom.classes.todosListItem);

		completedListItem.innerHTML = `
        <div class="completed-todo-item">
          <p class="title ${completedTodoItem.isEditing ? 'hidden' : ''} ${
			completedTodoItem.completed ? 'line-through' : ''
		}">
						${completedTodoItem.title}
					</p>
          <span class="icons">
            <button class="btn delete-btn-icon" type="button">
              ${Dom.icons.deleteIcon}
						</button>
					</span>
        </div>
			`;
		completedListItems.push(completedListItem);
	});
}
