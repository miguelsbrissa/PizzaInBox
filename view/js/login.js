function httpGet(url) {
    var html = new XMLHttpRequest();
    html.open("get", url, false)
    html.send(null)
    return html.responseText;
}

function validateLogin(){
    var user = document.querySelector('#userLogin')
    var pass = document.querySelector('#passLogin')
    var bool = httpGet(`https://pizza-in-box.herokuapp.com/logins/passwordValidate?user=${user.value}&password=${pass.value}`)
    console.log(bool)
    
    if(bool == "\"CLIENTE\""){
        location.href = 'index.html'
    }else if (bool == "\"ADMINISTRADOR\""){
        location.href = 'homeAdmin.html'
    }else{
        alert("Usuário/Senha inválido.")
    }
}