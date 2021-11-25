<?php

  require_once '../model/conexao.php';

  try {
    $con = new Conexao();

    $con->getConexao();

    echo "Conexao OK";
  } catch (Exception $ex) {
    echo "Erro ao conectar" . $ex->getMessage();
  }

?>