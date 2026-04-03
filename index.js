

let button = document.getElementById('theme-toggle');
let body = document.body;
body.classList.add('light-mode');

button.addEventListener('click',() => {
    if (body.classList.contains('light-mode')){
        button.textContent = 'switch to light-mode';
        body.classList.replace('light-mode','dark-mode');
    }
    else{
        button.textContent = 'switch to dark-mode';
        body.classList.replace('dark-mode','light-mode');
    }
});
