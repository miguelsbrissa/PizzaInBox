<?php
require_once "../model/BaseEntity.php";

interface GenericDAO {

    public function saveOrUpdate(BaseEntity $entity);

    public function delete(BaseEntity $entity);

    public function findById($id);

    public function findAll();

    public function saveOrUpdateAll(BaseEntity $entity);
}