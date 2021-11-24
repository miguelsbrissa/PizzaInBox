<?php
require_once "Administrador.php";
require_once "Cliente.php";

print "Administrador: " . "\n";
$login = new Login(2, "admin", "123mudar");
$endereco = new Endereco(null, 1, "casa", 123);
$admin = new Administrador(1, "admin", "admin@email.com", 12345678909, $login, $endereco);
print $admin->toString();


$login2 = new Login(2, "admin", "123mudar");
$endereco2 = new Endereco(null, 1, "casa", 123);
$telefone2 = new Telefone(1133842312);

$cliente = new Cliente(1, "cliente", "cliente@email.com", 12345678909, $login2, $endereco2, $telefone2);
print "Cliente: " . "\n";
print $cliente->toString();

