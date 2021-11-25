<?php

interface GenericService {
    public function saveOrUpdate(BaseEntity $entity);

    public function delete(BaseEntity $entity);

    public function findById($id);

    public function findAll();
}