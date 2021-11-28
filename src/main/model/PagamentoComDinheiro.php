<?php

class PagamentoComDinheiro extends Pagamento {
    private $dataDePagamento;

    public function __construct($dataDePagamento) {
        $this->dataDePagamento = $dataDePagamento;
    }
    public function getdataDePagamento() {
        return $this->dataDePagamento;
    }
    public function setdataDePagamento($dataDePagamento) {
        $this->dataDePagamento = $dataDePagamento;
    }
}
