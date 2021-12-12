function httpGet(url) {
    var html = new XMLHttpRequest();
    html.open("get", url, false)
    html.send(null)
    return html.responseText;
}
function addCliente() {
    var cpf = document.querySelector('#cpfCli')
    var nome = document.querySelector('#nomeCli')
    var email = document.querySelector('#emailCli')
    var telefone = document.querySelector('#telCli')
    var cep = document.querySelector('#cepCli')
    var logradouro = document.querySelector('#logradouroCli')
    var numero = document.querySelector('#numeroCli')
    var bairro = document.querySelector('#bairroCli')
    var complemento = document.querySelector('#complementoCli')
    var estado = document.querySelector('#estadoCli')
    var estadoV = estado.options[estado.selectedIndex].text
    var cidade = document.querySelector('#cidadeCli')
    var usuario = document.querySelector('#usuarioCli')
    var senha = document.querySelector('#senhaCli')
    var confSenha = document.querySelector('#confSenhaCli')
    var html = new XMLHttpRequest();
    html.open("post", "https://pizza-in-box.herokuapp.com/clientes/", false)
    html.setRequestHeader('Content-Type', 'application/json')
    html.send(JSON.stringify({
        "id": null,
        "nome": nome.value,
        "email": email.value,
        "cpfOuCnpj": cpf.value,
        "tipo": "PESSOAFISICA",
        "statusPermissao": "CLIENTE",
        "telefones": [telefone.value]
    }))
    
    //tipo 0 CPF 1 CNPJ
    //Status 0 Cli 1 Admin

    var cli = httpGet(`https://pizza-in-box.herokuapp.com/clientes/findByCpf?cpf=${cpf.value}`)
    console.log(cli)
    cli = JSON.parse(cli)
    alert(cli.id)

    var idCli = cli.id

    var httpEnd = new XMLHttpRequest();
    httpEnd.open("post", `https://pizza-in-box.herokuapp.com/clientes/${idCli}/enderecos`, false)
    httpEnd.setRequestHeader('Content-Type', 'application/json')
    httpEnd.send(JSON.stringify({
        "id" : null,
        "logradouro": logradouro.value,
        "numero": numero.value,
        "complemento": complemento.value,
        "bairro": bairro.value,
        "cep": cep.value,
        "cidade": cidade.value,
        "estado": estadoV
    }))

    if (senha.value == confSenha.value) {
        console.log("a")
        var htmlLogin = new XMLHttpRequest();
        htmlLogin.open("post", "https://pizza-in-box.herokuapp.com/logins/", false)
        htmlLogin.setRequestHeader('Content-Type', 'application/json')
        htmlLogin.send(JSON.stringify({
            "user": usuario.value,
            "password": senha.value,
            "statusPermissao": "CLIENTE",
            "clienteId": idCli
        }))
        
        alert('Usuario adicionado com sucesso!')
        limpar()
        location.href = "login.html"
    }else{
        alert('Senhas diferentes!')
    }

   
}

function limpar() {
    var cpf = document.querySelector('#cpfCli')
    var nome = document.querySelector('#nomeCli')
    var email = document.querySelector('#emailCli')
    var telefone = document.querySelector('#telCli')
    var cep = document.querySelector('#cepCli')
    var logradouro = document.querySelector('#logradouroCli')
    var numero = document.querySelector('#numeroCli')
    var bairro = document.querySelector('#bairroCli')
    var complemento = document.querySelector('#complementoCli')
    var estado = document.querySelector('#estadoCli')
    var cidade = document.querySelector('#cidadeCli')
    var usuario = document.querySelector('#usuarioCli')
    var senha = document.querySelector('#senhaCli')
    var confSenha = document.querySelector('#confSenhaCli')

    cpf.value = ""
    nome.value = ""
    email.value = ""
    telefone.value = ""
    cep.value = ""
    logradouro.value = ""
    numero.value = ""
    bairro.value = ""
    complemento.value = ""
    estado.value = ""
    cidade.value = ""
    usuario.value = ""
    senha.value = ""
    confSenha.value = ""
}