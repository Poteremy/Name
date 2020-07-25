
let arr = [];

let name = document.getElementById('name');
let submit = document.getElementById('submit');
let nameDisplay = document.getElementById('nameDisplay');
let random = document.getElementById('random');

submit.addEventListener('mouseup', function(e){
    e.preventDefault
    arr.push(name.value)
    name.value=''
})

function pickRandom () {
    let ran = Math.floor(Math.random() * arr.length)
    let ranName = arr[ran]
    nameDisplay.textContent = ranName

}

random.addEventListener('click', pickRandom)