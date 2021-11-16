<?php

class Endereco {
    private $id;
    private $numero;
    private $complemento;
    private $cep;

    function __construct($id, $numero, $complemento, $cep) {
        $this->id = $id;
        $this->numero = $numero;
        $this->complemento = $complemento;
        $this->cep = $cep;
    }
    

    public function getId() {
        return $this->id;
    }

    public function getNumero() {
        return $this->numero;
    }
    public function getComplemento() {
        return $this->complemento;
    }
    public function getCep() {
        return $this->cep;
    }
    public function setId($id) {
        $this->id = $id;
    }
    public function setComplemento($complemento) {
        $this->complemento = $complemento;
    }
    public function setNumero($numero) {
        $this->numero = $numero;
    }
    public function setCep($cep) {
        $this->cep = $cep;
    }
}
