window.addEventListener('load', () => {
    //todos = JSON.parse(localStorage.getItem('todos')) || []
    const form = document.querySelector("#newtask")
    const task = document.querySelector("#input")

    form.addEventListener('submit', (e) => {
        e.preventDefault;

        console.log("form submit")
    })
    
})