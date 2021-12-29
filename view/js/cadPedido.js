function httpGet(url) {
    var html = new XMLHttpRequest();
    html.open("get", url, false)
    html.send(null)
    return html.responseText;
}

function tablePizzas() {
    var divF = document.querySelector('#formPedido')
    const table = httpGet("https://pizza-in-box.herokuapp.com/produtos/");
    var linhas = table.split(",")
    linhas = JSON.parse(linhas)

    var tableHtml = document.createElement("table")
    tableHtml.setAttribute('class', 'cadPedido__table')
    tableHtml.setAttribute('id', 'tablePizza')
    divF.appendChild(tableHtml)
    for (let i of linhas.content.length) {
        var tr = document.createElement("tr")
        var nome = document.createElement("td")
        var preco = document.createElement("td")
        var ing = document.createElement("td")
        var acoes = document.createElement("td")

        tr.setAttribute('id', linhas.content[i].id)
        tr.setAttribute('class', "cadPedido__content")

        nome.innerHTML = linhas.content[i].nome
        preco.innerHTML = `R$ ${linhas.content[i].preco}`
        ing.innerHTML = `${linhas.content[i].descricao}`
        acoes.innerHTML = `
    <a href="#" class="cadPedido__btn" onclick="cart(${linhas.content[i].id})">
    <i class="fas fa-eye"></i> Adicionar
</a>
    `
        tr.appendChild(nome)
        tr.appendChild(preco)
        tr.appendChild(ing)
        tr.appendChild(acoes)

        tableHtml.appendChild(tr)
    }
    divF.appendChild(tableHtml)

    var divSum = document.createElement('div')
    divSum.setAttribute('class', 'cadPedido__total')
    divSum.innerHTML = 'R$'
    divF.appendChild(divSum)

    var btnSelEnd = document.createElement('div')
    btnSelEnd.setAttribute('class', 'cadPedido__button')
    btnSelEnd.innerHTML = `
    <input type="submit" value="Selecionar endereço" onclick="addEndereco()">
    `

    divF.appendChild(btnSelEnd)
}

tablePizzas()

function addEndereco() {
    var divF = document.querySelector('#formPedido')
    divF.innerHTML = `
    <div class="cadPedido__label">
        <span class="cadPedido__details" id="labelPedido"></span>
    </div>
    `
    var label = document.querySelector('#labelPedido')
    label.innerHTML = "Selecione o endereco"

    var divRdbGroup = document.createElement('div')
    divRdbGroup.setAttribute('class', 'cadEndereco__radio-group')

    //for ini
    var divRdbItem = document.createElement('div')
    divRdbItem.setAttribute('class', 'cadEndereco__radio-item')
    divRdbItem.innerHTML = `
    <input type="radio" id="casa" name="endereco" value="casa">
    <label for="casa">Casa</label>
    <br>
    <span>
        Rua: Florian Peixoto, 123; Bairro: Centro; Cidade: Itu
    </span>
    `
    divRdbGroup.appendChild(divRdbItem)
    //for fim

    divF.appendChild(divRdbGroup)

    var divBtnAdd = document.createElement('div')
    divBtnAdd.setAttribute('class', 'cadEndereco__add')
    divBtnAdd.innerHTML = `
    <a href="#!">
    <i class="fas fa-plus fa-2x"></i>
    Adicionar endereco
</a>
    `
    divF.appendChild(divBtnAdd)

    var btnSelPag = document.createElement('div')
    btnSelPag.setAttribute('class', 'cadEndereco__button')
    btnSelPag.innerHTML = `
    <input type="submit" value="Selecionar método de pagamento" onclick="addPag()">
    `

    divF.appendChild(btnSelPag)
}

function addPag() {
    var divF = document.querySelector('#formPedido')
    divF.innerHTML = `
    <div class="cadPedido__label">
        <span class="cadPedido__details" id="labelPedido"></span>
    </div>
    `
    var label = document.querySelector('#labelPedido')
    label.innerHTML = "Selecione o método de pagamento:"

    var divRdbGroup = document.createElement('div')
    divRdbGroup.setAttribute('class', 'cadPagamento__radio-group')

    var divRdbPixBoleto = document.createElement('div')
    divRdbPixBoleto.setAttribute('class', 'cadPagamento__radio-item')
    divRdbPixBoleto.innerHTML = `
    <input type="radio" id="rdbBoleto" name="pagamento" value="boleto" onclick="togglePagamento()">
                            <label for="boleto">Boleto/PIX</label>
    `
    var divRdbCredito = document.createElement('div')
    divRdbCredito.setAttribute('class', 'cadPagamento__radio-item')
    divRdbCredito.innerHTML = `
    <input type="radio" id="rdbCredito" name="pagamento" value="credito" onclick="togglePagamento()">
                            <label for="credito">Carta de crédito</label>
    `
    divRdbGroup.appendChild(divRdbPixBoleto)
    divRdbGroup.appendChild(divRdbCredito)

    var divBol = document.createElement('div')
    divBol.innerHTML = ''
    var divCred = document.createElement('div')
    divCred.innerHTML = ''
    divBol.setAttribute('class', 'cadPagamento__boleto')
    divCred.setAttribute('class', 'cadPagamento__credito')

    divF.appendChild(divRdbGroup)
    divF.appendChild(divBol)
    divF.appendChild(divCred)

    var divBtnFim = document.createElement('div')
    divBtnFim.setAttribute('class', 'cadPedido__button')
    divBtnFim.innerHTML = `
    <input type="submit" value="Finalizar Pedido" onclick="finalizarPedido()">
    `

    divF.appendChild(divBtnFim)
}

