<?php

namespace test;


use PHPUnit\Framework\TestCase;
require_once "Login.php";

class LoginTest extends TestCase {
    
    public function testLogin_Autentication_Accept() {
        $login = new Login(1, "admin", "123mudar");
        $this->assertEquals("admin", $login->getUsuario());
    }
}
