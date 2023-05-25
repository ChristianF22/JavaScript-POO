class Wallet{
    #amount
    #username
    constructor(){
        this.#amount = 100.99 * 100
    }

    get amount(){
        return this.#amount / 100
    }

    set userName(newUserName){
        if(typeof newUserName ==='string'){
            this.#username = newUserName
        }else{
            console.log("Username must be of type string")
        }
    }

    get userName(){
        return this.#username
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.userName = "Christian"
console.log(myWallet.userName)

myWallet.userName += " Fonseca"
console.log(myWallet.userName)

myWallet.userName = true