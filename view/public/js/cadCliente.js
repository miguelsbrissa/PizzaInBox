import api from './services/api.js'

const endpoint = '/clientes'
const endpointGetId = `${endpoint}/findByCpf`
const endpointLogin = '/logins'
class Cliente {
	constructor(cpf, nome, email, telefone) {
		;(this._cpf = cpf),
			(this._nome = nome),
			(this._email = email),
			(this._telefone = telefone)
	}
	get cpf() {
		return this._cpf
	}
	set cpf(cpf) {
		this._cpf = cpf
	}
	get nome() {
		return this._nome
	}
	set nome(nome) {
		this._nome = nome
	}
	get email() {
		return this._email
	}
	set email(email) {
		this._email = email
	}
	get telefone() {
		return this._telefone
	}
	set telefone(telefone) {
		this._telefone = telefone
	}
	get endereco() {
		return this._endereco
	}
	set endereco(endereco) {
		this._endereco = endereco
	}
}

class Login {
	constructor(usuario, senha) {
		;(this._usuario = usuario), (this._senha = senha)
	}
	get usuario() {
		return this._usuario
	}
	set usuario(usuario) {
		this._usuario = usuario
	}
	get senha() {
		return this._senha
	}
	set senha(senha) {
		this._senha = senha
	}
}
class Endereco {
	constructor(cep, logradouro, numero, bairro, complemento, estado, cidade) {
		;(this._logradouro = logradouro),
			(this._numero = numero),
			(this._bairro = bairro),
			(this._complemento = complemento),
			(this._estado = estado),
			(this._cidade = cidade),
			(this._cep = cep)
	}
	get logradouro() {
		return this._logradouro
	}
	set logradouro(logradouro) {
		this._logradouro = logradouro
	}
	get numero() {
		return this._logradouro
	}
	set numero(numero) {
		this._logradouro = numero
	}
	get bairro() {
		return this._logradouro
	}
	set bairro(bairro) {
		this._logradouro = bairro
	}
	get estado() {
		return this._logradouro
	}
	set estado(estado) {
		this._logradouro = estado
	}
	get cidade() {
		return this._logradouro
	}
	set cidade(cidade) {
		this._logradouro = cidade
	}
	get cep() {
		return this._logradouro
	}
	set cep(cep) {
		this._logradouro = cep
	}
}
const adicionaCliente = async function addCliente() {
	let cpf = document.getElementById('cpfCliente').value
	let nome = document.getElementById('nomeCliente').value
	let email = document.getElementById('emailCliente').value
	let telefone = document.getElementById('telCliente').value
	let cliente = new Cliente(cpf, nome, email, telefone)

	let cep = document.getElementById('cepCliente').value
	let logradouro = document.getElementById('logradouroCliente').value
	let numero = document.getElementById('numeroCliente').value
	let bairro = document.getElementById('bairroCliente').value
	let complemento = document.getElementById('complementoCliente').value
	let estado =
		document.getElementById('estadoCliente')
		estado = estado.options[estado.selectedIndex].text
	let cidade = document.getElementById('cidadeCliente').value

	let endereco = new Endereco(
		cep,
		logradouro,
		numero,
		bairro,
		complemento,
		estado,
		cidade,
	)

	let usuario = document.getElementById('usuarioCliente').value
	let senha = document.getElementById('senhaCliente').value
	let login = new Login(usuario, senha)
	cliente.endereco = endereco
	cliente.login = login
	let senhaConfirmada = document.getElementById('confSenhaCliente').value
	if(cliente.cpf === null || login.senha === '') {
		console.error('O cpf está em branco!')
		alert('O cpf está em branco!\n')
		return
	}
	if(login.senha === null || login.senha === ''){
		console.error('A senha esta em branco!')
		alert('A senha esta em branco!\n')
		return
	}

	if (login.senha === senhaConfirmada) {
		const clienteResponse = await sendUser(cliente)
		const clienteId = await getUserAccountById(cliente.cpf)
		const addressResponse = await sendAdress(clienteId.id, endereco)
		const loginResponse = await sendLogin(clienteId.id, login)
	} else {
		console.error(`Senha do usuário diferente!${login}`)
		alert('Sua senha diverge da senha confirmada!')
	}
}

 function sendUser(cliente) {
	 api
		.post(`${endpoint}`, {
			nome: cliente.nome,
			email: cliente.email,
			cpfOuCnpj: cliente.cpf,
			tipo: 'PESSOAFISICA',
			statusPermissao: 'CLIENTE',
			telefones: [cliente.telefone],
		})
		.then((response) => {
			if (response.status >= 200 && response.status <= 400) {
				console.info(`resposta usuario : `)
				console.info(response)
			}
		})
		.catch((err) => {
			console.error(`Erro no cadastro do usuário\n${err}`)
		})
}

function getUserAccountById(cpf) {
	 return api
		.get(`${endpointGetId}`, {
			params: {
				cpf: cpf,
			},
		})
		.then((response) => {
			if (response.status >= 200 && response.status <= 400) {
				console.info(`getUsarAccountById: `)
				console.info(response)
				return response.data
			}
		})
		.catch((err) => {
			console.error('Erro no getId' + err)
		})
}

 function sendAdress(clienteId, endereco) {
	 api
		.post(`${endpoint}/${clienteId}/enderecos`, {
			logradouro: endereco.logradouro,
			numero: endereco.numero,
			complemento: endereco.complemento,
			bairro: endereco.bairro,
			cep: endereco.cep,
			cidade: endereco.cidade,
			estado: endereco.estado,
		})
		.then((response) => {
			if (response.status >= 200 && response.status <= 400) {
				console.log(`respota:`)
				console.log(response)
			}
		})
		.catch((err) => {
			console.error('Erro no cadastro de endereço\n' + err)
			throw err
		})
}

 function sendLogin(clienteId, login) {
	 api
		.post(endpointLogin, {
			user: login.usuario,
			password: login.senha,
			statusPermissao: 'CLIENTE',
			clienteId: clienteId,
		})
		.then((response) => {
			if (response.status >= 200 && response.status <= 400) {
				console.info(`resposta login:`)
				console.log(response)
				alert('Cadastro concluído😎😎😎!')
				limpar()
			}
		})
		.catch((err) => {
			console.error('Erro no cadastro de login\n' + err)
			alert('Erro no cadastro!')
		})
}

const limpar = () => {
	let cpf = document.querySelector('#cpfCliente')
	let nome = document.querySelector('#nomeCliente')
	let email = document.querySelector('#emailCliente')
	let telefone = document.querySelector('#telCliente')
	let cep = document.querySelector('#cepCliente')
	let logradouro = document.querySelector('#logradouroCliente')
	let numero = document.querySelector('#numeroCliente')
	let bairro = document.querySelector('#bairroCliente')
	let complemento = document.querySelector('#complementoCliente')
	let estado = document.querySelector('#estadoCliente')
	let cidade = document.querySelector('#cidadeCliente')
	let usuario = document.querySelector('#usuarioCliente')
	let senha = document.querySelector('#senhaCliente')
	let senhaConfirmada = document.querySelector('#confSenhaCliente')

	cpf.value = ''
	nome.value = ''
	email.value = ''
	telefone.value = ''
	cep.value = ''
	logradouro.value = ''
	numero.value = ''
	bairro.value = ''
	complemento.value = ''
	estado.value = ''
	cidade.value = ''
	usuario.value = ''
	senha.value = ''
	senhaConfirmada.value = ''
	window.location.href = '/login'
}

export default adicionaCliente
