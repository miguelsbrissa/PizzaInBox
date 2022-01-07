import api from './services/api.js'

const endpoint = '/clientes'

/**
 * User status.
 * @readonly
 * @enum {{id: integer, description: string}}
 */
 const PermissionStatus = Object.freeze({
	CUSTOMER: { id: 1, description: 'CUSTOMER' },
	ADMIN: { id:2, description: 'ADMIN' }
});

/**
 * Type of document.
 * @readonly
 * @enum {{id: integer, description: string}}
 */
 const DocumentType = Object.freeze({
	PF: { id: 1, description: 'PF' },
	PJ: { id:2, description: 'PJ' }
});

class Customer {
	constructor(document, name, email, cellphone) {
		(this.document = document),
			(this.name = name),
			(this.email = email),
			(this.cellphone = cellphone);
	}
}

class Login {
	constructor(user, password) {
		(this.user = user), (this.password = password);
	}
}
class Address {
	constructor(cep, street, number, district, complement, state, city) {
		(this.street = street),
			(this.number = number),
			(this.district = district),
			(this.complement = complement),
			(this.state = state),
			(this.city = city),
			(this.cep = cep);
	}
}
/**
 * Add the customers in system.
 *
 * @returns the function.
 */
const adicionaCliente = async function addCliente() {
	let cpf = document.getElementById('cpfCliente').value
	let nome = document.getElementById('nomeCliente').value
	let email = document.getElementById('emailCliente').value
	let telefone = document.getElementById('telCliente').value
	let customer = new Customer(cpf, nome, email, telefone)

	let cep = document.getElementById('cepCliente').value
	let logradouro = document.getElementById('logradouroCliente').value
	let numero = document.getElementById('numeroCliente').value
	let bairro = document.getElementById('bairroCliente').value
	let complemento = document.getElementById('complementoCliente').value
	let estado =
		document.getElementById('estadoCliente')
		estado = estado.options[estado.selectedIndex].text
	let cidade = document.getElementById('cidadeCliente').value

	let address = new Address(
		cep,
		logradouro,
		numero,
		bairro,
		complemento,
		estado,
		cidade,
	)

	let user = document.getElementById('usuarioCliente').value
	let password = document.getElementById('senhaCliente').value
	let login = new Login(user, password)
	customer.address = address
	customer.login = login
	let passwordConfirmed = document.getElementById('confSenhaCliente').value

	if(customer.password === null || customer.password === '') {
		console.error('O cpf está em branco!')
		alert('O cpf está em branco!\n')
		return
	}
	if(login.password === null || login.password === ''){
		console.error('A senha esta em branco!')
		alert('A senha esta em branco!\n')
		return
	}

	if (login.password === passwordConfirmed) {
		await sendUser(customer)
	} else {
		console.error(`Senha do usuário diferente!${login}`)
		alert('Sua senha diverge da senha confirmada!')
	}
}
/**
 * Do the requisition for backend for insert the customer with address and login.
 *
 * @param {Customer} customer the customer.
 * @async this requisition is async.
 * @author Matheus Tirabassi
 */
 async function sendUser(customer) {
	 api
		.post(`${endpoint}`, {
			name: customer.nome,
			email: customer.email,
			document: customer.document,
			documentType: DocumentType.PF.description,
			permissionStatus: PermissionStatus.CUSTOMER.description,
			cellphones: [customer.cellphone],
			addresses: [customer.address],
			login: customer.login
		})
		.then((response) => {
			if (response.status >= 200 && response.status <= 400) {
				console.info(`resposta usuario : `)
				console.info(response)
				alert('Cadastrado com sucesso!\n')
				limpar()
			}
		})
		.catch((err) => {
			console.error(`Erro no cadastro do usuário\n${err}`)
		})
} 
/**
 * Clear the form.
 */
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
