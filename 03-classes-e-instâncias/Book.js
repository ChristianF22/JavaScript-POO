class Book{
  constructor(title,author,page){
    this.title = title
    this.author = author
    this.page = page
    this.published = false
  }
  publish(){
    this.published = true
  }

}

const bookPF = new Book("Pisicologia Financeira","Morgan Housel", 301)
const cgf = new Book("A Guerra dos Tronos", "Georger R.R. Martin",587)

bookPF.publish()

console.log(bookPF)
console.log(cgf)

// O instanceof serve para verificar se a instancia bookPF perdence a class Book
console.log(bookPF instanceof Book)
console.log(cgf instanceof Book)