import newProjectForm from './newProjectForm.js';
import taskForm from './taskForm.js';
import { navbar, menuToggle } from './navbar.js';
import { taskContainer, appendTask } from './tasks.js';
import taskBtn from './taskBtn.js';

const todoApp = (() => {
	const body = document.querySelector('body'),
		  main = document.createElement('div'),
		  // *** delete ***
		  task1 = {
		  	title: 'Example 1',
		  	date: '05/29/20',
		  	description: 'This is a sample description to test the appendTask function',
		  	priority: 'none'
		  },
		  task2 = {
		  	title: 'Example 2',
		  	date: '',
		  	description: 'This is a sample description to test the appendTask function',
		  	priority: 'none'
		  },
		  task3 = {
		  	title: 'Example 3',
		  	date: '05/29/20',
		  	description: '',
		  	priority: 'none'
		  };

	main.id = 'main';

	// to test appendTask() and DOM manipulation
	appendTask(task1);
	appendTask(task2);
	appendTask(task3);

	main.append(navbar, menuToggle, taskContainer, taskBtn);
	body.appendChild(main);

})();