window.addEventListener('load', () => {
    //todos = JSON.parse(localStorage.getItem('todos')) || []
    const form = document.querySelector("#newtask")
    const input = document.querySelector("#todo")
    const output = document.querySelector("#new")

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const task = input.value

        // IF NO TASK DETECTED, USER WILL BE PROMPTED WITH AN ERROR MESSAGE
        if (!task) {
            alert("please fill out form");
            return
        }
        
        // MAKES NEW DIV WITH CLASS OF "new"
        const taskElement = document.createElement("div")
        taskElement.classList.add("new")

        // ADDS TASK VALUE INTO THE DIV AS AN INPUT ELEMENT
        const taskInput = document.createElement("input")
        taskInput.classList.add("output")
        taskInput.type = "text"
        taskInput.value = task
        taskInput.setAttribute("readonly", "readonly")

        const taskEdit = document.createElement("button")
        taskEdit.classList("edit")
        taskEdit.inner = "button"
        taskEdit.value = "Edit"

        // RENDERS CONENT ON WINDOW WHEN SUBMITTED
        taskElement.appendChild(taskInput)
        taskElement.appendChild(taskEdit)
        output.appendChild(taskElement)

    })

    
})