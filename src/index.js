import { displayTaskList, createTaskElement, createEditForm } from './taskElements.js';
import { task, project } from './factoryFunctions.js';

const todoList = (() => {
	const body = document.querySelector('body');

	displayTaskList.forEach((element) => {
		body.appendChild(element);
	});

	const defaultProject = project();

	document.querySelector('#makeTask').addEventListener("click", () => {
		document.querySelector("#form").classList.toggle("noDisplay");
	});

	document.querySelector('.addTask').addEventListener("click", () => {
		let title = document.querySelector('input'),
			date = document.querySelectorAll('input')[1],
			description = document.querySelector('textarea'),
			priority = document.querySelector('select');

		if (!title.value) {
			title.value = undefined;
		}
		if (!date.value) {
			date.value = undefined;
		}
		if (!description.value) {
			description.value = undefined;
		}

		const newTask = task(title.value, date.value, description.value, priority.value);
		title.value = '';
		date.value = '';
		description.value = '';
		priority.value = 'None';
		
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

		newEditForm.childNodes[5].addEventListener('click', () => {

			newTask.title = newEditForm.childNodes[1].value;
			newTask.date = newEditForm.childNodes[2].value;
			newTask.description = newEditForm.childNodes[3].value;
			newTask.priority = newEditForm.querySelector('select').value;
			console.log(newTask.priority);

			newTaskDiv.childNodes[0].childNodes[0].innerHTML = newTask.title;
			newTaskDiv.childNodes[0].childNodes[1].innerHTML = newTask.date;
			newTaskDiv.childNodes[0].childNodes[2].innerHTML = newTask.description;
			newTaskDiv.childNodes[0].childNodes[3].innerHTML = `Priority: ${newTask.priority}`;

			newEditForm.childNodes[1].value = newTask.title;
			newEditForm.childNodes[2].value = newTask.date;
			newEditForm.childNodes[3].value = newTask.description;
			newEditForm.querySelector('select').value = newTask.priority;

			newEditForm.classList.toggle('noDisplay');
		});

		// set event listener for edit button to toggle form display
		// 	with the current title and date of the task
		// lastly set an event listener for the edit form submit button
		//	so that the task and the task div update with the form info
	});
})();