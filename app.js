
let arr = [];

let name = document.getElementById('name');
let submit = document.getElementById('submit');
let nameDisplay = document.getElementById('nameDisplay');
let random = document.getElementById('random');

test = (e) => {
    e.preventDefault();
    arr.push(name.value);
    name.value='';
}

name.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        submit.click()
    }
})

function pickRandom () {
    let ran = Math.floor(Math.random() * arr.length);
    let ranName = arr[ran];
    nameDisplay.textContent = ranName;
    let rem = arr.indexOf(ranName)
    arr.splice(rem, 1)
    console.log(arr)

// Goal here: only call each name once until all names have been called, then reset

    // if(array.length === 0) {
    //     something to reset it. Tried creating a new array from the original array and resetting the value that way. 
    //     Succinctly, how to "undo" a splice. Or is there a better way to do that
        
    // } else {
    //     something
    // }
}

random.addEventListener('click', pickRandom);

