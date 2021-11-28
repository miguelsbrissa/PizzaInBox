<?php

    require_once 'conexao.php';
    require_once 'Cliente.php';


    class ClienteDAO {

        private $cli;

        public function ClienteDAO($ocli) {

            $this->cli = $ocli;

        }

        // Método responsáve por inserir registro na tabela Cliente
        public function insCliente() {

            $db = new Conexao();

            try {
                $con = $db->getConexao();

                $sql = <<<HTML
                    INSERT INTO CLIENTE(NOME, ENDERECO, SENHA, IDADE, ATIVO) VALUES (?,?,?,?,?)
HTML;

                $stm = $con->prepare($sql);

                $con->beginTransaction();

                $stm->execute([$this->cli->getNome(), $this->cli->getEndereco(), $this->cli->getSenha(), $this->cli->getIdade(), $this->cli->getAtivo() ]);

                $con->commit();

                return 1;
            } catch (Exception $ex) {
                return 0;
            }

        }

        // Método responsável por atualizar registro na tabela Cliente
        public function atuCliente() {

                $db = new Conexao();
    
                try {
                    $con = $db->getConexao();

                    $sql = <<<HTML
                    UPDATE CLIENTE SET NOME=?, ENDERECO=?, SENHA=?, IDADE=?, ATIVO=? 
                    WHERE COD_CLIENTE=?
HTML;

                    $stm = $con->prepare($sql);

                    $con->beginTransaction();

                    $stm->execute([$this->cli->getNome(), $this->cli->getEndereco(), $this->cli->getSenha(), $this->cli->getIdade(), $this->cli->getAtivo(), $this->cli->getId() ]);

                    $con->commit();

                    return 1;
                } catch (Exception $ex) {
                    return 0;
                }
        }

        // Método responsável por excluir registro na tabela Cliente
        public function excCliente() {
            $db = new Conexao();
    
            try {
                $con = $db->getConexao();

                $sql = <<<HTML
                DELETE FROM CLIENTE
                WHERE COD_CLIENTE=?
HTML;

                $stm = $con->prepare($sql);

                $con->beginTransaction();

                $stm->execute([$this->cli->getId() ]);

                $con->commit();

                return 1;
            } catch (Exception $ex) {
                return 0;
            }
        }


     }
?>