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
        text: 'Instruction \n This is a story based game and your choices will will make a difference. \n Making right choices will continue the story while wrong choices will lead you to death! \n Based on your choices, you will gain or lose health and research points. \n You start off with 50 HP and 0 RP. \n ARE YOU READY TO FOR SPACE REALM?',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
                text: 'Yes,Ahoy!',
                heal: 0,
                nextText: 2
            },
            {
                text: 'No! I am scared',
                heal: 0,
                nextText: 20
            }
        ]
        
    },
    {
        id: 2,
        text: 'Choose your first celestial body',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Venus',
               heal: 0,
               nextText: 3
            },
            {
                text: 'Moon',
                heal: 0,
                nextText: 3
            },
            {
                text: 'Mars',
                heal: 0,
                nextText: 3
            },
            {
                text: 'Mercury',
                heal: 0,
                nextText: 3
            }
        ]
    },
    {
       id: 3,
       text: 'Welcome to Venus. \n Where you want to land your spacecraft??',
       url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
           {
            text: 'Move on Surface (mvs)',
            heal: -0.5,
            nextText: 13 
            },
            {
            text: 'Above 55km from surface',
             heal: -2,
             nextText: 4
             },
        ]
    },
    {
        id: 4,
        text: 'Conditions are tough here!!!....seems technical problem in spacecraft too… \n Do right decision',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Technical  check',
               heal: 0,
               research : +2.5,
               nextText: 6
            },
            {
                text: 'Start exploring',
                heal: +2.5,
                research : +0.5,
                nextText: 5
            },
        ]
    },
    {
        id: 5,
        text: 'Breathing is necessary for our life...Lets test the air..What say!!!!!',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Yes',
               heal: -1,
               research : +1,
               nextText: 9
            },
            {
                text: 'No',
                heal: +1,
                research : -1,
                nextText: 12
            },
        ]
    },
    {
        id: 6,
        text: 'Your presence of mind is great!!!..Choose what u want to do??',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Turn on automatic diffused gas reactor',
               heal: +2.5,
               research : 0,
               nextText: 7
            },
            {
                text: 'Increase Speed of Power Engine',
                heal: -3,
                research : 0,
                nextText: 8
            },
            {
                text : 'Start Exploring',
                heal: 0,
                research: +2.5,
                nextText: 5
            }
        ]
    },
    {
        id: 7,
        text: 'Now your Aircraft is stable!!!..You are a smart astronaut...',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Start Exploring!',
               heal: 0,
               research : 0,
               nextText: 5
            },
            {
                text: 'Move on Surface (mvs)',
                heal: -2,
                research : 0,
                nextText: 13
            },
        ]
    },
    {
        id: 8,
        text: 'Damn!!!...Saviour now your fuel will finish  early \n Be attentive...otherwise you will not be able to sustain humanity....',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Return',
               heal: 0,
               research : 0,
               nextText: 58
            },
            {
                text: 'Start exploring',
                heal: +2.5,
                research : +0.5,
                nextText: 5
            },
        ]
    },
    {
        id: 9,
        text: 'Technical problem occured in spacecraft!!!.. \n What you will do now our saviour????',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Solve Technical problem',
               heal: +1.5,
               research : 5,
               nextText: 10
            },
            {
                text: 'Explore  more',
                heal: -1.5,
                research : +3,
                nextText: 11
            },
        ]
    },
    {
        id: 10,
        text: 'Astronauts life is only for science.. \n Wanna prove it saviour????',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Explore More',
               heal: -1.5,
               research : 3,
               nextText: 11
            },
            {
                text: 'Return',
                heal: 0,
                research : 0,
                nextText: 3
            },
        ]
    },
    {
        id: 11,
        text: 'You proved it!!!..you love science and love science....Lets! move forward....',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Move on Surface (mvs)',
               heal: -2,
               research : 0,
               nextText: 13
            },
            {
                text: 'Return',
                heal: 0,
                research : 0,
                nextText: 3
            },
        ]
    },
    {
        id: 12,
        text: 'In a tough situation..Person should be predecided.. \n  What you are thinking our saviour??? ',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Return',
               heal: 0,
               research : 0,
               nextText: 3
            },
            {
                text: 'Move on Surface (mvs)',
                heal: -2,
                research : 0,
                nextText: 13
            },
        ]
    },
    {
        id: 13,
        text: ' Looks like Earth twin is exactly not like earth...air pressure is increasing \n Take decision quick and research fast....Or you may Die!!!!!',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Explore Volcanic Area',
               heal: -5,
               research: 3.5,
               nextText: 3
            },
            {
                text: 'Explore Plains',
                heal: 0,
                research: 1.5,
                nextText: 3
            },
            {
                text: 'Analyze soil',
                heal: 0,
                research: 5,
                nextText: 3
            }
        ]
    },

    {
        id: 20,
        text: 'DEAD',
        url: "url('https://english.cdn.zeenews.com/sites/default/files/2020/10/27/895471-water-moon-surface.jpg')",
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
]



startGame()