var minhaVariavel = "Olá, mundo!";

// Função simples
function minhaFuncao() {
  console.log("Esta é uma função da MinhaLib");
}

// Função que aceita parâmetros
function somar(a, b) {
  return a + b;
}

// Expondo funcionalidades publicamente
// Isso é necessário para que outras partes do código possam acessar essas funções e variáveis
module.exports = {
  minhaVariavel: minhaVariavel,
  minhaFuncao: minhaFuncao,
  somar: somar
};
