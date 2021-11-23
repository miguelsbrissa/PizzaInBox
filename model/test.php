<?php
require_once "Administrador.php";

$login = new Login(2, "admin", "123mudar");
$endereco = new Endereco(null, 1, "casa", 123);
$admin = new Administrador(1, "admin", "admin@email.com", 12345678909, $login, $endereco);
print $admin->toString();