import { displayTasks, createTaskElement, createEditForm } from './taskElements.js';
import { task, project } from './factoryFunctions.js';

const todoList = (() => {
	const body = document.querySelector('body');

	displayTasks.forEach((element) => {
		body.appendChild(element);
	});

	const defaultProject = project();

	document.querySelector('#makeTask').addEventListener("click", () => {
		document.querySelector("#form").classList.toggle("noDisplay");
	});

	document.querySelector('.addTask').addEventListener("click", () => {
		let title = document.querySelector('input'),
			date = document.querySelectorAll('input')[1];

		if (!title.value) {
			title.value = undefined;
		}
		if (!date.value) {
			date.value = undefined;
		}

		const newTask = task(title.value, date.value);
		title.value = '';
		date.value = '';
		
		defaultProject.addTask(newTask);
		const newTaskDiv = createTaskElement(newTask);
		const newEditForm = createEditForm(newTask);
		newTaskDiv.appendChild(newEditForm);
		body.appendChild(newTaskDiv);

		newTaskDiv.childNodes[0].addEventListener('click', () => {
			newTaskDiv.childNodes[0].classList.toggle('completed');
		});

		newTaskDiv.childNodes[1].addEventListener('click', () => {
			body.removeChild(newTaskDiv);
			defaultProject.removeTask(newTask);
		});

		newTaskDiv.childNodes[2].addEventListener('click', () => {
			newEditForm.classList.toggle('noDisplay');
		});

		document.querySelector('.editTask').addEventListener('click', () => {
			newTask.title = newEditForm.childNodes[1].value;
			newTask.date = newEditForm.childNodes[2].value;

			newTaskDiv.childNodes[0].childNodes[0].innerHTML = newTask.title;
			newTaskDiv.childNodes[0].childNodes[1].innerHTML = newTask.date;

			newEditForm.childNodes[1].value = newTask.title;
			newEditForm.childNodes[2].value = newTask.date;

			newEditForm.classList.toggle('noDisplay');
		});

		// set event listener for edit button to toggle form display
		// 	with the current title and date of the task
		// lastly set an event listener for the edit form submit button
		//	so that the task and the task div update with the form info
	});
})();