import bodyParser from "body-parser";
import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8081;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/js'))
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' })
})
app.get('/login', (req, res) => {
  res.render('pages/login', {title: 'Login'})
})
app.get('/contato', (req, res) => {
  res.render('pages/contact', {title: 'Contato'})
})

app.get('/login/cadastrar', (req, res) => {
  res.render('pages/cadUsuario', {title: 'Cadastro'})
})

app.get('/pedidos',(req, res) => {
  res.render('pages/cadPedido', {title: 'Pedido'})
})
app.get('/admin',(req, res) => {
  res.render('pages/homeAdmin', {title: 'Admin'})
})
app.get('/admin/clientes',(req, res) => {
  res.render('pages/clientesAdm', {title: 'Clientes admin'})
})
app.get('/admin/pedidos',(req, res) => {
  res.render('pages/pedidosAdm', {title: 'Pedidos admin'})
})
app.get('/admin/cadastro/pizza',(req, res) => {
  res.render('pages/cadPizzaAdm', {title: 'Cadastrar pizza admin'})
})

app.listen(port, () => console.log(`Executando na porta ${port}...`));