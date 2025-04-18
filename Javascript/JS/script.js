const listItems = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.onclick(addItem());
console.log(btn);

const addItem = () => {
    const inputValue = input.value;
    inputValue = '';

    const item = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    item.appendChild(span)
    item.appendChild(button)

    span.textContent = inputValue;
    button.textContent = 'Delete';

    listItems.appendChild(item);
}