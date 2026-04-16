let c = 0
let soma = 0
let media = 0
let numeros = []
let itens = []
function adicionarNumero() {
    let num = document.getElementById('numero')
    let anali = document.getElementById('analisador')
    let res = document.getElementById('res') // Pega a div de resultado
    res.innerHTML = '' 
    if (num.value.length == 0 || num.value == 0) {
        alert('Por favor, digite um número!')
    }
    else {
        let n = Number(num.value)

        if (n < 1 || n > 100) {
            alert('Número inválido! Digite um valor entre 1 e 100.')
        } else {
        let n = Number(num.value)
        let item = document.createElement('option')
        numeros.push(n)
        item.text = `Valor ${n} adicionado.`
        anali.appendChild(item)
        num.value = ''
        num.focus()
        c += 1
        soma += n
        }
    }
}

function finalizar() {
    
let res = document.getElementById('res') // Pega a div de resultado
let anali = document.getElementById('analisador') // Pega a div de análise
    
    if (numeros.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {

        media = soma / c
        res.innerHTML = '' 
        anali.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${numeros.length}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${Math.max(...numeros)}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${Math.min(...numeros)}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media.toFixed(2)}</strong>.</p>`
        numeros = []  
        soma = 0      
        c = 0         
        
} }
