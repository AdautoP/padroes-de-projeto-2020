//Equipe: Adauto Pinheiro, Jorge Girão, Jose Sergio, Andersson Cláudio

//Abstract Products

class AbstractProductA {
    constructor() {
        const proto = Object.getPrototypeOf(this);
        if (proto.constructor === AbstractProductA) {
          throw new Error('Abstract class should not be instanciated');
        }
      }

    usefulFunctionA() {
        throw new Error('Method is not implemented');
    }
}

class AbstractProductB {
    constructor() {
        const proto = Object.getPrototypeOf(this);
        if (proto.constructor === AbstractProductB) {
          throw new Error('Abstract class should not be instanciated');
        }
      }

    usefulFunctionB() {
        throw new Error('Method is not implemented');
    }
}

//Concrete Products

class ConcreteProductA extends AbstractProductA {

    usefulFunctionA() {
        //implement the behavior of the mandatory function
    }
}

class ConcreteProductB extends AbstractProductB {

    usefulFunctionB() {
        //implement the behavior of the mandatory function
    }
}

// Abstract factory
class AbstractFactory {
    constructor() {
        const proto = Object.getPrototypeOf(this);
        if (proto.constructor === AbstractFactory) {
          throw new Error('Abstract class should not be instanciated');
        }
      }

    createProductA() {
        throw new Error('Method is not implemented');
    }

    createProductB() {
        throw new Error('Method is not implemented');
    }
}

//Concrete Factory
class ConcreteFactory extends AbstractFactory {
    createProductA() {
        //example 
        return new ConcreteProductA()

    }
    createProductB () {
        //example
        return new ConcreteProductB()
    }
}

let factory = new ConcreteFactory()
let productA = factory.createProductA()
let productB = factory.createProductB()

console.log("ProducA:" + productA)
console.log("ProducB:" + productB)