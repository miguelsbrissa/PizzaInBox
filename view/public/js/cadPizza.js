import api from './services/api.js'

const endpoint = '/produtos'

const adicionaPizza = async function addPizza() {
	console.log('adicionando pizza...')
	var nome = document.querySelector('#nomePizza')
	var preco = document.querySelector('#precoPizza')
	var descricao = document.querySelector('#ingPizza')
	await api
		.post(`${endpoint}`, {
			nome: nome.value,
			preco: preco.value,
			descricao: descricao.value,
		})
		.then((response) => {
			if (response.status >= 200 && response.status <= 400) {
				limpar()
				alert('Pizza adicionada com sucesso')
			}
		})
		.catch((err) => {
			console.error('Erro na tela de cadastro de pizza\n' + err)
		})
}

const limpar = () => {
	var nome = document.querySelector('#nomePizza')
	var preco = document.querySelector('#precoPizza')
	var ing = document.querySelector('#ingPizza')

	nome.value = ''
	preco.value = ''
	ing.value = ''
	const urlRedirect = '/admin/'
	window.location.href = urlRedirect
	console.log(window.location.href)
}

export default adicionaPizza
