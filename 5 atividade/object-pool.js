class Pool{
  constructor(items) {
    this.items = items || [];
  }

  acquire = () => {
    if (this.items.length > 0) {
      return this.items.shift()
    }
    else {
      console.log("there are no objects available")
    }
  }

  release = item => {
    this.items.push(item);
  }
}

let depósitoDeCanetas = new Pool(["Caneta", "Caneta", "Caneta", "Caneta", "Caneta", "Caneta"]);
let lojaDecanetas = new Pool();

let canetasCompradas = [];

console.log("Canetas compradas:" + canetasCompradas.length)
console.log("Canetas da loja de canetas:" + lojaDecanetas.items.length)
console.log("Canetas da fabrica de canetas:" + depósitoDeCanetas.items.length)

lojaDecanetas.release(depósitoDeCanetas.acquire())

canetasCompradas.push(lojaDecanetas.acquire())

console.log("Canetas compradas:" + canetasCompradas.length)
console.log("Canetas da loja de canetas:" + lojaDecanetas.items.length)
console.log("Canetas da fabrica de canetas:" + depósitoDeCanetas.items.length)
