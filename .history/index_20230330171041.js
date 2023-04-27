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

        // ADDS TASK VALUE INTO THE DIV
        const taskInput = document.createElement("input")
        taskInput.classList.add("output")
        taskInput.type = "text"
        taskInput.value = task
        taskInput.setAttribute("readonly", "readonly")

        // RENDERS CONENT ON WINDOW WHEN SUBMITTED
        taskElement.appendChild(taskInput)
        output.appendChild(taskElement)
    })

    
})