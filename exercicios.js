// -------------------------------------

/**
 * Função que calcula a soma de 2 números
 * @param {1337} a - O primeiro número.
 * @param {3301} b - O segundo número.
 * @returns {4638} A soma dos dois numeros
 */
function soma(a, b) {
  // @todo implementar retorno da operação aqui
  return a+b

}
let vsoma=soma(1337,3301);
console.log(vsoma);

/**
 * Função que calcula a multiplicação de 2 números
 * @param {3} a - O primeiro número.
 * @param {11} b - O segundo número.
 * @returns {33} A multiplicação dos dois numeros
 */
function multiplicacao(a, b) {
  // @todo implementar retorno da operação aqui
  return a*b
 
}
let multi=multiplicacao(3,11);
console.log(multi);
/**
 * Função que calcula a divisão de 2 números
 * @param {10} a - O primeiro número.
 * @param {2} b - O segundo número.
 * @returns {5} A divisão dos dois numeros
 */
function divisao(a, b) {
// @todo implementar retorno da operação aqui
  return a/b
  
}
let divi=divisao(10,2);
console.log(divi);
/**
 * Função que calcula a subtração de 2 números
 * @param {3301} a - O primeiro número.
 * @param {1337} b - O segundo número.
 * @returns {1964} A subtração dos dois numeros
 */
function subtracao(a, b) {
  // @todo implementar retorno da operação aqui
  return a-b
  
}
let sub=subtracao(3301,1337);
console.log(sub);
/**
 * Função que resto da divisão de 2 números
 * @param {15} a - O primeiro número.
 * @param {4} b - O segundo número.
 * @returns {3} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
  // @todo implementar retorno da operação aqui
  return a%b
  
}
let mod=modulo(15,4);
console.log(mod);
/**
 * Função que calcula o maior número entre 2
 * @param {13} a - O primeiro número.
 * @param {33} b - O segundo número.
 * @returns {33} O maior número
 */
function max(a, b) {
  // @todo implementar retorno da operação aqui
  return Math.max(a,b)
  
}
let maxx=max(13,33);
console.log(maxx);
// -------------------------------------

/**
 * Função que concatena 2 strings utilizando template strings
 * @param {"Hello"} a - A primeira string
 * @param {"World"} b - A segunda string
 * @returns {"Hello World"} As 2 strings concatenadas
 */
function strConcat(a, b) {
  // @todo implementar retorno da operação aqui
  return (a+" "+b)

}
let sconca=strConcat("Hello","World");
console.log(sconca);
// --------------------------------------

/**
 * Função que implementa controle de fluxo
 * 
 * @param {10} numero - O número em questão
 * @returns {"Igual a 10"} 
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
function retornaNumero(numero) {
  // @todo implementar retorno da operação aqui
 if(numero>10){
  return "Maior que 10"
 }else if(numero<10){
  return "Menor que 10"
 }else{
  return "Igual a 10"
 }
let num=retornaNumero(10);
console.log(num);
}

// --------------------------------------

/**
 * Função que valida se o número em questão é positivo
 * @param {5} num - Número em questão
 * @returns {true} Retorna true para números positivos
 */
function ehPositivo(num) {
  // @todo implementar retorno da operação aqui
 if(num>0){
 return true
 }else{
 return false 
 }
 
}
let positi=ehPositivo(5);
console.log(positi);

module.exports = 
{ 
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};
