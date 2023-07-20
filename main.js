
const form = document.querySelector('#my-form');

const username = document.querySelector('#name');

const email = document.querySelector('#email');

const msg = document.querySelector('.msg');

const btn = document.querySelector('.btn');

var ul = document.getElementById('users');

var li=document.getElementById('')

form.addEventListener('submit', onSubmit);


ul.addEventListener('click', removeUser);
ul.addEventListener('click', editUser);

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
        // var name = ;
        // name.className = 'username';
        li.appendChild(document.createTextNode(username.value + ' '));
        // var mail = ;
        // mail.className='mail'
        li.appendChild(document.createTextNode(email.value));

        var del_btn = document.createElement('button');
        del_btn.className = 'btn btn-danger btn-sm float-right delete';
        del_btn.appendChild(document.createTextNode('X'));

        var edit_btn = document.createElement('button');
        edit_btn.className = 'btn btn-secondary btn-sm mr-1 float-right edit';
        edit_btn.appendChild(document.createTextNode('EDIT'));

        
        li.appendChild(del_btn);
        li.appendChild(edit_btn);

        var ul = document.getElementById('users');
        ul.appendChild(li);


        //make EMAIL as key and NAME as value so multiple value gets stored in local storage as email will be unique
        localStorage.setItem(email.value, JSON.stringify(username.value));

        form.reset();
        
    }
        
}


//REMOVE USERS
function removeUser(e) {
    
    if (e.target.classList.contains('delete')) {

        var li = e.target.parentElement;
        var email_key = li.childNodes[1].textContent;

        
        localStorage.removeItem(email_key);

        ul.removeChild(li);
        
    }

}

// EDIT USER
function editUser(e) {
    if (e.target.classList.contains('edit')) {

        var li = e.target.parentElement;
        var email_key = li.childNodes[1].textContent;

        var name = localStorage.getItem(email_key);

        // document.getElementById('name').value = name;
        // document.getElementById('email').value = email_key;

        username.value = JSON.parse(name);
        email.value = email_key;

        

        localStorage.removeItem(email_key);
        ul.removeChild(li);
        

        
    }
}

btn.addEventListener('mouseout', (e) => {
    document.querySelector('body').style.background = "gray";
});

btn.addEventListener('mouseover', (e) => {
    document.querySelector('body').style.background = "#ccc";
});