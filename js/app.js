
var title = document.getElementById('title');
var turn = "X";
var colorPlayer = 'bg-warning'
var playerCycle = document.getElementById('playerCycle');
var bnStart = document.getElementById('bnStart');
var reset = document.getElementById('reset')
var allCell = document.querySelectorAll('.cell')
var dashboard = document.getElementById('dashboard')
var safetyStart = document.getElementById('safetyStart');
var winner = document.getElementById('winner')
title.classList.add(colorPlayer)
dashboard.innerText = " who will winner....?  "



function startGame() {
    title.classList.remove(colorPlayer)
    colorPlayer = 'bg-danger'
    title.classList.add(colorPlayer)
    playerCycle.innerHTML = "<span class='fs-2'> <- player </span> "
    bnStart.classList.add('d-none')
    safetyStart.classList.add('d-none')
}



function game(id) {
    var element = document.getElementById(id);
    if (turn == "X" && element.innerText == "") {
        element.innerText = "X";
        turn = "O";
        title.classList.remove(colorPlayer)
        colorPlayer = 'bg-primary'
        title.classList.add(colorPlayer)


    } else if (turn == "O" && element.innerText == "") {
        element.innerText = "O";
        turn = "X";
        title.classList.remove(colorPlayer)
        colorPlayer = 'bg-danger'
        title.classList.add(colorPlayer)
    }
    checkWinner()


}

function checkWinner() {
    for (var cell of allCell) {
        if (cell.innerText == "") {

        } else {
            // turn-1   [1,2,3]
            if (allCell[0].innerText == allCell[1].innerText && allCell[1].innerText == allCell[2].innerText && allCell[2].innerText !== "") {
                if (allCell[0].innerText == "X" && allCell[1].innerText == "X" && allCell[2].innerText == "X") {
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')
                    dashboard.innerText = "the player ...X... is the winner   "

                } else if (allCell[0].innerText == "O" && allCell[1].innerText == "O" && allCell[2].innerText == "O") {
                    dashboard.innerText = "the player ...O... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                }
                allCell[0].classList.add('bg-winner');
                allCell[1].classList.add('bg-winner');
                allCell[2].classList.add('bg-winner');
                // turn-2   [4,5,6]
            } else if (allCell[3].innerText == allCell[4].innerText && allCell[4].innerText == allCell[5].innerText && allCell[5].innerText !== "") {
                if (allCell[3].innerText == "X" && allCell[4].innerText == "X") {
                    dashboard.innerText = "the player ...X... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')


                } else if (allCell[3].innerText == "O" && allCell[4].innerText == "O") {
                    dashboard.innerText = "the player ...O... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')


                }
                allCell[3].classList.add('bg-winner');
                allCell[4].classList.add('bg-winner');
                allCell[5].classList.add('bg-winner');
                // turn-3   [7,8,9]
            } else if (allCell[6].innerText == allCell[7].innerText && allCell[7].innerText == allCell[8].innerText && allCell[8].innerText !== "") {
                if (allCell[6].innerText == "X" && allCell[7].innerText == "X") {
                    dashboard.innerText = "the player ...X... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')
                } else if (allCell[6].innerText == "O" && allCell[7].innerText == "O") {
                    dashboard.innerText = "the player ...O... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')
                }
                allCell[6].classList.add('bg-winner');
                allCell[7].classList.add('bg-winner');
                allCell[8].classList.add('bg-winner');
                // turn-4   [3,5,7]
            } else if (allCell[2].innerText == allCell[4].innerText && allCell[4].innerText == allCell[6].innerText && allCell[6].innerText !== "") {
                if (allCell[2].innerText == "X" && allCell[4].innerText == "X") {
                    dashboard.innerText = "the player ...X... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                } else if (allCell[2].innerText == "O" && allCell[4].innerText == "O") {
                    dashboard.innerText = "the player ...O... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                }
                allCell[2].classList.add('bg-winner');
                allCell[4].classList.add('bg-winner');
                allCell[6].classList.add('bg-winner');
                // turn-5   [1,5,9]
            } else if (allCell[0].innerText == allCell[4].innerText && allCell[4].innerText == allCell[8].innerText && allCell[8].innerText !== "") {
                if (allCell[0].innerText == "X" && allCell[4].innerText == "X") {
                    dashboard.innerText = "the player ...X... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                } else if (allCell[0].innerText == "O" && allCell[4].innerText == "O") {
                    dashboard.innerText = "the player ...O... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                }
                allCell[0].classList.add('bg-winner');
                allCell[4].classList.add('bg-winner');
                allCell[8].classList.add('bg-winner');
                // turn-6   [1,4,7]
            } else if (allCell[0].innerText == allCell[3].innerText && allCell[3].innerText == allCell[6].innerText && allCell[6].innerText !== "") {
                if (allCell[0].innerText == "X" && allCell[3].innerText == "X") {
                    dashboard.innerText = "the player ...X... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                } else if (allCell[0].innerText == "O" && allCell[3].innerText == "O") {
                    dashboard.innerText = "the player ...O... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                }
                allCell[0].classList.add('bg-winner');
                allCell[3].classList.add('bg-winner');
                allCell[6].classList.add('bg-winner');
                // turn-7   [2,5,8]
            } else if (allCell[1].innerText == allCell[4].innerText && allCell[4].innerText == allCell[7].innerText && allCell[7].innerText !== "") {
                if (allCell[1].innerText == "X" && allCell[4].innerText == "X") {
                    dashboard.innerText = "the player ...X... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                } else if (allCell[1].innerText == "O" && allCell[4].innerText == "O") {
                    dashboard.innerText = "the player ...O... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                }
                allCell[1].classList.add('bg-winner');
                allCell[4].classList.add('bg-winner');
                allCell[7].classList.add('bg-winner');
                // turn-8   [3,6,9]
            } else if (allCell[2].innerText == allCell[5].innerText && allCell[5].innerText == allCell[8].innerText && allCell[8].innerText !== "") {
                if (allCell[2].innerText == "X" && allCell[5].innerText == "X") {
                    dashboard.innerText = "the player ...X... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                } else if (allCell[2].innerText == "O" && allCell[5].innerText == "O") {
                    dashboard.innerText = "the player ...O... is the winner   "
                    winner.classList.remove('d-none')
                    winner.classList.add('d-block')

                }
                allCell[2].classList.add('bg-winner');
                allCell[5].classList.add('bg-winner');
                allCell[8].classList.add('bg-winner');
            } else if (allCell[0].innerText !== allCell[1] && allCell[1].innerText !== allCell[2] && allCell[2].innerText !== allCell[3] && allCell[3].innerText !== allCell[4] && allCell[4].innerText !== allCell[5] && allCell[5].innerText !== allCell[6] && allCell[6].innerText !== allCell[7] && allCell[7].innerText !== allCell[8] && allCell[8] !== "") {
                dashboard.innerText = "Draw...! "

            } else {
                dashboard.innerText = "who will winner....? "
            }
        }
    }


}



reset.addEventListener('click', function () {
    for (var cell of allCell) {
        cell.innerText = "";
        dashboard.innerText = "who will winner....?"
        winner.classList.add('d-none')
        cell.classList.remove("bg-winner")
        checkWinner()
    }    
    
})






