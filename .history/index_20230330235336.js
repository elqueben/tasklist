window.addEventListener('load', () => {
    //todos = JSON.parse(localStorage.getItem('todos')) || []
    const form = document.querySelector("#newtask")
    const input = document.querySelector("#todo")
    const output = document.querySelector("#new")

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
        const taskEdit = document.createElement("input")
        taskEdit.classList.add("edit")
        taskEdit.type = "button"
        taskEdit.value = "Edit"

        taskEdit.addEventListener('click', (e) => {
            if taskEdit.value
        })

        // ADDS DELETE BUTTON
        const taskDelete = document.createElement("input")
        taskDelete.classList.add("delete")
        taskDelete.type = "button"
        taskDelete.value = "Delete"

        // RENDERS CONENT ON WINDOW WHEN SUBMITTED
        taskElement.appendChild(taskInput)
        taskElement.appendChild(taskEdit)
        taskElement.appendChild(taskDelete)
        output.appendChild(taskElement)

        input.value = ""

    })

    
})