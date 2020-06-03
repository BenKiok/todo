const taskContainer = (() => {
	const section = document.createElement('section'),
		  h1 = document.createElement('h1');

	section.id = 'task';
	h1.innerHTML = 'Inbox';

	section.appendChild(h1);

	return section;
})();

const appendTask = task => {
	const div = document.createElement('div'),
		  checkbox = document.createElement('input'),
		  taskSection = document.createElement('section'),
		  taskHead = document.createElement('section'),
		  	h2 = document.createElement('h2'),
		  	h3 = document.createElement('h3'),
		  taskBase = document.createElement('section'),
		  	h4 = document.createElement('h4'),
		  	section = document.createElement('section'),
		  		editBtn = document.createElement('button'),
		  		deleteBtn = document.createElement('button');

	div.classList.add('task');
	checkbox.type = 'checkbox';
	taskHead.classList.add('taskHead');
		h2.innerHTML = task.title;
		h3.innerHTML = task.date;
	taskBase.classList.add('taskBase');
		h4.innerHTML = task.description;
		editBtn.innerHTML = 'Edit';
		deleteBtn.innerHTML = 'Delete';

	checkbox.classList.add('hide');
	h3.classList.add('hide');
	h4.classList.add('hide');
	editBtn.classList.add('hide');
	deleteBtn.classList.add('hide');

	section.append(editBtn, deleteBtn);
	taskBase.append(h4, section);
	taskHead.append(h2, h3);
	taskSection.append(taskHead, taskBase);
	div.append(checkbox, taskSection);

	taskContainer.appendChild(div);

	div.addEventListener('mouseenter', () => {
		checkbox.classList.remove('hide');
	});

	div.addEventListener('mouseleave', () => {
		checkbox.classList.add('hide');
	});

	taskHead.addEventListener('click', () => {
		h3.classList.toggle('hide');
		h4.classList.toggle('hide');
		editBtn.classList.toggle('hide');
		deleteBtn.classList.toggle('hide');
	});

	return div;
}

export { taskContainer, appendTask };