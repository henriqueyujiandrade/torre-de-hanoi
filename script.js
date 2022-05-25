const hanoiContent = document.querySelector('.hanoi')

const gameArea = document.createElement('div')
gameArea.classList.add('gameArea')

const discHolder = document.createElement('div')
discHolder.classList.add('discHolder')


const startContent = document.createElement('div')
startContent.classList.add('startPosition')

const startTower = document.createElement('div')
startTower.classList.add('tower')
startTower.id = 'start'

const spanStartTower = document.createElement('span')
spanStartTower.innerText = 'Start'
spanStartTower.classList.add('towerText')

const offsetContent = document.createElement('div')
offsetContent.classList.add('offsetPosition')

const offsetTower = document.createElement('div')
offsetTower.classList.add('tower')
offsetTower.id = 'offset'

const spanOffsetTower = document.createElement('span')
spanOffsetTower.innerText = 'Offset'
spanOffsetTower.classList.add('towerText')

const endContent = document.createElement('div')
endContent.classList.add('endPosition')


const endTower = document.createElement('div')
endTower.classList.add('tower')
endTower.id = 'end'

const spanEndTower = document.createElement('span')
spanEndTower.innerText = 'End'
spanEndTower.classList.add('towerText')

hanoiContent.appendChild(discHolder)
hanoiContent.appendChild(gameArea)

gameArea.appendChild(startContent)
gameArea.appendChild(offsetContent)
gameArea.appendChild(endContent)

startContent.appendChild(startTower)
startContent.appendChild(spanStartTower)

offsetContent.appendChild(offsetTower)
offsetContent.appendChild(spanOffsetTower)

endContent.appendChild(endTower)
endContent.appendChild(spanEndTower)


const redDisc = document.createElement('div')
redDisc.classList.add('red')
redDisc.id = '1'

const greenDisc = document.createElement('div')
greenDisc.classList.add('green')
greenDisc.id = '2'

const purpleDisc = document.createElement('div')
purpleDisc.classList.add('purple')
purpleDisc.id = '3'

const blueDisc = document.createElement('div')
blueDisc.classList.add('blue')
blueDisc.id = '4'


startTower.appendChild(redDisc)
startTower.appendChild(greenDisc)
startTower.appendChild(purpleDisc)
startTower.appendChild(blueDisc)




hanoiContent.addEventListener('click', callback)

function callback(e) {

    const selectContent = e.target    

    selector(selectContent)

    moveSelectedDisc(selectContent)
    
    winCondition()
}

function selector(selectDisc) {

    if (selectDisc.nextElementSibling === null && discHolder.childElementCount === 0 && hanoiContent.childElementCount <3 ) {
        if (selectDisc.id === '4') {

            discHolder.appendChild(blueDisc)
        }

        else if (selectDisc.id === '1') {

            discHolder.appendChild(redDisc)
        }

        else if (selectDisc.id === '2') {
            discHolder.appendChild(greenDisc)
        }

        else if (selectDisc.id === '3') {

            discHolder.appendChild(purpleDisc)
        }
    }
}

function moveSelectedDisc(moveDisc) {

    if (moveDisc.id === 'offset' && discHolder.childElementCount > 0) {
        if ( (offsetTower.childElementCount == 0) || (discHolder.lastChild.clientWidth < offsetTower.lastChild.clientWidth) ) {

            offsetTower.appendChild(discHolder.lastChild)
        }
    }
    if (moveDisc.id === 'end' && discHolder.childElementCount > 0) {
        if ((endTower.childElementCount == 0) || (discHolder.lastChild.clientWidth < endTower.lastChild.clientWidth)){

        endTower.appendChild(discHolder.lastChild)
        }
    }
    if (moveDisc.id === 'start' && discHolder.childElementCount > 0) {
        if ((startTower.childElementCount == 0) || (discHolder.lastChild.clientWidth < startTower.lastChild.clientWidth)) {

            startTower.appendChild(discHolder.lastChild)
        }
    }
}

function winCondition (){
    if(endTower.childElementCount === 4 && hanoiContent.childElementCount <3 ){
      const finish = document.createElement('span')
        finish.innerText = 'Você Ganhou !!!'
        finish.classList.add('finish')

      hanoiContent.appendChild(finish)
    }
}



