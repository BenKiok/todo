const navbar = (() => {
	const section = document.createElement('section'),
		  button = document.createElement('button'),
		  inbox = document.createElement('div');

	section.id = 'nav';
	section.classList.add('hide');
	button.innerHTML = 'New Project';
	inbox.innerHTML = 'Inbox';

	section.append(button, inbox);

	return section;
})();

const menuToggle = (() => {
	const span = document.createElement('span');

	span.id = 'toggleMenu';
	span.innerHTML = '=';

	return span;
})();

const addProjectToNavbar = project => {
	const newProject = document.createElement('div');
	newProject.innerHTML = project.name;

	navbar.appendChild(newProject);
}

export { navbar, menuToggle, addProjectToNavbar };