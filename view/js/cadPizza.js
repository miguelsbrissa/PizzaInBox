function addPizza() {
    var nome = document.querySelector('#nomePizza')
    var preco = document.querySelector('#precoPizza')
    var ing = document.querySelector('#ingPizza')
    var html = new XMLHttpRequest();
    html.open("post", "https://pizza-in-box.herokuapp.com/produtos/", true)
    html.setRequestHeader('Content-Type', 'application/json')
    html.send(JSON.stringify({
        "nome": nome.value,
        "preco": preco.value,
        "descricao":ing.value
    }))
    alert('Pizza adicionada com sucesso')
    limpar()
}

function limpar(){
    var nome = document.querySelector('#nomePizza')
    var preco = document.querySelector('#precoPizza')
    var ing = document.querySelector('#ingPizza')

    nome.value = ""
    preco.value = ""
    ing.value = ""
}