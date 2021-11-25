<?php
require_once "Pedido.php";
require_once "Produto.php";

class ItemPedidoPK {
    private Pedido $pedido;
    private Produto $produto;

    public function getPedido() {
        return $this->pedido;
    }
    public function setPedido(Pedido $pedido) {
        $this->pedido = $pedido;
    }
    public function getProduto() {
        return $this->produto;
    }
    public function setProduto(Produto $produto) {
        $this->produto = $produto;
    }
}
