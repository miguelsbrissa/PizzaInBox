<?php

class Telefone {
    private $numero;

    function __construct($numero) {
        $this->numero = $numero;
    }
    public function setNumero($numero) {
        $this->numero = $numero;
    }
    public function getNumero() {
        return $this->numero;
    }
    public function toString() {
        return "numero: " . $this->getNumero();
    }
}
