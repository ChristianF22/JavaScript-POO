class Property{
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMater(){
        return this.price / this.area
    }
}


class House extends Property{}

const land = new Property(250, 50000)
const someHouse = new House(120, 20000)

console.log(land)
console.log(someHouse.getPricePerSquareMater())

class Apartment extends Property{
    constructor(number,area, price){
      super(area, price)
      this.number = number
    }

    getFloof(){
        return this.number.slice(0, -2)
    }
}

const apt = new Apartment("201", 100,8000)

console.log(apt)
console.log(apt.getFloof())