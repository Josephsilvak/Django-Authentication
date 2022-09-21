let nome = document.getElementById('username')
let nomeLabel = document.getElementById('usernameLabel')
let validNome = false

let email = document.getElementById('email')
let emailLabel = document.getElementById('emailLabel')
let validEmail = false

let senha = document.getElementById('senha')
let senhaLabel = document.getElementById('senhaLabel')
let validSenha = false

let senhaNv = document.getElementById('senhaNv')
let senhaNvLabel = document.getElementById('senhaNvLabel')
let validSenhaNv = false

let userLog = document.getElementById('userLog')
let userLogLabel = document.getElementById('userLogLabel')

let senhaLog = document.getElementById('senhaLog')
let senhaLogLabel = document.getElementById('senhaLogLabel')









// botão de visualizar senha do login e cadastro
    let verSenha = document.querySelector('#verSenha')
verSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    

    if(inputSenha.getAttribute('type') == 'password'){

        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

    let verSenhaNv = document.querySelector('#verSenhaNv')
verSenhaNv.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senhaNv')
    

    if(inputSenha.getAttribute('type') == 'password'){

        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

    let verSenhaLog = document.querySelector('#verSenhaLog')
verSenhaLog.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senhaLog')
    

    if(inputSenha.getAttribute('type') == 'password'){

        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})


//faz a verificação de caracters Cadastro e Login
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        nomeLabel.style.color = 'rgb(255 46 0)'
        if(nome.value != ''){
            nomeLabel.innerHTML = 'Nome: *insira no mínimo 3 caracters'
        } else {
            nomeLabel.innerHTML = 'Nome:'
        }
        nome.style.borderBottom = '2px dashed rgb(255 46 0)'
        validNome = false
    } else {
        nomeLabel.style.color = 'rgb(0 250 0 / 100%)'
        nomeLabel.innerHTML = 'Nome:'
        nome.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 12){

        emailLabel.style.color = 'rgb(255 46 0)'
        if(email.value != ''){
            emailLabel.innerHTML = 'E-mail: *insira um email válido!'
        } else {
            emailLabel.innerHTML = 'E-mail:'
        }
        email.style.borderBottom = '2px dashed rgb(255 46 0)'
        validEmail = false
    } else {
        emailLabel.style.color = 'rgb(0 255 0 / 60%)'
        emailLabel.innerHTML = 'E-mail:'
        email.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7){
        senhaLabel.style.color = 'rgb(255 46 0)'
        if(senha.value != ''){
            senhaLabel.innerHTML = 'Senha: *insira no mínimo 8 caracters'
        } else {
            senhaLabel.innerHTML = 'Senha:'
        }
        senha.style.borderBottom = '2px dashed rgb(255 46 0)'
        validSenha = false
    } else {
        senhaLabel.style.color = 'rgb(0 255 0 / 60%)'
        senhaLabel.innerHTML = 'Senha:'
        senha.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
        validSenha = true
    }
})

senhaNv.addEventListener('keyup', () => {

    if(senhaNv.value != senha.value || senhaNv.value == '' || senhaNv.value.length < 8 ){
        senhaNvLabel.style.color = 'rgb(255 46 0)'
        if(senhaNv.value != ''){
            senhaNvLabel.innerHTML = 'Senha novamente: *As senhas não conferem'
        } else {
            senhaNvLabel.innerHTML = 'Senha novamente:'
        }
        senhaNv.style.borderBottom = '2px dashed rgb(255 46 0)'
        validSenhaNv = false
    } else {
        senhaNvLabel.style.color = 'rgb(0 255 0 / 60%)'
        senhaNvLabel.innerHTML = 'Senha novamente:'
        senhaNv.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
        validSenhaNv = true
    }
})

userLog.addEventListener('keyup', () => {
    if(userLog.value.length <= 2){
        userLogLabel.style.color = 'rgb(255 46 0)'
        userLog.style.borderBottom = '2px dashed rgb(255 46 0)'
    } else {
        userLogLabel.style.color = 'rgb(0 255 0 / 60%)'
        userLog.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
    }
})

senhaLog.addEventListener('keyup', () => {
    if(senhaLog.value.length <= 7){
        senhaLogLabel.style.color = 'rgb(255 46 0)'
        senhaLog.style.borderBottom = '2px dashed rgb(255 46 0)'
    } else {
        senhaLogLabel.style.color = 'rgb(0 255 0 / 60%)'
        senhaLog.style.borderBottom = '2px dashed rgb(0 255 0 / 60%)'
    }
})