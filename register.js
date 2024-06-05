// Html elemnts area\
const form = document.querySelector('form');
const fullName = document.querySelector('#full-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
// Html elemnts area

const arr = [];

form.addEventListener("submit" , function(event){
    event.preventDefault();
    arr.push({
        Name: fullName.value,
        Email: email.value,
        Password: password.value,
    })
    console.log(arr);
})