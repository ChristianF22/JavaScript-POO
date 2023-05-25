class Car{
    constructor(marca,modelo,ano){
       this.marca = marca
       this.modelo = modelo
       this.ano = ano
       this.estoque = 0
    }
   esto(quantidade){
    this.estoque += quantidade
   }
}

const car1 = new Car("BMW", "x7", 2023)
const car2 = new Car("Lamborghini", "Urus",2022)
const car3 = new Car("Bugatti", "Chiron Super Sport 300+",2023 )

car1.esto(6)
car2.esto(8)
car3.esto(2)

console.log(car1)
console.log(car2)
console.log(car3)

