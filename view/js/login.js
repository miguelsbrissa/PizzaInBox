export default {validateLogin}
import axios from 'axios'

const url = "https://pizza-in-box.herokuapp.com"
const endpoint = "logins/passwordValidate"

function validateLogin(){
    let user = document.querySelector('#userLogin')
    let pass = document.querySelector('#passLogin')
    axios.get(`${url}/${endpoint}`, {
        params: {
            user: user.value,
            password: pass.value
    }}).then(response => redirectPage(response.data))
    
}

function redirectPage(data) {
    let bool = data
    console.log(bool)
    
    if(bool == "\"CLIENTE\""){
        location.href = 'index.html'
    }else if (bool == "\"ADMINISTRADOR\""){
        location.href = 'homeAdmin.html'
    }else{
        alert("Usuário/Senha inválido.")
    }
}