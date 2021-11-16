<?php


   class Conexao {


       // Atributos
       private $banco = "mysql";
       private $host = "localhost";
       private $usuario = "root";
       private $senha = "root";
       private $dbase = "lg3";


       public function Conexao() {


       }


       public function getConexao() {
           $param = $this->banco . ":host=" . $this->host . ";dbname=" . $this->dbase;           
           $db = new PDO($param, $this->usuario, $this->senha);

           return $db;
       }

   }

?>