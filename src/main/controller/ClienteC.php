<?php

   require_once '../model/Cliente.php';
   require_once '../model/ClienteDAO.php';

   // Caso o usuário escolha o botão inserir
   if (isset($_POST['btnInsere'])) {
       try {
            $cli = new ClienteDAO(new Cliente($_POST['txtNome'], $_POST['txtEndereco'], $_POST['txtIdade'], $_POST['chkAtivo'], $_POST['txtSenha']));

            if ($cli->insCliente()) {
                echo "Cliente inserido com sucesso !";
            } else {
                echo "Erro ao inserir cliente";
            }

       } catch (Exception $ex) {
           echo "Erro ao inserir cliente " . $ex->getMessage();

       } 
   // Caso escolha o botão Atualiar
   } else if (isset($_POST['btnAtualiza'])) {
         try {
             $cli = new ClienteDAO(new Cliente($_POST['txtNome'], $_POST['txtEndereco'], $_POST['txtIdade'], $_POST['chkAtivo'], $_POST['txtSenha'], $_POST['txtCodigo']));

            if ($cli->atuCliente()) {
                echo "Cliente atualizado com sucesso !";
            } else {
                echo "Erro ao atualizar cliente";
            }

        } catch (Exception $ex) {
            echo "Erro ao atualizar cliente " . $ex->getMessage();

        } 
   // Caso o usuário clique no botão excluir
   } else {
        try {
            $cli = new ClienteDAO(new Cliente($_POST['txtNome'], $_POST['txtEndereco'], $_POST['txtIdade'], $_POST['chkAtivo'], $_POST['txtSenha'], $_POST['txtCodigo']));

            if ($cli->excCliente()) {
                echo "Cliente excluido com sucesso !";
            } else {
                echo "Erro ao excluir cliente";
            }

         } catch (Exception $ex) {
            echo "Erro ao excluir cliente " . $ex->getMessage();

        } 


   }

?>