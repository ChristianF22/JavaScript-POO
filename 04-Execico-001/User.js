class User {
    constructor(fullname, email, password) {
      this.fullname = fullname
      this.email = email
      this.password = password
    }
  
    login(email, password) {
      if (this.email === email && this.password === password) {
        console.log('Login realizado com sucesso.')
      } else {
        console.log('Falha ao fazer login! Email ou senha incorretos.')
      }
    }
  }
  
  const crf = new User("Christian", "christianFRP@email.com", "54634")
  
  crf.login("christianFRP@email.com", "54634")
//  crf.login("christian@gmail.com", "1231231212")