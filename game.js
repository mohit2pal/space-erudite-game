const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
let globalhealth = 0;
let r = 0;

function startGame() {
    state = {}
    globalhealth =10;
    showTextNode(1)
    
}

function showTextNode(textNodeIndex) {
    console.log(globalhealth)
    if (globalhealth > 0) {
     var textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
     console.log(textNode)
    }
    else {
        var textNode = textNodes.find(textNode => textNode.id === 100)
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
                nextText: 100
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
               setState: {vet: true},
               heal: 0,
               nextText: 3
            },
            {
                text: 'Moon',
                heal: 0,
                nextText: 25
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
               heal: 2.5,
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
               nextText: 23
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
               nextText: 18
            },
            {
                text: 'Return',
                heal: 0,
                research : 0,
                nextText: 23
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
                nextText: 23
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
               nextText: 23
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
               nextText: 14
            },
            {
                text: 'Explore Plains',
                heal: 0,
                research: 1.5,
                nextText: 18
            },
            {
                text: 'Analyze soil',
                heal: 0,
                research: 5,
                nextText: 19
            }
        ]
    },
    {
        id: 14,
        text: ' Temperature is just unbearable!!..Are you missing your family \n Or want miss Humanity in future...........',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Lets! Explore more',
               heal: 3,
               research: 3,
               nextText: 15
            },
            {
                text: 'Comunicate to family',
                heal: 2,
                research: -2.5,
                nextText: 17
            }
        ]
    },
    {
        id: 15,
        text: 'You are a saviour...your emotions is for Humanity..Remember this \n Every human is your family...Humans need your research \n Do you have strength to give humans more??????',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Return',
               heal: 0,
               research: 0,
               nextText: 23
            },
            {
                text: 'Research more!!!',
                heal: -7,
                research: +8.5,
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        text: 'I can die for Science',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Return',
               heal: 0,
               research: 0,
               nextText: 23
            }
        ]
    },
    {
        id: 17,
        text: 'You are a emotional guy saviour!!!... \n Which step now??????????',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Return',
               heal: 3,
               research: 3,
               nextText: 23
            },
            {
                text: 'Lets Explore More',
                heal: +3,
                research: -2,
                nextText: 15
            }
        ]
    },
    {
        id: 18,
        text: 'Our Research seems to be on right path...Lets save Humanity!!!',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Lets! Explore more',
               heal: 3,
               research: 3,
               nextText: 15
            },
            {
                text: 'search for water',
                heal: 2,
                research: -1.5,
                nextText: 20
            }
        ]
    },
    {
        id: 19,
        text: 'Every single step matters a lot saviour....Lets save Humanity!!!!',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Try growing crops',
               heal: 2.5,
               research: -1,
               nextText: 21
            },
            {
                text: 'search for water',
                heal: 2,
                research: -1.5,
                nextText: 20
            }
        ]
    },
    {
        id: 20,
        text: ' Humans chose the right person!!!...You analyzed your research \n correctly...Dont break humans believe....choose the next option!!!',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Lets! Explore more',
               heal: 3,
               research: 3,
               nextText: 15
            },
            {
                text: 'Comunicate to family',
                heal: 2,
                research: -2.5,
                nextText: 17
            },
            {
                text: 'Return',
                heal: 0,
                research: 0,
                nextText: 23
            }
        ]
    },
    {
        id: 21,
        text: 'Read your research with care...You took lot time....In the mean time your spacecraft got damaged....decide quickly!!!!.',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Technical check',
               heal: +1.5,
               research: +1,
               nextText: 22
            },
            {
                text: ' Return ',
                heal: 0,
                research: 0,
                nextText: 23
            }
        ]
    },
    {
        id: 22,
        text: 'Now we are ready to research more...If u feel afraid...then u have option to show it.....',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Lets! Explore more',
               heal: 3,
               research: 3,
               nextText: 15
            },
            {
                text: ' Return ',
                heal: 0,
                research: 0,
                nextText: 23
            }
        ]
    },
    {
        id: 23,
        text: 'Lets GO to the next planet',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
                text: 'Lauch your space ship',
                heal: 0,
                research: 0,
                nextText: 99

            }
        ]
    },
    {
        id: 25,
        text: 'Houston : “The launch is successful.” About 102 hours later, It’s time to land. This is your first decision. What will you do?',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
                text: 'Land on Near side of the moon',
                heal: 0,
                research: 0,
                nextText: 26
            },
            {
                text: 'Land on Far Side of The Moon',
                heal : 0,
                research: 0,
                nextText: 3
            }
        ]
    },
    {
        id: 26,
        text: 'You decide to land on the near side of the moon? \n A safe choice i must say \n After a successful landing, you set up your safe pod with limited water and oxygen. Now what do you do?',
        url: "url('https://i.ibb.co/kMMJHQG/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
                text: 'Explore',
                heal: 0,
                research: 1,
                nextText: 3
            },
            {
                text: 'Conduct technical repair',
                heal : 5,
                research: 0,
                nextText: 3
            },
            {
                text: 'Explore Cave',
                heal: 3,
                research: 2,
                nextText: 4
            },
            {
                text: 'Return',
                heal: 0,
                research: 0,
                nextText: 23
            }
        ]
    },
    {
        id: 99,
        text: 'Choose your next celestial body to explore.',
        url: "url('https://i.ibb.co/4KTd00B/Landing.png')",
        options: [
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.vet,
                setState: { vet: false , vetmat: true},
                heal: 0,
                research: 0,
                nextText: 1
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.vet,
                setState: { vet: false , vetmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.vet,
                setState: { vet: false , vetmet: true},
                heal: 0,
                research: 0,
                nextText: 1
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.vetmat,
                setState: { vetmat: false , vetmatmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.vetmat,
                setState: { vetmat: false , vetmatmet: true},
                heal: 0,
                research: 0,
                nextText: 1
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.vetmot,
                setState: { vetmot: false , vetmotmat: true},
                heal: 0,
                research: 0,
                nextText: 1
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.vetmot,
                setState: { vetmot: false , vetmotmet: true},
                heal: 0,
                research: 0,
                nextText: 1
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.vetmet,
                setState: { vetmet: false , vetmetmat: true},
                heal: 0,
                research: 0,
                nextText: 1
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.vetmet,
                setState: { vetmet: false , vetmetmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.vetmatmet,
                setState: { vetmatmet: false , vetmatmetmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.vetmatmot,
                setState: { vetmatmot: false , vetmatmotmet: true},
                heal: 0,
                research: 0,
                nextText: 1
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.vetmotmat,
                setState: { vetmotmat: false , vetmotmatmet: true},
                heal: 0,
                research: 0,
                nextText: 1
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.vetmotmet,
                setState: { vetmotmet: false , vetmotmetmat: true},
                heal: 0,
                research: 0,
                nextText: 1
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.vetmetmat,
                setState: { vetmetmat: false , vetmetmatmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.vetmetmot,
                setState: { vetmetmot: false , vetmetmotmat: true},
                heal: 0,
                research: 0,
                nextText: 1
            }
        ]

    },
    {
        id: 100,
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