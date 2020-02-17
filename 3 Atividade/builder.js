//Equipe: Adauto Pinheiro, Jorge Girão, Jose Sergio, Andersson Cláudio

//Celular Builder

class Celular {
    constructor(cor, ano, nome, montadora) {
      this.cor = cor
      this.ano = ano
      this.nome = nome 
      this.montadora = montadora
    }
    ligar() {
      console.log(`ligação`)
    }
    desligar() {
      console.log(`desligando ligação`)
    }
  }
  
  class celularBuilder {
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
      return new Celular(this.cor, this.ano, this.nome, this.montadora)
    }
  }
  
  let celular = new celularBuilder('Samsung', 'S20')
    .setAno(2020)
    .setCor("preto")
    .build()
  
  console.log(celular)