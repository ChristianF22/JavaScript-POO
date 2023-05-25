const Mage = require("./Mage")
const Thief = require("./Thief")
const Warrior = require("./Warrior")


const arthur = new Mage("Arthur", 150, 50,30,78)
const beatrice = new Thief("Beatrice", 98, 55,14)
const cain = new Warrior("Cain",200,80,90,60)

console.table({arthur,beatrice,cain})

cain.switchaStance()
arthur.attack(cain)
beatrice.attack(arthur)

console.table({arthur,beatrice,cain})

cain.switchaStance()
cain.attack(arthur)
arthur.heal()

console.table({arthur,beatrice,cain})

