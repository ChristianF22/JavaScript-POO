class Product{
    constructor(name,description,price){
      this.name = name
      this.description = description
      this.price = price
      this.inStock = 0
    }
    calculateDiscount(discount){
       return this.price *((100- discount)/ 100)
    }
  
    addToStock(quantidade){
        this.inStock += quantidade
    }
}

const product1 = new Product("MackBook Pro","Um excelente notebook para trabalho",55.350)
product1.addToStock(20)

console.log(product1)
console.log(product1.calculateDiscount(85))