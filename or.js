var idade = 68;
var preco = 0;
var IDADE_MIN = 13;
var IDADE_MAX = 64;
var PRECO_CHEIO = 8.50;
var PRECO_DESCONTADO = 6.50;

if (idade < IDADE_MIN || idade > IDADE_MAX) 
{
  preco = PRECO_DESCONTADO;
} else
{
  preco = PRECO_CHEIO;
}

console.log(preco)