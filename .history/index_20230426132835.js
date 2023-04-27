const taskInput = document.querySelector("#todo");
const taskList = document.querySelector("#new");
let tasks = JSON.parse(localStorage.getItem("task")) || [];

function renderTask() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskEl = document
    })
}