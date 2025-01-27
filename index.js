const botaoDoNao = document.getElementById('botao2')
const botaoDoSim = document.getElementById('botao1')
const caixaFujonaId = document.getElementById('caixa')

const botaoSim = document.querySelector('#botao1')
const corpo = document.querySelector('#paiDeTodos')
const caixaFujona = document.querySelector('#caixa')
const letra = document.querySelector('#mensagem')

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

    // corpo.style.backgroundImage = 'url(./capturaDeTela.png)'

    caixaFujonaId.innerHTML = '<h3 id="mensagem">Trabalhando Alegre?!</h3><h5>Feliz pela sua proatividade</h5>'
    letra.style.margin = '0 2rem'

    // botaoDoSim.innerHTML = 'Ebah!'
    
    // botaoSim.style.width = '80%'
    
    caixaFujona.style.gridColumn = 3
    caixaFujona.style.gridRow = 3

    botaoDoNao.remove()

})