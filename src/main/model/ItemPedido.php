<?php
require_once "Pedido.php";
require_once "Produto.php";
require_once "ItemPedidoPK.php";

class ItemPedido {
    private $preco;
    private $quantidade;
    private $desconto;
    private ItemPedidoPK $id;

    function __construct(Pedido $pedido, Produto $produto, $preco, $quantidade, $desconto) {
        $this->id->setPedido($pedido);
        $this->id->setProduto($produto);
        $this->preco = $preco;
        $this->quantidade = $quantidade;
        $this->desconto = $desconto;
    }
    public function getPreco() {
        return $this->preco;
    }
    public function setPreco($preco) {
        $this->preco = $preco;
    }
    public function getQuantidade() {
        return $this->quantidade;
    }
    public function setQuantidade($quantidade) {
        $this->desconto = $quantidade;
    }
    public function getDesconto() {
        return $this->desconto;
    }
    public function setDesconto($desconto) {
        $this->desconto = $desconto;
    }
    public function getPedido() {
        return $this->id->pedido;
    }
    public function setPedido(Pedido $pedido) {
        $this->id->pedido = $pedido;
    }
    public function getProduto() {
        return $this->id->produto;
    }
    public function setProduto(Produto $produto) {
        $this->id->produto = $produto;
    }
}
