const botaoDoNao = document.getElementById('botao2')
const botaoDoSim = document.getElementById('botao1')
const caixaFujonaId = document.getElementById('caixa')

const caixaFujona = document.querySelector('#caixa')

botaoDoNao.addEventListener('mouseover', () => {

    let limite = Math.floor(Math.random() * 5) + 1
    let limite2 = Math.floor(Math.random() * 5) + 1

    console.log('Limite 1 = ' + limite)
    console.log('Limite 2 = ' + limite2)

    caixaFujona.style.gridColumn = limite
    caixaFujona.style.gridRow = limite2

})

botaoDoNao.addEventListener('click', () => {

    let limite = Math.floor(Math.random() * 5) + 1
    let limite2 = Math.floor(Math.random() * 5) + 1

    console.log('Limite 1 = ' + limite)
    console.log('Limite 2 = ' + limite2)

    caixaFujona.style.gridColumn = limite
    caixaFujona.style.gridRow = limite2

})

botaoDoSim.addEventListener('click', () =>{

    document.getElementById("mensagem").textContent = "Trabalhando Alegre?!"
    document.getElementById("mensagem2").textContent = "Feliz pela sua proatividade"

    document.getElementById("botao1").textContent = ""
    document.getElementById("botao2").textContent = ""

    document.getElementById("botoes", "botao1", "botao2").style.height = 0
    document.getElementById("botoes", "botao1", "botao2").style.width = 0
    document.getElementById("botoes").style.margin = 0
    
    botaoDoNao.remove()
    caixaFujona.style.gridColumn = 3
    caixaFujona.style.gridRow = 3

})