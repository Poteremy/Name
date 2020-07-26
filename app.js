
let arr = [];

let name = document.getElementById('name');
let submit = document.getElementById('submit');
let nameDisplay = document.getElementById('nameDisplay');
let random = document.getElementById('random');
let kidsList = document.getElementById('kidsList');
let i 

test = (e) => {
    i=0
    e.preventDefault();
    let obj = ({"text": name.value, "id": i, "picked": false})
    arr.push(obj);
    let create = document.createElement('li');
    create.setAttribute('class', obj['text']);
    kidsList.appendChild(create);
    create.innerText = obj.text;
    name.value='';
    i++;
}

name.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        submit.click()
    }
})

// How to get it to only show each name once and then reset. Need to eliminate names from being called twice. Math.random isn't working. Not sure how to fix

random.addEventListener('click', pickRandom);
random.innerText = 'Get Random'


function pickRandom () {
    let ran = Math.floor(Math.random() * arr.length);
    let ranName = arr[ran];
    let listItems = document.querySelectorAll('li')

    if(ranName['picked'] === false){
        for(list of listItems) {
            listItems.forEach(list => {
            if(list.classList.contains('picked')) {
                return
            } else {
                nameDisplay.textContent = ranName['text']
                ranName['picked'] = true
                if(list.classList == nameDisplay.textContent) {
                    list.classList.add('picked')
                } else {
                    return } 
                }}    
            )}
        } else {
            pickRandom() 
        }
    
    arr.every((obj) => {
        if(obj.picked === false) {
            return
        } else {
            obj.picked = false;
            random.innerText = 'Reset'
            random.addEventListener('click', reset)
        }
    })

    console.log(arr)
    
}

function reset() {
    let listItems = document.querySelectorAll('li')
    listItems.forEach(list => {
        list.classList.remove('picked')
        random.innerText = "Get Random"
        nameDisplay.innerText = ''
    })
}


