const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
let globalhealth = 0;
let r = 0;

function startGame() {
    state = {}
    globalhealth =3;
    showTextNode(1)
    
}

function showTextNode(textNodeIndex) {
    console.log(globalhealth)
    if (globalhealth > 0) {
     var textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
     console.log(textNode)
    }
    else {
        var textNode = textNodes.find(textNode => textNode.id === 20)
    }
     textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    document.body.style.backgroundImage = textNode.url

    textNode.options.forEach(option => {
        if (showOption(option)) {
          const button = document.createElement('button')
          button.innerText = option.text
          button.classList.add('btn')
          button.addEventListener('click', () => selectOption(option))
          optionButtonsElement.appendChild(button)

        }
    })
}
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}
function selectOption(option) {
     const nextTextNodeId = option.nextText
     console.log(globalhealth)
     globalhealth = globalhealth + option.heal
     if (nextTextNodeId <= 0) {
         return startGame()
     }
     console.log(globalhealth)
     state = Object.assign(state, option.setState)
     showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'I am alive.',
        url: "url('')",
        options: [
            {
                text: 'maaa mai',
                heal: 0,
                nextText: 2
            },
            {
                text: 'mirpddd',
                heal: -3,
                nextText: 2
            }
        ]
        
    },
    {
        id: 2,
        text: 'me no dead',
        url: "url('')",
        options: [
            {
               text: 'dance',
               heal: 0,
               nextText: 3
            },
            {
                text: 'kjjf',
                heal: 0,
                nextText: 3
            },
            {
                text: 'kkfefef',
                heal: 0,
                nextText: 3
            },
            {
                text: 'ffdfd',
                heal: 0,
                nextText: 3
            }

        ]
    },
    {
        id: 20,
        text: 'Die for me',
        url: "url('')",
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
]



startGame()