import { Dom } from '../main.js';

export function submitFormEvent(createTodo) {
	Dom.elements.formElement.addEventListener('submit', e => {
		e.preventDefault();
		const input = Dom.elements.addTodoForm;
		createTodo(input.value);

		input.value = '';
	});
}

// not done yet
export function addEditEvent() {
	document.querySelectorAll('.todos-listItem__edit-icon').forEach(editIcon => {
		editIcon.addEventListener('click', e => {
			console.dir(e.target);
			if (
				e.target.nodeName === 'svg' ||
				e.target.nodeName === 'SPAN' ||
				e.target.nodeName === 'path'
			) {
				document
					.querySelector('input[name="input-2"]')
					.classList.toggle('hidden');
				document.querySelector('input[name="input-2"]').previousSibling;
				document
					.querySelector('input[name="input-2"]')
					.previousElementSibling.classList.toggle('hidden');
				console.log(document.querySelector('input[name="input-2"]'));
				console.log(
					document.querySelector('input[name="input-2"]')
						.previousElementSibling,
				);
			}
		});
	});
}
