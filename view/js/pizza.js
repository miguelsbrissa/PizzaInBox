function httpGet(url) {
    var html = new XMLHttpRequest();
    html.open("get", url, false)
    html.send(null)
    return html.responseText;
}

function tablePizza() {
    const table = httpGet("https://pizza-in-box.herokuapp.com/produtos/");
    var linhas = table.split(",")
    linhas = JSON.parse(linhas)
    console.log(linhas.content)

    var btnAdd = document.createElement('div')
    btnAdd.setAttribute('class', 'homeAdmin__button')
    btnAdd.innerHTML = `
    <input type="submit" value="Adicionar Pizza" onclick="addPizza()">
    `
    var container = document.querySelector('#containerPizza')
    var tableHtml = document.createElement("table")
    tableHtml.setAttribute('class', 'conPizza__table')
    tableHtml.setAttribute('id', 'tablePizza')
    var trH = document.createElement("tr")
    trH.setAttribute('class', 'conPizza__header')
    var tdId = document.createElement("td")
    var tdNome = document.createElement("td")
    var tdPreco = document.createElement("td")
    var tdAcao = document.createElement("td")
    tdId.innerHTML = '#'
    tdNome.innerHTML = 'Nome'
    tdPreco.innerHTML = 'Preço'
    tdAcao.innerHTML = 'Ação'
    trH.appendChild(tdId)
    trH.appendChild(tdNome)
    trH.appendChild(tdPreco)
    trH.appendChild(tdAcao)
    tableHtml.appendChild(trH)
    container.appendChild(btnAdd)
    container.appendChild(tableHtml)
    for (var i = 0; i < linhas.length; i++) {
        var tr = document.createElement("tr")
        var id = document.createElement("td")
        var nome = document.createElement("td")
        var preco = document.createElement("td")
        var acoes = document.createElement("td")

        tr.setAttribute('id', linhas[i].id)
        tr.setAttribute('class', "pedidos__content")

        id.innerHTML = i + 1
        nome.innerHTML = linhas[i].nome
        preco.innerHTML = `R$ ${linhas[i].preco}`
        acoes.innerHTML = `
    <a href="#" class="pedidos__btn" onclick="editarPizza(${linhas[i].id})">
    <i class="fas fa-eye"></i> Editar
</a>
    `
        tr.appendChild(id)
        tr.appendChild(nome)
        tr.appendChild(preco)
        tr.appendChild(acoes)

        tableHtml.appendChild(tr)
    }
}
tablePizza()

function editarPizza(id){
    var pizza = httpGet(`http://matheustir.ddns.net:8081/produtos/${id}`)
    console.log(pizza)

    pizza = JSON.parse(pizza)
    console.log(pizza)

    var tabela = document.querySelector('#tablePizza')
    var div = document.querySelector('#containerPizza')
    tabela.remove()
    var divEdit = document.createElement('div')
    divEdit.setAttribute('class', 'cadPizza__form')
    divEdit.setAttribute('id', 'divEditPizza')
    divEdit.innerHTML = `
                    <div class="cadPizza__input-box">
                        <span class="details">Nome da Pizza</span>
                        <input type="text" name="" id="" placeholder="Nome da pizza" value="${pizza.nome}">
                    </div>
                    <div class="cadPizza__input-box">
                        <span class="details">Preço</span>
                        <input type="text" name="" id="" placeholder="50,00" value = "${pizza.preco}">
                    </div>
                    <div class="cadPizza__btn">
                        <input type="submit" value="Atualizar" onclick = "edit(${id})">
                    </div>
                    <div class="cadPizza__btn">
                        <input type="submit" value="Deletar" onclick = "remove(${id})">
                    </div>
                    <div class="cadPizza__btn">
                        <input type="submit" value="Cancelar" onclick="troca()">
                    </div>

    `
    div.appendChild(divEdit)
}

function troca(){
    var div = document.querySelector('#divEditPizza')
    div.remove()
    tablePizza()
}

function edit(pizza){
    console.log(`Pizza de id ${pizza} atualizada`)
}

function remove(pizza){
    console.log(`Pizza de id ${pizza} removida`)
}



