



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
        
        
        

        
        //Add user in a list
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(username.value));

        var ul = document.getElementById('users');
        ul.appendChild(li);


        

        // in this way user is a key which is not unique thats why whenever we try to
        //store new value it deletes old value and update new value coz user is not unique key 
        // user is put as key so thats why user will get update with new value rather than creating new value
        // same like if we put same email as key it will get updated with new value and deleted older value 
        // we are sending same string or value in key parameter in setitem as key that is same key so it is just updating value not adding new user
        
      /*

        //storing data as an object
        // let user = {
        //     name: username.value,
        //     email: email.value
        // };
        
        //convert it into redable format as it shows object object only
        //let user_serialized = JSON.stringify(user);
        //console.log(user_serialized);

        
          // we are sending same string or value in key parameter in setitem as key that is same key so it is just updating value not adding new user
        //localStorage.setItem('User', user_serialized); 
        */



        
        
        //make EMAIL as key and NAME as value so multiple value gets stored in local storage as email will be unique
        localStorage.setItem(email.value, JSON.stringify(username.value));

        
        
    }
    
    
}

btn.addEventListener('mouseout', (e) => {
    document.querySelector('body').style.background = "gray";
});

btn.addEventListener('mouseover', (e) => {
    document.querySelector('body').style.background = "#ccc";
});


