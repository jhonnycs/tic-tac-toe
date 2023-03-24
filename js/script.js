let plays = document.getElementsByClassName('plays')
let iniOpt = document.getElementById("iniOpt")
let vezAtual = document.getElementById("vezAtual")
let positions = [[], [], []]
let playerInicial
let player
let jogadasCounter = 0

for (let i=0; i < plays.length; i++) {
    if ( i < 3 ) {
        positions[0].push(plays[i])
    } else  if ( i < 6) {
        positions[1].push(plays[i])
    } else {
        positions[2].push(plays[i])
    }
}

for (let i=0; i<positions.length; i++) {
    for (let j=0; j<positions[i].length; j++) {
        positions[i][j].addEventListener('click', () => {
            if (!player) {
                window.alert("Comece o jogo antes de jogar")
            } else {
                jogadasCounter++
                if (jogadasCounter > 4 ) {
                    calcularGanhador()
                }
                positions[i][j].innerHTML = player
                player = player === "X" ? "O" : "X"
                vezAtual.innerText = player
            }
        })
    }    
}

function setIni(initialPlayer) {
    if (!player) {
        playerInicial = initialPlayer
        iniOpt.innerHTML = initialPlayer
    }
}

function start() {
    if (!playerInicial) {
        window.alert("selecione um player para começar")
    } else {
        player = playerInicial
        playerInicial = ""

    }
}

function reset() {
    for (let i=0; i<positions.length; i++) {
        for (let j=0; j<positions[i].length; j++) {
            positions[i][j].innerHTML = "&nbsp;"
            player = ""
            vezAtual.innerText = ""
            jogadasCounter = 0
        }
    }
}

function calcularGanhador() {
    let ganhador = ""
    let positionLinha
    for (let i=0; i<positions.length; i++) {
        
        for (let j=0; j<positions[i].length; j++) {
            /*

            positions[0][0] === positions[0][1] === positions[0][2]
            positions[1][0] === positions[1][1] === positions[1][2]
            positions[2][0] === positions[2][1] === positions[2][2]

            positions[0][0] === positions[1][0] === positions[2][0]
            positions[0][1] === positions[1][1] === positions[2][1]
            positions[0][2] === positions[1][2] === positions[2][2]

            positions[0][0] === positions[1][1] === positions[2][2]

            */
        }    
    }
}