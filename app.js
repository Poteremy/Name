
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
    // if(array.length === 0) {
    //     // array.push(arr)
        
    // } else {
    //     return
    // }
}

random.addEventListener('click', pickRandom);

