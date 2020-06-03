const newProjectForm = (() => {
	const div = document.createElement('div'),
		  h2 = document.createElement('h2'),
		  input = document.createElement('input'),
		  button = document.createElement('button');

	div.id = 'newProject';
	h2.innerHTML = 'New Project';
	input.placeholder = 'Name of project';
	button.innerHTML = 'Create Project';

	div.append(h2, input, button);

	return div;
})();

const taskForm = (() => {
	const div = document.createElement('div'),
		  h2 = document.createElement('h2'),
		  taskInput = document.createElement('input'),
		  dateInput = document.createElement('input'),
		  textarea = document.createElement('textarea'),
		  priority_h3 = document.createElement('h3'),
		  	prioritySelect = document.createElement('select'),
		  		noPriority = document.createElement('option'),
		  		lowPriority = document.createElement('option'),
		  		highPriority = document.createElement('option'),
		  project_h3 = document.createElement('h3'),
		  	projectSelect = document.createElement('select'),
		  		inbox = document.createElement('option'),
		  button = document.createElement('button');

	div.id = 'create';
	h2.innerHTML = 'New Task';
	taskInput.placeholder = 'Task';
	dateInput.placeholder = 'Due date';
	textarea.placeholder = 'Add details here';
	priority_h3.innerHTML = 'Priority';
		noPriority.innerHTML = 'None';
		lowPriority.innerHTML = 'Low';
		highPriority.innerHTML = 'High';
	project_h3.innerHTML = 'Project';
		projectSelect.id = 'projectSelection';
	button.innerHTML = 'Create Task';

	prioritySelect.append(noPriority, lowPriority, highPriority);
	priority_h3.appendChild(prioritySelect);

	projectSelect.append(inbox);
	project_h3.appendChild(projectSelect);

	div.append(h2, taskInput, dateInput, textarea, priority_h3, project_h3, button);

	return div;
})();

const editForm = (() => {
	const div = document.createElement('div'),
		  h2 = document.createElement('h2'),
		  taskInput = document.createElement('input'),
		  dateInput = document.createElement('input'),
		  textarea = document.createElement('textarea'),
		  priority_h3 = document.createElement('h3'),
		  	prioritySelect = document.createElement('select'),
		  		noPriority = document.createElement('option'),
		  		lowPriority = document.createElement('option'),
		  		highPriority = document.createElement('option'),
		  project_h3 = document.createElement('h3'),
		  	projectSelect = document.createElement('select'),
		  		inbox = document.createElement('option'),
		  buttonSection = document.createElement('section'),
		  	button = document.createElement('button'),
		 	backButton = document.createElement('button');

	div.id = 'edit';
	h2.innerHTML = 'Edit Task';
	taskInput.placeholder = 'Task';
	dateInput.placeholder = 'Due date';
	textarea.placeholder = 'Add details here';
	priority_h3.innerHTML = 'Priority';
		noPriority.innerHTML = 'None';
		lowPriority.innerHTML = 'Low';
		highPriority.innerHTML = 'High';
	project_h3.innerHTML = 'Project';
		projectSelect.id = ('projectReselection');
	buttonSection.id = 'btn';
	button.innerHTML = 'Create Task';
	backButton.innerHTML = 'Cancel';

	prioritySelect.append(noPriority, lowPriority, highPriority);
	priority_h3.appendChild(prioritySelect);

	projectSelect.append(inbox);
	project_h3.appendChild(projectSelect);

	buttonSection.append(button, backButton);

	div.append(h2, taskInput, dateInput, textarea, priority_h3, project_h3, buttonSection);

	return div;
})();

export { newProjectForm, taskForm, editForm };