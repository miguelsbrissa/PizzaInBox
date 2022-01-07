import api from "./services/api.js"

const endpoint = "logins/passwordValidate";
/**
 * User status.
 * @readonly
 * @enum {{id: integer, description: string}}
 */
const PermissionStatus = Object.freeze({
	CUSTOMER: { id: 1, description: 'CUSTOMER' },
	ADMIN: { id:2, description: 'ADMIN' }
});

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
        console.error('Erro no login\n' + err);
     });
    
}
/**
 * 
 * @param {PermissionStatus} data the permission or false case the password was incorrect.
 * 
 */
function redirectPage(data) {
    let bool = data
    console.log(bool)
    
    if(bool == PermissionStatus.CUSTOMER.description){
        location.href = '/';
    }else if (bool == PermissionStatus.ADMIN.description){
        location.href = '/admin';
    }else{
        alert("Usuário/Senha inválido.");
    }
}
export default login;