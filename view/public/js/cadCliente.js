import api from './services/api.js'

const endpoint = '/clientes'
class Cliente {
	constructor(cpf, nome, email, telefone) {
		;(this.cpf = cpf),
			(this.nome = nome),
			(this.email = email),
			(this.telefone = telefone)
	}
}

class Login {
	constructor(user, password) {
		;(this.user = user), (this.password = password)
	}
}
class Endereco {
	constructor(cep, logradouro, numero, bairro, complemento, estado, cidade) {
		;(this.logradouro = logradouro),
			(this.numero = numero),
			(this.bairro = bairro),
			(this.complemento = complemento),
			(this.estado = estado),
			(this.cidade = cidade),
			(this.cep = cep)
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
	if(cliente.password === null || login.password === '') {
		console.error('O cpf está em branco!')
		alert('O cpf está em branco!\n')
		return
	}
	if(login.password === null || login.password === ''){
		console.error('A senha esta em branco!')
		alert('A senha esta em branco!\n')
		return
	}

	if (login.password === senhaConfirmada) {
		const clienteResponse = await sendUser(cliente)
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
			enderecos: [cliente.endereco],
			login: cliente.login
		})
		.then((response) => {
			if (response.status >= 200 && response.status <= 400) {
				console.info(`resposta usuario : `)
				console.info(response)
				alert('Cadastrado com sucesso!\n')
			}
		})
		.catch((err) => {
			console.error(`Erro no cadastro do usuário\n${err}`)
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
