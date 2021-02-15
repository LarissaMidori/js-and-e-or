var idade = 27;
var preco = 0;
var IDADE_MIN = 12;
var IDADE_MAX = 65;
var PRECO_CHEIO = 8.50;
var PRECO_DESCONTADO = 6.50;

if (idade > IDADE_MIN && idade < IDADE_MAX) 
{
  preco = PRECO_CHEIO;
} else
{
  preco = PRECO_DESCONTADO;
}

console.log(preco)