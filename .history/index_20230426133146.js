const taskInput = document.querySelector("#todo");
const taskList = document.querySelector("#new");
let tasks = JSON.parse(localStorage.getItem("task")) || [];

function renderTask() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskEl = document.createElement("div");
        taskEl.classList.add("new")
        taskEl.innerHTML = `
            <span>${task}</span>
            <button class="edit" onclick="editTask(${index})">Edit</button>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
          `;
          taskList.appendChild(taskEl)
    })
}

function addTask(e) {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
      tasks.push(task);
      taskInput.value = '';
      renderTasks();
      saveTasks();
    }
  }

function editTask(index) {
    const newTask = prompt('Edit task:', tasks[index]);
    if (newTask && newTask.trim() !== tasks[index]) {
      tasks[index] = newTask.trim();
      renderTasks();
      saveTasks();
    }
  }

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    saveTasks();
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  renderTasks();

  const form = document.querySelector('form');
  form.addEventListener('submit', addTask);