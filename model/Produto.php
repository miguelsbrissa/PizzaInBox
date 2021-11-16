<?php
    class Produto{
        private $id;
        private $nome;
        private $descricao;
        private $preco;

        function __construct($id, $nome, $descricao, $preco){
            $this->id = $id;
            $this->nome = $nome;
            $this->descricao = $descricao;
            $this->preco = $preco;
        }

        public function getId() {
            return $this->id;
        }
        public function setId($id) {
            $this->id = $id;
        }

        public function getNome(){
            return $this->nome;
        }
        public function setNome($nome) {
            $this->nome = $nome;
        }

        public function getDescricao(){
            return $this->descricao;
        }
        public function setDescricao($descricao) {
            $this->descricao = $descricao;
        }

        public function getPreco(){
            return $this->preco;
        }
        public function setPreco($preco) {
            $this->preco = $preco;
        }
    }