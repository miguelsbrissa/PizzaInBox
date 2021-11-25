<?php

abstract class BaseEntity {
    private $id;
    private $regDate;
    private $modDate;

    function __construct($id) {
        $this->id = $id;
    }
    public function getId() {
        return $this->id;
    }
    public function getRegDate() {
        return $this->regDate;
    }
    public function getModDate() {
        return $this->modDate;
    }
    public function setModDate($modDate) {
        $this->modDate = $modDate;
    }
    public function setId($id) {
        $this->id = $id;
    }
    public function configurationDateCreationModification() {
        $this->modDate = new DateTime();
        if ($this->dataCriacao == null) {
            $this->dataCriacao = new DateTime();
        }
    }
    public function toString() {
        return "id: " . $this->getId() . "; nome: ";
    }
}
