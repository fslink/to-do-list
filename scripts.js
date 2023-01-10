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

    const i_trash = document.createElement('i');
    const span = document.createElement('span');
    const btn = document.createElement('button');

    btn.classList.add('btn', 'btn-danger');
    i_trash.classList.add('bi', 'bi-trash');
    span.innerText = txt;

    btn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    i_trash.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
    });

    btn.appendChild(i_trash);
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
    
    to_do.value = '';
});