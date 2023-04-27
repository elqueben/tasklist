window.addEventListener('load', () => {
    //todos = JSON.parse(localStorage.getItem('todos')) || []
    const form = document.querySelector("#newtask")
    const input = document.querySelector("#todo")
    const output = document.querySelector("#new")

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const task = input.value

        if (!task) {
            alert("please fill out form");
            return
        }
        
        const taskElement = document.createElement("div")
        taskElement.classList.add("new")

        const taskInput = document.createElement("div")
        taskInput.classList.add("output")
        taskInput.type

        output.appendChild(taskInput)
    })

    
})