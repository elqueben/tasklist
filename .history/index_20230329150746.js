window.addEventListener('load', () => {
    //todos = JSON.parse(localStorage.getItem('todos')) || []
    const form = document.querySelector("#newtask")
    const input = document.querySelector("#input")

    form.addEventListener('submit', (e) => {
        e.preventDefault;
        const task = input.taskValue

        if (!task)
        console.log("form submit")
    })
    
})