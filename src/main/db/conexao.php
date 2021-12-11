<?php


   class Conexao {


       // Atributos
       private $banco = "mysql";
       private $host = "mysql://mysql-db.cpw6enartacu.us-east-1.rds.amazonaws.com";
       private $usuario = "admin";
       private $senha = "lKW5ltZngVyNHUyhVQmp";
       private $dbase = "pizzainbox";


       public function Conexao() {
           // Não faz nada ainda
       }


       public function getConexao() {
           $param = $this->banco . ":host=" . $this->host . ";dbname=" . $this->dbase;           
           return  new PDO($param, $this->usuario, $this->senha);
       }

   }

?>