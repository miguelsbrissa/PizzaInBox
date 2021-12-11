
function addPizza() {
    var nome = document.querySelector('#nomePizza')
    var preco = document.querySelector('#precoPizza')
    var html = new XMLHttpRequest();
    html.open("post", "https://pizza-in-box.herokuapp.com/produtos/", true)
    html.setRequestHeader('Content-Type', 'application/json')
    html.send(JSON.stringify({
        "nome": nome.value,
        "preco": preco.value
    }))

    // if (html.statusText){
    //     alert('Pizza adicionada com sucesso!')
    // }else{
    //     alert('Erro de digitação!')
    // }
    alert('Pizza adicionada com sucesso')
    limpar()
}

function limpar(){
    var nome = document.querySelector('#nomePizza')
    var preco = document.querySelector('#precoPizza')

    nome.value = ""
    preco.value = ""
}