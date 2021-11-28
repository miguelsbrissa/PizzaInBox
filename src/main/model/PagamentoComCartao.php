<?php

class PagamentoComCartao extends Pagamento{
    private $numeroDeParcelas;

    public function __construct($numeroDeParcelas) {
        $this->numeroDeParcelas = $numeroDeParcelas;
    }
    public function getNumeroDeParcelas(){
        return $this->numeroDeParcelas;
    }
    public function setNumeroDeParcelas($numeroDeParcelas){
        $this->numeroDeParcelas = $numeroDeParcelas;
    }
}

