
let arr = [];

let name = document.getElementById('name');
let submit = document.getElementById('submit');
let nameDisplay = document.getElementById('nameDisplay');
let random = document.getElementById('random');
let kidsList = document.getElementById('kidsList');
let resetBtn = document.getElementById('reset');

let i 

test = (e) => {
    e.preventDefault();
    let obj = ({"text": name.value, "picked": false})
    arr.push(obj);
    let create = document.createElement('li');
    create.setAttribute('class', obj['text']);
    kidsList.appendChild(create);
    create.innerText = obj.text;
    name.value='';
}

name.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        submit.click()
    }
})

resetBtn.addEventListener('click', reset)

let x = 0
function pickRandom () {
    let ran = Math.floor(Math.random() * arr.length);
    let ranName = arr[ran];
    let listItems = document.querySelectorAll('li')

    if(x<arr.length){
        if(ranName['picked'] === false){
            x++
            nameDisplay.textContent = ranName['text']
            ranName['picked'] = true
            listItems.forEach(list => {
                if(list.textContent === nameDisplay.textContent){
                    list.classList.add('picked')
                } else {
                    return }
                })
        } else {
            pickRandom() }
        }
     else {
        resetBtn.click()
    } 

    if(x===arr.length) {
        random.innerText = 'Reset'
    } else{return}
}

function reset() {
    x=0
    random.innerText = 'Get Random'
    arr.forEach(obj=>{obj.picked = false})
    let listItems = document.querySelectorAll('li')
    listItems.forEach(list => {
        list.classList.remove('picked')
        nameDisplay.innerText = ''
    })
}

function resetAll() {
    arr.splice(0, arr.length)
    document.querySelectorAll('li').forEach(el => {
        el.remove()
    })
}

random.addEventListener('click', pickRandom)