<?php

abstract class Pagamento {
    private $id;
    private EstadoPagamento $estadoPagamento;

    public function __construct($id) {
        $this->id = $id;
    }
    public function getId() {
        return $this->id;
    }
    public function setId($id) {
        $this->id = $id;
    }
    public function getEstadoPagamento() {
        return $this->estadoPagamento;
    }
    public function setEstadoPagamento($id) {
        $this->estadoPagamento;
    }
    public function toString() {
        return "id: " . $this->getId();
    }
}
