window.addEventListener('load', () => {
    //todos = JSON.parse(localStorage.getItem('todos')) || []
    const form = document.querySelector("#newtask")
    const input = document.querySelector("#input")

    form.addEventListener('submit', (e) => {
        e.preventDefault;
        const task = input.value

        if (!task) {
            alert("please fill out form")
        }
        console.log("form submit")
    })
    
})