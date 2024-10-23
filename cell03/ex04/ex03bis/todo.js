const todoList = document.getElementById('ft_list');
const newTaskButton = document.getElementById('newTaskButton');

function loadTasks() {
    const tasks = getCookie('tasks');
    if (tasks) {
        tasks.split(',').forEach(task => {
            if (task) {
                addTaskToDOM(task);
            }
        });
    }
}

function addTask() {
    const task = prompt("Please enter your new TO DO:");
    if (task && task.trim()) {
        addTaskToDOM(task);
        saveTasks();
    }
}

function addTaskToDOM(task) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'todo-item';
    taskDiv.textContent = task;

    taskDiv.addEventListener('click', () => {
        if (confirm("Do you really want to remove this TO DO?")) {
            todoList.removeChild(taskDiv);
            saveTasks();
        }
    });

    todoList.prepend(taskDiv);
}

function saveTasks() {
    const tasks = Array.from(todoList.children).map(item => item.textContent);
    document.cookie = `tasks=${tasks.join(',')}; path=/; max-age=31536000`; // 1 year
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

newTaskButton.addEventListener('click', addTask);

window.onload = loadTasks;
