const taskBtn = (() => {
	const section = document.createElement('section'),
		  button = document.createElement('button');

	section.id = 'new';
	button.innerHTML = 'New Task';

	section.appendChild(button);

	return section;
})();

export default taskBtn;