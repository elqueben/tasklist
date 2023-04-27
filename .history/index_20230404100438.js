window.addEventListener('load', () => {
    //JSON.parse(localStorage.getItem(task)) || []
    const form = document.querySelector("#newtask")
    const input = document.querySelector("#todo")
    const output = document.querySelector("#new")

    output.innerHTML = localStorage.getItem("task")

    form.addEventListener('submit', (e) => {
        // PREVENTS PAGE FROM RELOADING
        e.preventDefault();
        
        // ASSINGS THE INPUTTED VALUE ONTO A NEW DIV
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

        // ADDS EDIT BUTTON
        const taskEdit = document.createElement("button")
        taskEdit.classList.add("edit")
        taskEdit.innerText = "Edit"

        // ALLOWS THE USER TO EDIT THE TASK
        taskEdit.addEventListener('click', () => {
            if (taskEdit.innerText == "Edit") {
                taskEdit.innerText = "Save"
                taskInput.focus()
                taskInput.removeAttribute("readonly")
            } else {
                taskEdit.innerText = "Edit"
                taskInput.setAttribute("readonly", "readonly")
            }
        })

        // ADDS DELETE BUTTON
        const taskDelete = document.createElement("button")
        taskDelete.classList.add("delete")
        taskDelete.innerText = "Delete"

        // ALLOWS THE USER TO DELETE THE TASK
        taskDelete.addEventListener('click', () => {
            output.removeChild(taskElement)
        })

        // RENDERS CONENT ON WINDOW WHEN SUBMITTED
        taskElement.appendChild(taskInput)
        taskElement.appendChild(taskEdit)
        taskElement.appendChild(taskDelete)
        output.appendChild(taskElement)

        // WHEN A TASK IS SUBMITTED, THE INPUT SECTION WILL RESET
        input.value = ""

        const saved = localStorage.setItem("task", task))
    })

    
})