window.addEventListener('load', () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const form = document.querySelector("#newtask");
    const input = document.querySelector("#todo");
    const output = document.querySelector("#new");

    const updateLocalStorage = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const createTaskElement = (task) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("new");

        const taskInput = document.createElement("input");
        taskInput.classList.add("output");
        taskInput.type = "text";
        taskInput.value = task;
        taskInput.setAttribute("readonly", "readonly");

        const taskEdit = document.createElement("button");
        taskEdit.classList.add("edit");
        taskEdit.innerText = "Edit";

        taskEdit.addEventListener('click', () => {
            if (taskEdit.innerText == "Edit") {
                taskEdit.innerText = "Save";
                taskInput.focus();
                taskInput.removeAttribute("readonly");
            } else {
                taskEdit.innerText = "Edit";
                taskInput.setAttribute("readonly", "readonly");
                tasks[tasks.indexOf(task)] = taskInput.value;
                updateLocalStorage();
            }
        });

        const taskDelete = document.createElement("button");
        taskDelete.classList.add("delete");
        taskDelete.innerText = "Delete";

        taskDelete.addEventListener('click', () => {
            output.removeChild(taskElement);
            tasks.splice(tasks.indexOf(task), 1);
            updateLocalStorage();
        });

        taskElement.appendChild(taskInput);
        taskElement.appendChild(taskEdit);
        taskElement.appendChild(taskDelete);

        return taskElement;
    };

    const renderTasks = () => {
        tasks.forEach(task => {
            const taskElement = createTaskElement(task);
            output.appendChild(taskElement);
        });
    };

    renderTasks();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the form");
            return;
        }

        tasks.push(task);
        updateLocalStorage();

        const taskElement = createTaskElement(task);
        output.appendChild(taskElement);

        input.value = "";
    });
});
