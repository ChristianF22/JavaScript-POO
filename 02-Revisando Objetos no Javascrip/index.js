
// FUNÇÕES CONSTRUTORAS
function Book (title, page, tags, author){
    this.title = title
    this.page = page
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock (quantity){
        this.inStock += quantity
    }
    this.save = function (){
        // Salva no banco de dados
    }
}

const eragon = new Book("Eragon", 468, "fantasy , adventure", "Christopher Paolini")

// console.log(eragon)

//CONSTRUINDO OUTRO LIVRO
const NewBook = new Book("A Pisicologia Financeira", 301,"Lições atemporais sobre fortuna, Ganância e Felicidade", "Morgan Housel")

// console.log(NewBook)

// EXECÍCIO 001:
function Car (marca,modelo,cor,ano){
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
    this.ano = ano
}

const NewCar = new Car("BMW", "X6","Azul",2022)
console.log(NewCar)

const NewCar02 = new Car("Mercedes", "G63-AMG", "Black", 2023)
console.log(NewCar02)
