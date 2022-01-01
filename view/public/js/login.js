import api from "./services/api.js"

const endpoint = "logins/passwordValidate";

const login = function validateLogin(){
    console.log('entrando...')
    let user = document.querySelector('#userLogin');
    let pass = document.querySelector('#passLogin');
    api.get(`${endpoint}`, {
        params: {
            user: user.value,
            password: pass.value
    }}).then((response) => {
			if (response.status >= 200 && response.status <= 400) {
				redirectPage(response.data)
			}
		})
    .catch((err) => {
				redirectPage()
        console.error("Erro no login\n" + err);
     });
    
}

function redirectPage(data) {
    let bool = data
    console.log(bool)
    
    if(bool == "CLIENTE"){
        location.href = '/';
    }else if (bool == "ADMINISTRADOR"){
        location.href = '/admin';
    }else{
        alert("Usuário/Senha inválido.");
    }
}
export default login;