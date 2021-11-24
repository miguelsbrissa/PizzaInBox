<?php
require_once "Login.php";
require_once "Endereco.php";
require_once "Telefone.php";

class Cliente {
    private $id;
    private $nome;
    private $email;
    private $cpf;
    private Login $login;
    private Endereco $endereco;
    private Telefone $telefone;

    function __construct($id, $nome, $email, $cpf, Login $login, Endereco $endereco, Telefone $telefone) {
        $this->id = $id;
        $this->nome = $nome;
        $this->email = $email;
        $this->cpf = $cpf;
        $this->login = $login;
        $this->endereco = $endereco;
        $this->telefone = $telefone;
    }

    public function getId() {
        return $this->id;
    }

    public function getNome() {
        return $this->nome;
    }
    public function getEmail() {
        return $this->email;
    }
    public function getCpf() {
        return $this->cpf;
    }
    public function getLogin() {
        return $this->login;
    }
    public function getEndereco() {
        return $this->endereco;
    }
    public function getTelefone() {
        return $this->telefone;
    }
    public function setId($id) {
        $this->id = $id;
    }
    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function setCpf($cpf) {
        $this->cpf = $cpf;
    }
    public function setLogin($login) {
        $this->login = $login;
    }
    public function setEndereco($endereco) {
        $this->endereco = $endereco;
    }
    public function setTelefone($telefone) {
        $this->telefone = $telefone;
    }
    public function toString() {
        return "id: " . $this->getId() . "; nome: "  . $this->getNome() .
            "; email: " . $this->getEmail() . "; Cpf: " . $this->getCpf()
            . "; Login: [" . $this->getLogin()->toString() . "]; Endereco: [" . $this->getEndereco()->toString() . "]" . "; Telefone: [" . $this->getTelefone()->toString() . "] \n";
    }
}
