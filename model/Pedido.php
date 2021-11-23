<?php

class Pedido {
    private $id;
    private $instante;

    function __construct($id, $instante) {
        $this->id = $id;
        $this->instante = $instante;
    }

    public function getId() {
        return $this->id;
    }
    public function getInstante() {
        return $this->instante;
    }
    public function setId($id) {
        $this->id = $id;
    }
    public function setInstante($instante) {
        $this->instante = $instante;
    }

    public function toString() {
        return "id: " . $this->getId() . "; instante: " . $this->getInstante();
    }
}
