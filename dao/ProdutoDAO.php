<?php

    require_once 'conexao.php';
    require_once 'Produto.php';


    class ProdutoDAO {

        private $cli;

        public function ProdutoDAO($ocli) {

            $this->cli = $ocli;

        }

        // Método responsáve por inserir registro na tabela Produto
        public function insProduto() {

            $db = new Conexao();

            try {
                $con = $db->getConexao();

                $sql = <<<HTML
                    INSERT INTO Produto(NOME, DESCRICAO, PRECO) VALUES (?,?,?)
HTML;

                $stm = $con->prepare($sql);

                $con->beginTransaction();

                $stm->execute([ $this->cli->getNome(), $this->cli->getDescricao(), $this->cli->getPreco() ]);

                $con->commit();

                return 1;
            } catch (Exception $ex) {
                return 0;
            }

        }

        // Método responsável por atualizar registro na tabela Produto
        public function atuProduto() {

                $db = new Conexao();
    
                try {
                    $con = $db->getConexao();

                    $sql = <<<HTML
                    UPDATE Produto SET NOME=?, DESCRICAO=?, PRECO=?
                    WHERE COD_Produto=?
HTML;

                    $stm = $con->prepare($sql);

                    $con->beginTransaction();

                    $stm->execute([$this->cli->getNome(), $this->cli->getDescricao(), $this->cli->getPreco(), $this->cli->getId() ]);

                    $con->commit();

                    return 1;
                } catch (Exception $ex) {
                    return 0;
                }
        }

        // Método responsável por excluir registro na tabela Produto
        public function excProduto() {
            $db = new Conexao();
    
            try {
                $con = $db->getConexao();

                $sql = <<<HTML
                DELETE FROM Produto
                WHERE COD_Produto=?
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