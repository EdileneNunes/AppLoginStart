let valorLogin = document.getElementById("login")
let valorPassword = document.getElementById("password")

let usuario = {
    login: "Mariana",
    password: "MarianaLinda"
}
console.log(valorLogin.value)

function verify(){ 
if(valorLogin.value == usuario.login && valorPassword.value == usuario.password){
    console.log("Logado")
}else{
    console.log("credenciais incorretas")
}
}