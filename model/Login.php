<?php

class Login {
    private $id;
    private $usuario;
    private $senha;

    function __construct($id, $usuario, $senha) {
        $this->id = $id;
        $this->usuario = $usuario;
        $this->senha = $senha;
    }

    public function getId() {
        return $this->id;
    }

    public function getusuario() {
        return $this->usuario;
    }
    public function getsenha() {
        return $this->senha;
    }
    public function setId($id) {
        $this->id = $id;
    }
    public function setsenha($senha) {
        $this->senha = $senha;
    }
    public function setusuario($usuario) {
        $this->usuario = $usuario;
    }
}
