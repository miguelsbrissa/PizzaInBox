<?php
   class Cliente {
       
       // atributos
       private $Id = null;
       private $nome;
       private $endereco;
       private $idade;
       private $ativo;
       private $senha;
       // construtor 1
       public function __construct($pn, $pe, $pi, $pa, $ps, $pc=null) {
            $this->Id = $pc;
            $this->nome =$pn;
            $this->endereco = $pe;
            $this->idade = $pi;
            $this->ativo = $pa;
            $this->senha = $ps;
                 
       }

       public function getId() {
           return $this->Id;
       }

       public function getEndereco() {
        return $this->endereco;
       }

       public function getNome() {
        return $this->nome;
       }

       public function getIdade() {
        return $this->idade;
       }

       public function getAtivo() {
        return $this->ativo;
       }

       public function getSenha() {
        return $this->senha;
       }

       public function setId($pc) {
        $this->Id =$pc;
       }

       public function setEndereco($pe) {
          $this->endereco = $pe;
       }

        public function setNome($pn) {
            $this->nome =$pn;
        }

        public function setIdade($pi) {
            $this->idade = $pi;
        }

        public function setAtivo($pa) {
           $this->ativo = $pa;
        }

         public function setSenha($ps) {
            $this->senha = $ps;
        }
   }
