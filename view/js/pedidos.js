function httpGet(url) {
    var html = new XMLHttpRequest();
    html.open("get", url, false)
    html.send(null)
    return html.responseText;
}

function tablePedidos() {
    //const table = httpGet("http://189.28.251.184:8081/pedidos/1");
    var linhas = table.split(",")
    linhas = JSON.parse(linhas)
    console.log(linhas)

    var tableHtml = document.querySelector('#tablePedidosCli')

    var i = 0

    var tr = document.createElement("tr")
    var id = document.createElement("td")
    var nome = document.createElement("td")
    var preco = document.createElement("td")
    var acoes = document.createElement("td")

    //tr.setAttribute('id', linhas[i].id)
    tr.setAttribute('class', "pedidos__content")

    id.innerHTML = i + 1
    nome.innerHTML = linhas.cliente.nome
    preco.innerHTML = `R$ ${linhas.preco}`
    acoes.innerHTML = `
<a href="#" class="pedidos__btn">
<i class="fas fa-eye"></i> Detalhes
</a>
    `

    tr.appendChild(id)
    tr.appendChild(nome)
    tr.appendChild(preco)
    tr.appendChild(acoes)

    tableHtml.appendChild(tr)
}

tablePedidos()

