import newProjectForm from './newProjectForm.js';
import taskForm from './taskForm.js';
import { navbar, menuToggle, addProjectToNavbar } from './navbar.js';
import { taskContainer, appendTask } from './tasks.js';
import taskBtn from './taskBtn.js';
import { Project, Task } from './factoryFunctions.js';

const todoApp = (() => {
	const body = document.querySelector('body'),
		  main = document.createElement('div');
		  	main.id = 'main';
	const projectArr = [ Project('Index') ];

	// *** delete ***
	const task1 = Task('Example 1');
		task1.date = '05/29/20';
		task1.description = 'This is a sample description to test the appendTask function';
	const task2 = Task('Example 2');
		task2.description = 'This is a sample description to test the appendTask function';
	const task3 = Task('Example 3');
		task3.date = '05/29/20';

	// to test appendTask() and DOM manipulation
	appendTask(task1);
	appendTask(task2);
	appendTask(task3);

	// event listeners (bulk of the logic)
	navbar.querySelector('button').addEventListener('click', () => {
		if (body.querySelector('#newProject')) {
			newProjectForm.remove();
		} else {
			body.appendChild(newProjectForm);
		}
	});

	newProjectForm.querySelector('button').addEventListener('click', () => {
		const input = newProjectForm.querySelector('input');

		if (input.value) {
			// create new project and add to nav bar
			projectArr.push(Project(input.value));
			addProjectToNavbar(projectArr[projectArr.length - 1]);
			// add project as option for task form
			const option = document.createElement('option');
			option.innerHTML = input.value;
			taskForm.querySelector('#projectSelection').appendChild(option);
			// reset project form
			input.value = '';
			newProjectForm.remove();
		}
	});

	menuToggle.addEventListener('click', () => {
		navbar.classList.toggle('hide');
	});

	taskBtn.querySelector('button').addEventListener('click', () => {
		if (body.querySelector('#form')) {
			taskForm.remove();
		} else {
			body.appendChild(taskForm);
		}
	});

	main.append(navbar, menuToggle, taskContainer, taskBtn);
	body.appendChild(main);

})();