//Equipe: Adauto Pinheiro, Jorge Girão, Jose Sergio, Andersson Cláudio

//Carro Builder

class Carro {
    constructor(cor, ano, nome, montadora) {
      this.cor = cor
      this.ano = ano
      this.nome = nome 
      this.montadora = montadora
    }
    drive() {
      console.log(`dirigindo`)
    }
    reverse() {
      console.log(`ré`)
    }
  }
  
  class carroBuilder {
    constructor(montadora, nome) {
      this.montadora = montadora
      this.nome = nome
    }
    setAno(ano) {
      this.ano = ano
      return this
    }
    setCor(cor) {
      this.cor = cor
      return this
    }
    build() {
      if (!('ano' in this)) {
        throw new Error('Faltando o ano')
      }
      if (!('cor' in this)) {
        throw new Error('Faltando a cor')
      }
      return new Carro(this.cor, this.ano, this.nome, this.montadora)
    }
  }
  
  let Fusca = new carroBuilder('volkswagen', 'fusca')
    .setAno(1970)
    .setCor("preto")
    .build()
  
  console.log(Fusca)