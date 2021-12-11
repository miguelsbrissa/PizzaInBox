<?php

abstract class EstadoPagamento extends BasicEnum {
    const PENDENTE = 0;
    const QUITADO = 1;
    const CANCELADO = 2;
}
