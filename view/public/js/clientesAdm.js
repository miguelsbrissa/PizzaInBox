function httpGet(url) {
    var html = new XMLHttpRequest();
    html.open("get", url, false)
    html.send(null)
    return html.responseText;
}

function tableClientes() {
    const table = httpGet("https://pizza-in-box.herokuapp.com/clientes/");
    var linhas = table.split(",")
    linhas = JSON.parse(linhas)

    var container = document.querySelector('#containerPizza')
    var tableHtml = document.createElement("table")
    tableHtml.setAttribute('class', 'conPizza__table')
    tableHtml.setAttribute('id', 'tablePizza')
    var trH = document.createElement("tr")
    trH.setAttribute('class', 'conPizza__header')
    var tdId = document.createElement("td")
    var tdNome = document.createElement("td")
    var tdCpf = document.createElement("td")
    var tdAcao = document.createElement("td")
    tdId.innerHTML = '#'
    tdNome.innerHTML = 'Nome'
    tdCpf.innerHTML = 'CPF'
    tdAcao.innerHTML = 'Ação'
    trH.appendChild(tdId)
    trH.appendChild(tdNome)
    trH.appendChild(tdCpf)
    trH.appendChild(tdAcao)
    tableHtml.appendChild(trH)
    container.appendChild(tableHtml)
    for (var i = 0; i < linhas.content.length; i++) {
        var tr = document.createElement("tr")
        var id = document.createElement("td")
        var nome = document.createElement("td")
        var cpf = document.createElement("td")
        var acoes = document.createElement("td")

        tr.setAttribute('id', linhas.content[i].id)
        tr.setAttribute('class', "pedidos__content")

        id.innerHTML = i + 1
        nome.innerHTML = linhas.content[i].nome
        cpf.innerHTML = linhas.content[i].cpfOuCnpj
        acoes.innerHTML = `
    <a href="#" class="pedidos__btn" onclick="remove(${linhas.content[i].id})">
    <i class="fas fa-trash"></i> Excluir
</a>
    `
        tr.appendChild(id)
        tr.appendChild(nome)
        tr.appendChild(cpf)
        tr.appendChild(acoes)

        tableHtml.appendChild(tr)
    }
}
tableClientes()

function remove(id){
    var html = new XMLHttpRequest();
    html.open("delete", `https://pizza-in-box.herokuapp.com/clientes/${id}`, true)
    html.setRequestHeader('Content-Type', 'application/json')
    html.send(JSON.stringify({
        "id": id
    }))
    alert(`Cliente removido com sucesso`)

    location.reload()
}


