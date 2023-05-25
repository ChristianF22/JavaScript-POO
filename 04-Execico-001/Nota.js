class Nota {
    constructor(nome,idade,matricula,nota){
      this.nome = nome
      this.idade = idade
      this.matricula = matricula
      this.nota = nota
   }

    result(n1,n2,n3,n4){
     this.nota = (n1 + n2 + n3 + n4)/3
     if(this.nota >= 7){
       console.log("Aprovado!!")
     }else if(this.nota < 7){
        console.log("Recuperação")
     }else{
        console.log("Reprovado")
     }
     
 }
}

const aluno1 = new Nota("Ana Paula", "16 anos", "1-2023243")
aluno1.result(8, 7, 6, 4)
console.log(aluno1)

const aluno2 = new Nota("João Barbosa", "18 anos", "1-2023453")
aluno2.result(3 , 5, 10, 8)
console.log(aluno2)

const aluno3 = new Nota("Ana Clara", "19 anos", "1-2023768")
aluno3.result(2,2,0,5)
console.log(aluno3)