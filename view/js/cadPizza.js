function addPizza() {
    var nome = document.querySelector('#nomePizza')
    var preco = document.querySelector('#precoPizza')
    var html = new XMLHttpRequest();
    html.open("post", "https://pizza-in-box.herokuapp.com/produtos/", false)
    html.setRequestHeader('Content-Type', 'application/json')
    html.send(JSON.stringify({
        "nome": nome,
        "preco": preco
    }))
}