
// const ul = document.querySelector('.items');

// ul.firstElementChild.textContent = "HELLO";
// ul.children[0].style.color = 'green';

// ul.children[1].style.background = 'yellow';


const form = document.querySelector('#my-form');

const username = document.querySelector('#name');

const email = document.querySelector('#email');

const msg = document.querySelector('.msg');

const btn = document.querySelector('.btn');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (username.value == '' || email.value == '') {
        msg.innerHTML = '<b>Please enter all fields</b>';
        
        setTimeout(() => {
            msg.remove();
        }, 2000);
    }
    else {
        // console.log(username.value);
        // console.log(email.value);
        localStorage.setItem('name', username.value);
        localStorage.setItem('email', email.value);
    }
    
    
}

btn.addEventListener('mouseout', (e) => {
    document.querySelector('body').style.background = "gray";
});

btn.addEventListener('mouseover', (e) => {
    document.querySelector('body').style.background = "#ccc";
});


