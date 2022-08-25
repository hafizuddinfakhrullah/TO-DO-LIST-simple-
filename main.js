let addTODOButton = document.getElementById('addTODO');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let input = document.querySelector('input');

addTODOButton.addEventListener('click', function() {
    let paragragh = document.createElement('p')
    paragragh.classList.add('paragraph-styling');
    paragragh.innerText = inputField.value;
    toDoContainer.appendChild(paragragh);
    inputField.value = "";
    paragragh.addEventListener('click', function() {
        paragragh.style.textDecoration = 'line-through';
    })
    paragragh.addEventListener('dblclick', function() {
        toDoContainer.removeChild( paragragh);
    })
})

input.addEventListener('keyup', (e) => {
    if (e.keycode === 13) {
        console.log(e.target.value);
    }
})