function finalizarPedido(){

}

function togglePagamento() {
    var rdbBol = document.querySelector('#rdbBoleto');
    var rdbCred = document.querySelector('#rdbCredito');
    var boleto = document.querySelector('.cadPagamento__boleto')
    var credito = document.querySelector('.cadPagamento__credito')
    var htmlBol = `
                        <div class="cadPagamento__input-box">
                            <span class="details">CPF</span>
                            <input type="text" name="" id="" placeholder="CPF">
                        </div>
                        <div class="cadPagamento__input-box">
                            <span class="details">Primeiro nome</span>
                            <input type="text" name="" id="" placeholder="Primeiro nome">
                        </div>
                        <div class="cadPagamento__input-box">
                            <span class="details">Sobrenome</span>
                            <input type="text" name="" id="" placeholder="Sobrenome">
                        </div>
                        <div class="cadPagamento__input-box">
                            <span class="details">Estado</span>
                            <select id="estado" name="estado">
                              <option value="AC">Acre</option>
                              <option value="AL">Alagoas</option>
                              <option value="AP">Amapá</option>
                              <option value="AM">Amazonas</option>
                              <option value="BA">Bahia</option>
                              <option value="CE">Ceará</option>
                              <option value="DF">Distrito Federal</option>
                              <option value="ES">Espírito Santo</option>
                              <option value="GO">Goiás</option>
                              <option value="MA">Maranhão</option>
                              <option value="MT">Mato Grosso</option>
                              <option value="MS">Mato Grosso do Sul</option>
                              <option value="MG">Minas Gerais</option>
                              <option value="PA">Pará</option>
                              <option value="PB">Paraíba</option>
                              <option value="PR">Paraná</option>
                              <option value="PE">Pernambuco</option>
                              <option value="PI">Piauí</option>
                              <option value="RJ">Rio de Janeiro</option>
                              <option value="RN">Rio Grande do Norte</option>
                              <option value="RS">Rio Grande do Sul</option>
                              <option value="RO">Rondônia</option>
                              <option value="RR">Roraima</option>
                              <option value="SC">Santa Catarina</option>
                              <option value="SP">São Paulo</option>
                              <option value="SE">Sergipe</option>
                              <option value="TO">Tocantins</option>
                            </select>
                        </div>
                        <div class="cadPagamento__input-box">
                            <span class="details">Cidade</span>
                            <input type="text" name="" id="" placeholder="Cidade">
                        </div>
                        <div class="cadPagamento__input-box">
                            <span class="details">Rua</span>
                            <input type="text" name="" id="" placeholder="Rua">
                        </div>
                        <div class="cadPagamento__input-box">
                            <span class="details">CEP</span>
                            <input type="text" name="" id="" placeholder="CEP">
                        </div>
`
    var htmlCred = `<div class="cadPagamento__input-box">
                            <span class="details">Cartao</span>
                            <select name="credito" id="cboCred">
                                <option value="visa"> Visa</option>
                                <option value="mastercard"> Mastercard</option>
                                <option value="elo"> Elo</option>
                                <option value="hipercard"> Hipercard</option>
                                <option value="american"> American Express</option>
                            </select>
                        </div>
                        <div class="cadPagamento__input-box">
                            <span class="details">Número</span>
                            <input type="text" name="" id="" placeholder="Número do cartão">
                        </div>
                        <div class="cadPagamento__input-box">
                            <span class="details">Data de validade</span>
                            <input type="text" name="" id="" placeholder="MM/AA">
                        </div>
                        <div class="cadPagamento__input-box">
                            <span class="details">Titular do cartão</span>
                            <input type="text" name="" id="" placeholder="Titular do cartão">
                        </div>`

    if (rdbBoleto.checked) {
        boleto.innerHTML = htmlBol
    } else {
        boleto.innerHTML = ''
    }

    if (rdbCredito.checked) {
        credito.innerHTML = htmlCred
    } else {
        credito.innerHTML = ''
    }
}

function cart() {

}