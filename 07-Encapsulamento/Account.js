class Account{
    #password
    #balance = 40.768
    constructor(user){
       this.email = user.email
       this.#password = user.password
    }

    getBalance(email, password){
        if(this.#authenticate(email, password)){
            return this.#balance
        }else{
            return null
        }
    }
    #authenticate(email, password){
        return this.email === email && this.#password === password
    }
}

const user ={
    email: "christian@gamil.com",
    password: "12458"
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance("christian@gamil.com", "12458"))
