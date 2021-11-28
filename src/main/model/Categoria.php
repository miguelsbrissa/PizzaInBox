<?php

class Categoria {
    private $id;
    private $nome;

    function __construct($id, $nome) {
        $this->id = $id;
        $this->nome = $nome;
    }
    public function getId() {
        return $this->id;
    }
    public function getNome() {
        return $this->nome;
    }
    public function setId($id) {
        $this->id = $id;
    }
    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function toString() {
        return "id: " . $this->getId() . "; nome: "  . $this->getNome() .
            ";";
    }
}
