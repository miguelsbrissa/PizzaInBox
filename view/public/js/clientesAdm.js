import api from './services/api.js'

const endpoint = '/clientes'

 async function getUsers() {
		return api
			.get(`${endpoint}`)
			.then((response) => {
				if (response.status >= 200 && response.status <= 400) {
					console.info(`resposta getUsers : `)
					console.info(response)
					return response.data
				}
			})
			.catch((err) => {
				console.error(`Erro na busca de usuários \n${err}`)
			})
 } 

export const table = async () => {
    let clientesResponse = await getUsers();
		clientesResponse = clientesResponse.content
		console.log("linhas: \n")
    let  linhas = clientesResponse
		console.log(linhas)
    let container = document.querySelector('#containerPizza')
    let tableHtml = document.createElement("table")
    tableHtml.setAttribute('class', 'conPizza__table')
    tableHtml.setAttribute('id', 'tablePizza')
    let trH = document.createElement("tr")
    trH.setAttribute('class', 'conPizza__header')
    let tdId = document.createElement("td")
    let tdNome = document.createElement("td")
    let tdCpf = document.createElement("td")
    let tdAcao = document.createElement("td")
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
		let i = 0
    for (let linha of linhas) {
        let tr = document.createElement("tr")
        let id = document.createElement("td")
        let nome = document.createElement("td")
        let cpf = document.createElement("td")
        let acoes = document.createElement("td")

        tr.setAttribute('id', linha.id)
        tr.setAttribute('class', "pedidos__content")

        id.innerHTML = i++
        nome.innerHTML = linha.name
        cpf.innerHTML = linha.document
        acoes.innerHTML = `
    <a href="#" class="pedidos__btn" onclick="remove(${linha.id})">
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
table()

export async function remove(id){
	api.delete(`${endpoint}/${id}`, ).then((response) => {
	if (response.status >= 200 && response.status <= 400) {
		location.reload()
	}
})
.catch((err) => {
		console.error("Erro no login\n" + err);
		alert("Erro na exclusão de cliente!");
 });

    
}
