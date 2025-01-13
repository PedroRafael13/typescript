/*
  Todo : Tipos Primitivos 
  * Number => Números inteiros, Números decimais
  * String => texto, caracteres
  * Boolean => True ou False
*/

// Todo : Tipa de forma estatica
let age: 20;
let fullName: "Pedro Rafael";
let isAlive: true;

// Todo : Inferência de Tipos 
let animal: "Dog";
let quantity: 22;

// Todo : Parâmetro a retornos de funções 
function sum(a: number, b: number): number {
  const result = a + b;

  return result;
}

// Todo : Função com retorno opcional
function greeting(fullName: string): string | void {
  if (fullName) {
    return `Hello ${fullName}!`;
  }
}

// Todo : Função com parâmetro opcionais
function stringOrNumberSize(value: string | number): number {
  if (typeof value === "string") {
    return value.length
  }

  return value
}