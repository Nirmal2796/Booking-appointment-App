
const form = document.querySelector('#my-form');

const username = document.querySelector('#name');

const email = document.querySelector('#email');

const msg = document.querySelector('.msg');

const btn = document.querySelector('.btn');

var ul = document.getElementById('users');

form.addEventListener('submit', onSubmit);
ul.addEventListener('click', removeUser);


// ADD USERS 
function onSubmit(e) {
    e.preventDefault();  

    if (username.value == '' || email.value == '') {
        msg.innerHTML = '<b>Please enter all fields</b>';
        
        setTimeout(() => {
            msg.remove();
        }, 2000);
    }
    else {
            
        //Add user in a list
        var li = document.createElement('li');
        var name = document.createTextNode(username.value+' ');
        name.className = 'username';
        li.appendChild(name);
        var mail = document.createTextNode(email.value);
        mail.className='mail'
        li.appendChild(mail);

        var btn = document.createElement('button');
        btn.className = 'btn btn-danger btn-sm float-right delete';
        btn.appendChild(document.createTextNode('X'));

        li.appendChild(btn);

        var ul = document.getElementById('users');
        ul.appendChild(li);


        //make EMAIL as key and NAME as value so multiple value gets stored in local storage as email will be unique
        localStorage.setItem(email.value, JSON.stringify(username.value));

        
        
    }
        
}


//REMOVE USERS
function removeUser(e) {
    
    if (e.target.classList.contains = 'delete') {

        var li = e.target.parentElement;
        var email_key = li.childNodes[1].textContent;

       
        localStorage.removeItem(email_key);

        //ul.removeChild(li);
        
    }


}


btn.addEventListener('mouseout', (e) => {
    document.querySelector('body').style.background = "gray";
});

btn.addEventListener('mouseover', (e) => {
    document.querySelector('body').style.background = "#ccc";
});