window.addEventListener('load', () => {
    //todos = JSON.parse(localStorage.getItem('todos')) || []
    const form = document.querySelector("#newtask")
    const input = document.querySelector("#todo")

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const task = input.value

        if (!task) {
            alert("please fill out form");
            return
        }
        
        const taskElement = document.createElement("div")
        taskElement.classList.add("new")

        const taskInput = document.createElement("input")
        taskInput.classList.add("output")
        tas
    })

    
})