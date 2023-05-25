const App = require("./App")

App.createUser("christian@email.com", "Christian Fonseca")
App.createUser("mayara@email.com", "Mayara Aguiar")
App.createUser("juliana@email.com", "Juliana Conde")

App.deposit("christian@email.com", 50000)

App.transfer("christian@email.com", "mayara@email.com", 30000)

App.changeLoanFee(10)
App.takeLoan("juliana@email.com", 2000, 10)

console.log(App.findUser("christian@email.com"))
console.log(App.findUser("christian@email.com").account)
console.log(App.findUser("mayara@email.com"))
console.log(App.findUser("mayara@email.com").account)
console.log(App.findUser("juliana@email.com"))
console.log(App.findUser("juliana@email.com").account)
console.log(App.findUser("juliana@email.com").account.loans[0].installments)