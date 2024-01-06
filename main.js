
const form = document.querySelector('#my-form');

const username = document.querySelector('#name');

const email = document.querySelector('#email');

const msg = document.querySelector('.msg');

const btn = document.querySelector('.btn');

var ul = document.getElementById('users');

var li=document.getElementById('')


document.addEventListener('DOMContentLoaded', 
    axios.get("http://localhost:3000/")
    .then(res => {
        
        for (let i in res.data) {
            showUserOnScreen(res.data[i]);
        }
        
    })
    .catch(err => {
    console.log(err)
}));

form.addEventListener('submit', onSubmit);
ul.addEventListener('click', removeUser);
// ul.addEventListener('click', editUser);

// ADD USERS 
async function onSubmit(e) {
    e.preventDefault();  
    try{

        if (username.value == '' || email.value == '') {
            msg.innerHTML = '<b>Please enter all fields</b>';
            
            setTimeout(() => {
                msg.remove();
            }, 2000);
        }
        else {
                
            //Add user in a list

            
            const user= {
                name : username.value,
                email : email.value
    
            };
    
           const response= await axios.post("http://localhost:3000",user);
           showUserOnScreen(response.data);
         
            
            form.reset();
            
        }
    }
    catch(err){
        console.log(err)
    }
        
}


//REMOVE USERS
async function removeUser(e) {
    try{

        if (e.target.classList.contains('delete')) {
    
            var li = e.target.parentElement;
            var email_key = li.childNodes[1].textContent;
    
            
  
    
            const res = await axios.get("http://localhost:3000")
              
    
                    for (let i in res.data) {
                        if (res.data[i].email == email_key) {
                            const id = res.data[i].id;
                            //console.log(typeof(id));
                            axios.delete(`http://localhost:3000/${id}`);
                            ul.removeChild(li);
                            break;
                        }
                    }
    
        }
    }
    catch(err){
        console.log(err);
    }

}

// // EDIT USER
// function editUser(e) {
//     if (e.target.classList.contains('edit')) {

//         var li = e.target.parentElement;
//         var email_key = li.childNodes[1].textContent;

//         axios.get("https://crudcrud.com/api/0b36b7b2f9124061b621547f54545232/appointmentData")
//             .then(res => {

//                 for (let i in res.data) {
//                     if (res.data[i].email == email_key) {
//                         const id = res.data[i]._id;
//                         //console.log(typeof(id));
//                         //axios.delete(`https://crudcrud.com/api/2618d0ffb05142f5b74526a2e3066e30/appointmentData/${id}`)

//                         var email_res = res.data[i].email;

//                         var name = res.data[i].name;

//                         username.value = name;
//                         email.value = email_res;

//                         axios.delete(`https://crudcrud.com/api/0b36b7b2f9124061b621547f54545232/appointmentData/${id}`)

//                         ul.removeChild(li);
//                         break;
//                     }
//                 }

//             })
//             .catch(err => {
//                 console.log(err)
//             })


        
//     }
// }



function showUserOnScreen(obj) {

    // console.log(obj);    
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(obj.name + ' '));

    li.appendChild(document.createTextNode(obj.email));

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
}

btn.addEventListener('mouseout', (e) => {
    document.querySelector('body').style.background = "gray";
});

// btn.addEventListener('mouseover', (e) => {
//     document.querySelector('body').style.background = "#ccc";
// });