
// function logar(){

//     var login = document.getElementById('login').value;
//     var senha = document.getElementById('password').value;

//     if(login == "admin" && senha == "admin"){
//         alert('Sucesso');
//         location.href = "paginicial.html";
//     }else{
//         alert('Usuario ou senha incorreto');
//     }
// }
// const form = document.getElementById('cadastroDevs')
// form.addEventListener('submit', function (ev) {
//     ev.preventDefault()
// })

// const form = document.getElementById('formLogin')
// form.addEventListener('submit', function (ev) {
//     ev.preventDefault()
// })

function logar() {
    const email = document.getElementById('email').value 
    const senha = document.getElementById('senha').value

    if (email === 'admin' && senha === 'admin') {
        window.location.href = "./paginicial.html"
    } else {
        alert('Email ou Senha incorretos, tente novamente.')
    }
}

"use strict";
const input = document.querySelector("input");
const button = document.querySelector("password");
button.addEventListener('click', password);

function password() {
  if (input.type == "password") {
    input.type = "text";
    button.textContent = "Visualizar";
  } else {
    input.type = "password";
    button.textContent = "Esconder";
  }
}