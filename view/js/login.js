function httpGet(url) {
    var html = new XMLHttpRequest();
    html.open("get", url, false)
    html.send(null)
    return html.responseText;
}

function validateLogin(){
    var user = document.querySelector('#userLogin')
    var pass = document.querySelector('#passLogin')
    var bool = httpGet(`http://matheustir.ddns.net:8081/logins/passwordValidate?user=${user.value}&password=${pass.value}`)
    console.log(bool)
    if(bool == "true"){
        location.href = 'index.html'
    }else{
        alert('Usuario ou senhas incorretas')
    }
}