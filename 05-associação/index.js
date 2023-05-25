const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Walter Pompeu", 696, "Álvaro Weyne", "Fotaleza","CE")
const crf = new Person("Christian", addr)

console.log(crf)
console.log(crf.address.fullAddress())