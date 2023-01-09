const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const ul = document.querySelector('ul');
    const to_do = document.querySelector('#to_do');
    const txt = obj?.to_do;

    const span = document.createElement('span');
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-danger');
    span.innerText = txt;

    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
    
    to_do.value = '';
});