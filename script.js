const input = document.getElementById('input-txt');
const btn = document.getElementById('btn');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const listBtn = document.createElement('button');
    listBtn.setAttribute('class', 'list-btn');
    const delIcon = document.createElement('i');
    delIcon.setAttribute('class', 'fa fa-remove');
    listBtn.appendChild(delIcon);
    li.appendChild(document.createTextNode(input.value));
    li.setAttribute('class', 'list-group-item');
    li.appendChild(listBtn);
    ul.appendChild(li);
    input.value = '';
    input.focus();
    listBtn.onclick = function () {
        ul.removeChild(li);
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

btn.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
