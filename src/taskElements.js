const createTaskElement = task => {
	const taskDiv = document.createElement('div'),
		  taskInfoDiv = document.createElement('div'),
		  title = document.createElement('h3'),
		  dueDate = document.createElement('h4'),
		  desc = document.createElement('p'),
		  priority = document.createElement('h4'),
		  removeBtn = document.createElement('button'),
		  editBtn = document.createElement('button');
		  
	title.innerHTML = task.title;
	dueDate.innerHTML = task.date;
	desc.innerHTML = task.description;
	priority.innerHTML = task.priority;
	removeBtn.innerHTML = 'Remove';
	removeBtn.classList.add('remove'); // ***
	editBtn.innerHTML = 'Edit';
	editBtn.classList.add('edit');	// ***

	taskInfoDiv.append(title, dueDate, desc, priority);
	taskDiv.append(taskInfoDiv, removeBtn, editBtn);

	return taskDiv;
}

const createEditForm = task => {
	const editForm = document.createElement('div'),
		  editForm_h3 = document.createElement('h3'),
		  editForm_title = document.createElement('input'),
		  editForm_date = document.createElement('input'),
		  editForm_desc = document.createElement('textarea'),
		  editForm_priorityLabel = document.createElement('h4'),
		  editForm_priority = document.createElement('select'),
		  	noPriority = document.createElement('option'),
		  	lowPriority = document.createElement('option'),
		  	highPriority = document.createElement('option'),
		  editForm_submit = document.createElement('button');

	editForm.id = 'edit';
	editForm.classList.add('noDisplay');
	editForm_h3.innerHTML = 'Edit Task';
	editForm_title.value = task.title;
	editForm_title.placeholder = "Title";	// ***
	editForm_date.value = task.date;
	editForm_date.placeholder = "Due date";
	editForm_desc.value = task.desc;
	editForm_desc.placeholder = "Add notes here";

	editForm_priorityLabel.innerHTML = 'Priority';
		noPriority.innerHTML = 'None';
		lowPriority.innerHTML = 'Low';
		highPriority.innerHTML = 'High';
	editForm_priority.value = task.priority;
	editForm_priority.append(noPriority, lowPriority, highPriority);
	editForm_priorityLabel.appendChild(editForm_priority);

	editForm_submit.innerHTML = 'Edit Task';
	editForm_submit.classList.add('editTask');

	editForm.append(editForm_h3, editForm_title, editForm_date, editForm_desc, editForm_priorityLabel, editForm_submit);

	return editForm;
}

const displayTaskList = (() => {
	const h1 = document.createElement('h1'),
		  createDiv = document.createElement('div'),
		  createTaskBtn = document.createElement('button'),
		  taskForm = document.createElement('div'),
		  taskForm_h3 = document.createElement('h3'),
		  taskForm_title = document.createElement('input'),
		  taskForm_date = document.createElement('input'),
		  taskForm_desc = document.createElement('textarea'),
		  taskForm_priorityLabel = document.createElement('h4'),
		  taskForm_priority = document.createElement('select'),
		  	noPriority = document.createElement('option'),
		  	lowPriority = document.createElement('option'),
		  	highPriority = document.createElement('option'),
		  taskForm_submit = document.createElement('button');

	h1.innerHTML = 'What are you doing today?';
	createDiv.id = 'create';	// ***rename here and in CSS
	createTaskBtn.id = 'makeTask'	// ***
	createTaskBtn.innerHTML = 'Set a task';

	createDiv.appendChild(createTaskBtn);

	taskForm.id = 'form';
	taskForm.classList.add('noDisplay');
	taskForm_h3.innerHTML = 'New Task';
	taskForm_title.placeholder = 'Title';
	taskForm_date.placeholder = 'Due date';
	taskForm_desc.placeholder = 'Add notes here';

	taskForm_priorityLabel.innerHTML = 'Priority';
		noPriority.innerHTML = 'None';
		lowPriority.innerHTML = 'Low';
		highPriority.innerHTML = 'High';
	taskForm_priority.append(noPriority, lowPriority, highPriority);
	taskForm_priorityLabel.appendChild(taskForm_priority);

	taskForm_submit.innerHTML = 'Add Task';
	taskForm_submit.classList.add('addTask');  // ***

	taskForm.append(taskForm_h3, taskForm_title, taskForm_date, taskForm_desc, taskForm_priorityLabel, taskForm_submit);

	return [ h1, createDiv, taskForm ];
})();

export { createEditForm, createTaskElement, displayTaskList };