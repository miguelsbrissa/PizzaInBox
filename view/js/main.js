//menu
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

//pagamento
const rdbBoleto = document.querySelector('#rdbBoleto');
const rdbCredito = document.querySelector('#rdbCredito');
const boleto = document.querySelector('.cadPagamento__boleto')
const credito = document.querySelector('.cadPagamento__credito')
const htmlBol = `
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
const htmlCred = `<div class="cadPagamento__input-box">
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

rdbBoleto.addEventListener('click', togglePagamento);
rdbCredito.addEventListener('click', togglePagamento);

//funcoes
function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

function togglePagamento() {
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

function addPizza() {
  location.href = "cadPizza.html"
}

function addPedido() {
  location.href = "cadPedido.html"
}

function addEndereco() {
  location.href = "cadPedEndereco.html"
}

function addPagamento() {
  location.href = "cadPedPagamento.html"
}