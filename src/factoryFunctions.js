const Project = aName => {
	const name = aName,
		  tasks = [],

	addTask = task => {
		tasks.push(task);
	},

	removeTask = task => {
		tasks.splice(tasks.indexOf(task), 1);
	}

	return { name, tasks, addTask, removeTask };
}

const Task = aTitle => {
	const title = aTitle,
		  date = 'No due date',
		  description = 'No description',
		  priority = 'None',
		  completed = false;

	return { title, date, description, priority, completed };
}

export { Project, Task };