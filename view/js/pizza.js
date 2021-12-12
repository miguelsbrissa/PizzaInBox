function httpGet(url) {
    var html = new XMLHttpRequest();
    html.open("get", url, false)
    html.send(null)
    return html.responseText;
}

function tablePizza() {
    const table = httpGet("https://pizza-in-box.herokuapp.com/produtos/");
    var linhas = table.split(",")
    //console.log(table)
    linhas = JSON.parse(linhas)
    //console.log(linhas.content[0].nome)

    var btnAdd = document.createElement('div')
    btnAdd.setAttribute('class', 'homeAdmin__button')
    btnAdd.setAttribute('id', 'btnAddPizza')
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
<<<<<<< HEAD
=======
    var tdIng = document.createElement("td")
>>>>>>> release/1.7
    var tdAcao = document.createElement("td")
    tdId.innerHTML = '#'
    tdNome.innerHTML = 'Nome'
    tdPreco.innerHTML = 'Preço'
<<<<<<< HEAD
=======
    tdIng.innerHTML = 'Ingredientes'
>>>>>>> release/1.7
    tdAcao.innerHTML = 'Ação'
    trH.appendChild(tdId)
    trH.appendChild(tdNome)
    trH.appendChild(tdPreco)
<<<<<<< HEAD
=======
    trH.appendChild(tdIng)
>>>>>>> release/1.7
    trH.appendChild(tdAcao)
    tableHtml.appendChild(trH)
    container.appendChild(btnAdd)
    container.appendChild(tableHtml)
    for (var i = 0; i < linhas.content.length; i++) {
        var tr = document.createElement("tr")
        var id = document.createElement("td")
        var nome = document.createElement("td")
        var preco = document.createElement("td")
<<<<<<< HEAD
=======
        var ing = document.createElement("td")
>>>>>>> release/1.7
        var acoes = document.createElement("td")

        tr.setAttribute('id', linhas.content[i].id)
        tr.setAttribute('class', "pedidos__content")

        id.innerHTML = i + 1
        nome.innerHTML = linhas.content[i].nome
        preco.innerHTML = `R$ ${linhas.content[i].preco}`
<<<<<<< HEAD
=======
        ing.innerHTML = `${linhas.content[i].descricao}`
>>>>>>> release/1.7
        acoes.innerHTML = `
    <a href="#" class="pedidos__btn" onclick="editarPizza(${linhas.content[i].id})">
    <i class="fas fa-eye"></i> Editar
</a>
    `
        tr.appendChild(id)
        tr.appendChild(nome)
        tr.appendChild(preco)
<<<<<<< HEAD
=======
        tr.appendChild(ing)
>>>>>>> release/1.7
        tr.appendChild(acoes)

        tableHtml.appendChild(tr)
    }
}
tablePizza()

function editarPizza(id){
    var pizza = httpGet(`https://pizza-in-box.herokuapp.com/produtos/${id}`)
    console.log(pizza)

    pizza = JSON.parse(pizza)
    console.log(pizza)

    var tabela = document.querySelector('#tablePizza')
    var div = document.querySelector('#containerPizza')
    var btn = document.querySelector('#btnAddPizza')
    btn.remove()
    tabela.remove()
    var divEdit = document.createElement('div')
    divEdit.setAttribute('class', 'cadPizza__form')
    divEdit.setAttribute('id', 'divEditPizza')
    divEdit.innerHTML = `
                    <div class="cadPizza__input-box">
                        <span class="details">Nome da Pizza</span>
                        <input type="text" name="" id="nomePizza" placeholder="Nome da pizza" value="${pizza.nome}">
                    </div>
                    <div class="cadPizza__input-box">
                        <span class="details">Preço</span>
                        <input type="text" name="" id="precoPizza" placeholder="50,00" value = "${pizza.preco}">
                    </div>
<<<<<<< HEAD
=======
                    <div class="cadPizza__input-box">
                        <span class="details">Ingredientes</span>
                        <input type="text" name="" id="ingPizza" placeholder="Mussarela, Calabresa..." value = "${pizza.descricao}">
                    </div>
>>>>>>> release/1.7
                    <div class="cadPizza__btn">
                        <input type="submit" value="Atualizar" onclick = "edit(${id})">
                    </div>
                    <div class="cadPizza__btn">
                        <input type="submit" value="Deletar" onclick = "remove(${id})">
                    </div>
                    <div class="cadPizza__btn">
<<<<<<< HEAD
                        <input type="submit" value="Cancelar" onclick="troca()">
=======
                        <input type="submit" value="Voltar" onclick="troca()">
>>>>>>> release/1.7
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
    var nome = document.querySelector('#nomePizza')
    var preco = document.querySelector('#precoPizza')
<<<<<<< HEAD
=======
    var ing = document.querySelector('#ingPizza')
>>>>>>> release/1.7
    var html = new XMLHttpRequest();
    html.open("put", `https://pizza-in-box.herokuapp.com/produtos/${pizza}`, true)
    html.setRequestHeader('Content-Type', 'application/json')
    html.send(JSON.stringify({
        "id": pizza,
        "nome": nome.value,
<<<<<<< HEAD
        "preco": preco.value
=======
        "preco": preco.value,
        "descricao": ing.value
>>>>>>> release/1.7
    }))
    alert('Pizza atualizada com sucesso')
    limpar()
}

function remove(pizza){
<<<<<<< HEAD
    console.log(`Pizza de id ${pizza} removida`)
=======
    var html = new XMLHttpRequest();
    html.open("delete", `https://pizza-in-box.herokuapp.com/produtos/${pizza}`, true)
    html.setRequestHeader('Content-Type', 'application/json')
    html.send(JSON.stringify({
        "id": pizza
    }))
    alert(`Pizza removida com sucesso`)
    limpar()
>>>>>>> release/1.7
}

function limpar(){
    var nome = document.querySelector('#nomePizza')
    var preco = document.querySelector('#precoPizza')
<<<<<<< HEAD

    nome.value = ""
    preco.value = ""
=======
    var ing = document.querySelector('#ingPizza')

    nome.value = ""
    preco.value = ""
    ing.value = ""
>>>>>>> release/1.7
}

