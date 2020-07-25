
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
    let obj = ({"text": name.value, "id": i})
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

i=0

function pickRandom () {

    let ran = Math.floor(Math.random() * arr.length);
    let ranName = arr[ran];
    let listItems = document.querySelectorAll('li')

     if(i<=arr.length) {
        for( list of listItems) {
            listItems.forEach(list => {
            if(list.classList.contains('picked')) {
                return
            } else {
                nameDisplay.textContent = ranName['text']
                if(list.classList == nameDisplay.textContent) {
                    list.classList.add('picked')
                } else {
                    return} 
                }}    
            )}
        } else {
            i=0
            listItems.forEach(list => {
                list.classList.remove('picked')
            })
            nameDisplay.textContent=''
        }
        i++
}

random.addEventListener('click', pickRandom);
