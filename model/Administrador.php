<?php
require_once "Login.php";

class Administrador {
    private $id;
    private $nome;
    private $email;
    private $cpf;
    private $login;

    function __construct($id, $nome, $email, $cpf, $login) {
        $this->id = $id;
        $this->nome = $nome;
        $this->email = $email;
        $this->cpf = $cpf;
        $this->login = $login;
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
    public function setId($id) {
        $this->id = $id;
    }
    public function setEmail($email) {
        $this->email = $email;
    }
    public function setNome($nome) {
        $this->nome = $nome;
    }
    public function setCpf($cpf) {
        $this->cpf = $cpf;
    }
    public function setLogin($login) {
        $this->login = $login;
    }
}
