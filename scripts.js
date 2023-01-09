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

    const listHtml = `<span>${txt}</span>
    <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>`;

    li.innerHTML = listHtml;
    ul.appendChild(li);
    
    to_do.value = '';
});

const ul = document.querySelector('ul');
console.log(ul);
ul.addEventListener('click', (e) =>{
    console.log(e);
});