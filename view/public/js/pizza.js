import api from './services/api.js'

const endpoint = '/produtos'

async function getProdutos() {
	return api
	 .get(`${endpoint}`,)
	 .then((response) => {
		 if (response.status >= 200 && response.status <= 400) {
			 console.info(`resposta produtos : `)
			 console.info(response)
			 return response.data
		 }
	 })
	 .catch((err) => {
		 console.error(`Erro no cadastro do usuário\n${err}`)
	 })
} 

async function updateProdutoById(id, nome, preco, ingrediente) {
	 api
	 .put(`${endpoint}/${id}`, {
		 id : id,
		 nome: nome,
		 preco: preco,
		 descricao: ingrediente
	 })
	 .then((response) => {
		 if (response.status >= 200 && response.status <= 400) {
			 console.info(`resposta produto by id : `)
			 console.info(response)
			 alert('Pizza atualizada com sucesso')
			 limpar()
		 }
	 })
	 .catch((err) => {
		 console.error(`Erro na atualização do produto\n${err}`)
		 alert('Erro ao salvar o produto.')
	 })
} 

async function getProdutoById(id) {
	return api
	 .get(`${endpoint}/${id}`,)
	 .then((response) => {
		 if (response.status >= 200 && response.status <= 400) {
			 console.info(`resposta produto by id : `)
			 console.info(response)
			 return response.data
		 }
	 })
	 .catch((err) => {
		 console.error(`Erro no cadastro do usuário\n${err}`)
	 })
} 
async function deleteProdutoById(id) {
	return api
	 .delete(`${endpoint}/${id}`,)
	 .then((response) => {
		 if (response.status >= 200 && response.status <= 400) {
			 console.info(`resposta delete produto by id : `)
			 console.info(response)
			 alert("Produto deletado com sucesso!")
			 limpar()
		 }
	 })
	 .catch((err) => {
		 console.error(`Erro no cadastro do usuário\n${err}`)
		 alert("Erro na deleçào do produto.")
	 })
} 

export async function tablePizza() {
    const table = await getProdutos()
    var linhas = table

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
    var tdIng = document.createElement("td")
    var tdAcao = document.createElement("td")
    tdId.innerHTML = '#'
    tdNome.innerHTML = 'Nome'
    tdPreco.innerHTML = 'Preço'
    tdIng.innerHTML = 'Ingredientes'
    tdAcao.innerHTML = 'Ação'
    trH.appendChild(tdId)
    trH.appendChild(tdNome)
    trH.appendChild(tdPreco)
    trH.appendChild(tdIng)
    trH.appendChild(tdAcao)
    tableHtml.appendChild(trH)
    container.appendChild(btnAdd)
    container.appendChild(tableHtml)
    for (var i = 0; i < linhas.content.length; i++) {
        var tr = document.createElement("tr")
        var id = document.createElement("td")
        var nome = document.createElement("td")
        var preco = document.createElement("td")
        var ing = document.createElement("td")
        var acoes = document.createElement("td")

        tr.setAttribute('id', linhas.content[i].id)
        tr.setAttribute('class', "pedidos__content")

        id.innerHTML = i + 1
        nome.innerHTML = linhas.content[i].nome
        preco.innerHTML = `R$ ${linhas.content[i].preco}`
        ing.innerHTML = `${linhas.content[i].descricao}`
        acoes.innerHTML = `
    <a href="#" class="pedidos__btn" onclick="editarPizza(${linhas.content[i].id})">
    <i class="fas fa-eye"></i> Editar
</a>
    `
        tr.appendChild(id)
        tr.appendChild(nome)
        tr.appendChild(preco)
        tr.appendChild(ing)
        tr.appendChild(acoes)

        tableHtml.appendChild(tr)
    }
}
tablePizza()

export async function editarPizza(id){
    var pizza = await getProdutoById(id)
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
                        <input type="text" name="" id="precoPizza" placeholder="50.00" value = "${pizza.preco}">
                    </div>
                    <div class="cadPizza__input-box">
                        <span class="details">Ingredientes</span>
                        <input type="text" name="" id="ingPizza" placeholder="Mussarela, Calabresa..." value = "${pizza.descricao}">
                    </div>
                    <div class="cadPizza__btn">
                        <input type="submit" value="Atualizar" onclick = "edit(${id})">
                    </div>
                    <div class="cadPizza__btn">
                        <input type="submit" value="Deletar" onclick = "remove(${id})">
                    </div>
                    <div class="cadPizza__btn">
                        <input type="submit" value="Voltar" onclick="troca()">
                    </div>

    `
    div.appendChild(divEdit)
}

export function voltaTela(){
    var div = document.querySelector('#divEditPizza')
    div.remove()
    tablePizza()
}

export async function updateProduto(id){
    var nome = document.querySelector('#nomePizza').value
    var preco = document.querySelector('#precoPizza').value
    var descricao = document.querySelector('#ingPizza').value
		if(preco === ''){
			alert("Preço não pode ser vazio")
			return
		}
		updateProdutoById(id, nome, preco, descricao)
 
}

export function deleteProduto(id){
    deleteProdutoById(id)   
}

function limpar(){
    var nome = document.querySelector('#nomePizza')
    var preco = document.querySelector('#precoPizza')
    var ing = document.querySelector('#ingPizza')

    nome.value = ""
    preco.value = ""
    ing.value = ""
    location.href = '/admin'
}

