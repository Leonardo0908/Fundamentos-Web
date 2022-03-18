/*

*/


let nome = window.document.getElementById("nome")
let email = document.getElementById("email")
let assunto = document.getElementById("assunto")

function pressionar(){
    return alert("você pressionou o botão")
}

function verificaCampos(){
    if(nome.ariaValue == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos devem ser preenchidos")
    }else{
        alert("Feedback enviado")
    }
}