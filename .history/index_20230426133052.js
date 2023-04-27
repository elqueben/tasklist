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
          task
    })
}