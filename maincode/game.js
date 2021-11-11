/* The main code and backend of the game */

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
let globalhealth = 0;
let globalresearch = 0;

function startGame() {
    state = {}
    globalhealth =10;
    globalresearch =0;
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
    if (textNode.id === 98)
    {
     textElement.innerHTML = `Thanks For Playing The Game \n Your Health Remmaining is ${globalhealth} \n Your Research Points is ${globalresearch}` 
    }
    else{
     textElement.innerText = textNode.text
    }
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    console.log(textNode.url)

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
     globalresearch = globalresearch + option.research
     if (nextTextNodeId <= 0) {
         return startGame()
     }
     console.log(globalhealth)
     console.log(globalresearch)
     state = Object.assign(state, option.setState)
     showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Instruction \n This is a story based game and your choices will will make a difference. \n Making right choices will continue the story while wrong choices will lead you to death! \n Based on your choices, you will gain or lose health and research points. \n You start off with 50 HP and 0 RP. \n ARE YOU READY TO FOR SPACE REALM?',
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
                text: 'Yes,Ahoy!',
                heal: 0,
                research: 0,
                nextText: 2
            },
            {
                text: 'No! I am scared',
                heal: 0,
                research: 0,
                nextText: 100
            }
        ]
        
    },
    {
        id: 2,
        text: 'Choose your first celestial body',
        url: "image.png" ,
        options: [
            {
               text: 'Venus',
               setState: {vet: true},
               heal: 0,
               research: 0,
               nextText: 3
            },
            {
                text: 'Moon',
                setState: {mot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Mars',
                setState: {mat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Mercury',
                setState: {met: true},
                heal: 0,
                research: 0,
                nextText: 52
            }
        ]
    },
    {
       id: 3,
       text: 'Welcome to Venus. \n Where you want to land your spacecraft??',
       url: "url('https://i.ibb.co/4KTd00B/Landing.png')",
        options: [
           {
            text: 'Move on Surface (mvs)',
            heal: -0.5,
            research: 0,
            nextText: 13 
            },
            {
            text: 'Above 55km from surface',
             heal: -2,
             research: 0,
             nextText: 4,
             },
        ]
    },
    {
        id: 4,
        text: 'Conditions are tough here!!!....seems technical problem in spacecraft too… \n Do right decision',
        url: "url('https://i.ibb.co/fMb4cm0/Above-55km.png')",
        options: [
            {
               text: 'Technical  check',
               heal: 0,
               research : +2.5,
               nextText: 6,
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
        url: "url('https://i.ibb.co/BjzJf3b/breathing.png')",
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
        url: "url('https://i.ibb.co/0Jm3sQG/Your-Presence.png')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/7j00pJj/Technical.png')",
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
        url: "url('https://i.ibb.co/gzwM19Y/Astronauts.png')",
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
                nextText: 23
            },
        ]
    },
    {
        id: 11,
        text: 'You proved it!!!..you live for science and love science....Lets! move forward....',
        url: "url('https://i.ibb.co/gyWHV52/You-proved.png')",
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
        url: "url('https://i.ibb.co/n8N7xHj/In-Tough.png')",
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
        url: "url('https://i.ibb.co/6BtXcFx/looks-like.png')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
               text: 'Return',
               heal: 0,
               research: 0,
               nextText: 23
            },
            {
                text: 'Research more!!! I Can Die for Science',
                heal: -7,
                research: +8.5,
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        text: 'You Have to move to next planet.',
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
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
        url: "url('https://i.ibb.co/zXFVxJy/Whats-App-Image-2021-10-03-at-10-03-50-AM.jpg')",
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
                nextText: 32
            }
        ]
    },
    {
        id: 26,
        text: 'You decide to land on the near side of the moon? \n A safe choice i must say \n After a successful landing, you set up your safe pod with limited water and oxygen. Now what do you do?',
        url: "url('https://i.ibb.co/VDYzQ4L/Whats-App-Image-2021-10-03-at-10-04-39-AM.jpg')",
        options: [
            {
                text: 'Explore',
                heal: 0,
                research: 1,
                nextText: 27
            },
            {
                text: 'Conduct technical repair',
                heal : 1,
                research: 0,
                nextText: 28
            },
            {
                text: 'Analyse soil sample',
                heal: 0,
                research: 1,
                nextText: 29
            },
        ]
    },
    {
        id: 27,
        text: 'You chose to explore! You are quite the adventurer arent you! Sadly, you roam for hours andhours but find nothing but barren land. All this walking has made u weak. You lose 10 hp.What will you do next?',
        url: "url('https://i.ibb.co/xmWMQ3Z/Whats-App-Image-2021-10-03-at-11-38-42-AM.jpg')",
        options: [
            {
                text: 'Analyse soil',
                heal: 0,
                research: 0,
                nextText: 29
            },
            {
                text: 'Return',
                heal : 0,
                research: 0,
                nextText: 23
            },
            {
                text: 'Repair',
                heal: 5,
                research: 1,
                nextText: 28
            }
        ]
    },
    {
        id: 28,
        text: 'You like to play it safe! Very insightful. You check all the systems and …. OH MY GOD…there was shortcircuiting in the landing mechanism! You fix the issue… Phew! Crisis averted.What next?',
        url: "url('https://i.ibb.co/ZL0H9jd/Whats-App-Image-2021-10-03-at-10-05-19-AM.jpg')",
        options: [
            {
                text: 'Explore',
                heal: 0,
                research: 1,
                nextText: 27
            },
            {
                text: 'Analyse soil',
                heal : 0,
                research: 1,
                nextText: 29
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
        id: 29,
        text: 'Of course! This was obvio the best choice! You can relax a bit too XD. You set up the samples to analyse them. Your findings shock you! The soil of Moon is made of 42% Oxygen?? Wow. Thats groundbreaking. Literally. What are you gonna do next??',
        url: "url('https://i.ibb.co/wsCPWb0/Whats-App-Image-2021-10-03-at-10-05-44-AM.jpg')",
        options: [
            {
                text: 'Try to make breathable O2 out of it',
                heal: 0,
                research: 1.5,
                nextText: 30
            },
            {
                text: 'Lets grow some potatoes cuz why not.',
                heal : -5,
                research: 5,
                nextText: 31
            }
        ]
    },
    {
        id: 30,
        text: 'Now thats a real scientist. You try and try but you fail. Then as a final attempt, you use heat and electricity, and viola! You got oxygen now!! Yay!',
        url: "url('https://i.ibb.co/RpYJsbW/Whats-App-Image-2021-10-03-at-11-38-43-AM.jpg')",
        options: [
            {
                text: 'Explore',
                heal: 0,
                research: 0,
                nextText: 27
            },
            {
                text: 'Repair',
                heal : 5,
                research: 0,
                nextText: 28
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
        id: 31,
        text: 'Ahh yes, who doesnt like potatoes. You set the soil up and and plant the seed. But only if you knew, all those efforts would be in vain.',
        url: "url('https://i.ibb.co/vQdvH5G/Whats-App-Image-2021-10-02-at-10-26-19-PM.jpg')",
        options: [
            {
                text: 'Explore',
                heal: 0,
                research: 1,
                nextText: 27
            },
            {
                text: 'Repair',
                heal : 5,
                research: 0,
                nextText: 28
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
        id: 32,
        text: 'You decide to land on the far side of the moon? ? A brave choice i must say. After a successful landing, you set up your safe pod with limited water and oxygen. Now what do you do?',
        url: "url('https://i.ibb.co/VN3gDBS/Whats-App-Image-2021-10-03-at-10-04-21-AM.jpg')",
        options: [
            {
                text: 'Explore',
                heal: 0,
                research: 0,
                nextText: 33
            },
            {
                text: 'Conduct Repair',
                heal : 1,
                research: 0,
                nextText: 28
            },
            {
                text: 'Analyze Soil',
                heal: 0,
                research: 1,
                nextText: 29
            }
        ]
    },
    {
        id: 33,
        text: 'You chose to explore the far side. What a brave savior. You walk for hours and suddenly, you see ice!! Congrats astronaut… you have found ice. This is an amazing find.Do you crave for more adventure or would you like to return.',
        url: "url('https://i.ibb.co/w4qtZs6/Whats-App-Image-2021-10-03-at-10-08-30-AM.jpg')",
        options: [
            {
                text: 'Bring on more adventure',
                heal: 0,
                research: 0,
                nextText: 34
            },
            {
                text: 'Lets go back',
                heal : 5,
                research: 0,
                nextText: 35
            }
        ]
    },
    {
        id: 34,
        text: 'You chose adventure! You want to explore more but your team cries out that they are tired. Yet you continue and stumble upon a huge lunar crater! Inside the crater thereis a cave. "It looks suspicious", says one of your team members.Its your call chief!',
        url: "url('https://i.ibb.co/w4qtZs6/Whats-App-Image-2021-10-03-at-10-08-30-AM.jpg')",
        options: [
            {
                text: 'Explore cave',
                heal: 0,
                research: 0,
                nextText: 100
            },
            {
                text: 'Nah i am team player Lets go Home ',
                heal : 0,
                research: 0,
                nextText: 35
            }
        ]
    },
    {
        id: 35,
        text: 'You return back to the base. What Next??',
        url: "url('https://i.ibb.co/w4qtZs6/Whats-App-Image-2021-10-03-at-10-08-30-AM.jpg')",
        options: [
            {
                text: 'Return',
                heal: 0,
                research: 0,
                nextText: 23
            },
            {
                text: 'Analyse soil',
                heal : 0,
                research: 1,
                nextText: 29
            },
            {
                text: 'Repair',
                heal: 1,
                research: 0,
                nextText: 28
            }
        ]
    },
    {
        id: 52,
        text: 'Asteroid hit the space shuttle, \n Preparing for the crash land. \n Are you prepared for the crash landing? \n ',
        url: "url('https://i.ibb.co/6m4H17q/Mercury-has-the-most-craters-in-the-Solar-System.png')",
        options: [
            {
                text: 'Yes! Lets do this',
                heal: -5,
                nextText: 53,
            },
            {
                text: 'No! Good bye beautiful world',
                heal: 0,
                nextText: 67,
            }
        ]
        
    },
    {
        id: 53,
        text: 'Ahh! I am hurt \n ',
        url: "url('https://i.ibb.co/T0QyHtr/Mercury-has-some-extreme-temperature-changes.png')",
        options: [
            {
                text: 'Analysie the surrounding',
                heal: 0,
                research: 0,
                nextText: 54,
            },
            {
                text: 'Will you use the med kit or embrace the pain? \n',
                heal: 0,
                nextText: 59,
            },
            {
                text: 'Do you want to go for space shuttle \n',
                heal: 0,
                nextText:60,
            },

        ]
    },
    {
        id: 54,
        text: 'Do you want to analysie the surrounding \n ',
        url: "url('https://i.ibb.co/6m4H17q/Mercury-has-the-most-craters-in-the-Solar-System.png')",
        options: [
            {
                text: 'Ohh yes it will be fun to see new things',
                heal: -5,
                research: +10,
                nextText: 55,
            },
            {
                text: 'Naah! I am good, I am a lazy man \n',
                heal: 10,
                research: -5,
                nextText: 56,
            },        
        ]
    },
    {
        id: 55,
        text: 'Do you wanna die or use the medkit? \n ',
        url: "url('https://i.ibb.co/6m4H17q/Mercury-has-the-most-craters-in-the-Solar-System.png')",
        options: [
            {
                text: 'Yes give me some anabolic',   // no link
                heal: 5,
                research:0,
                nextText: 56,
            },
            {
                text: 'Naah! I want to embrace the pain. \n',  // no link
                heal: -5,
                research:0,
                nextText: 100,
            },           
        ]
    },
    {
        id: 56,
        text: 'Analyse the moon, \n How many moon does Mercury have? \n',
        url: "url('https://i.ibb.co/T0QyHtr/Mercury-has-some-extreme-temperature-changes.png')",
        options: [
            {
                text: '0',
                heal: 0,
                research: 10,
                nextText: 57,
            },
            {
                text: '5 \n',
                heal: 0,
                research: 5,
                nextText:58,
            },          
        ]
    },
    {
        id: 57,
        text: 'Ahh! I see you are a man of culture \n',
        url: "url('https://i.ibb.co/T0QyHtr/Mercury-has-some-extreme-temperature-changes.png')",
        options: [
            {
                text: 'Go to another planet',
                heal: 0,
                research: 0,
                nextText: 23,
            },                    
        ]
    },
    {
        id: 58,
        text: 'Arigatōgozaimashita now we know you have to gain more erudite about space.\n',
        url: "url('https://i.ibb.co/6m4H17q/Mercury-has-the-most-craters-in-the-Solar-System.png')",
        options: [
            {
                text: 'Go to another planet',
                heal: 0,
                research: 0,
                nextText: 23,
            },                    
        ]
    },
    {
        id: 59,
        text: 'Wanna use medkit or embrace the pain?\n',
        url: "url('https://i.ibb.co/T0QyHtr/Mercury-has-some-extreme-temperature-changes.pngg')",
        options: [
            {
                text: 'Yes i will us the med kit',   // health bar full
                heal: 0,
                research: 0,
                nextText: 60,
            }, 
            {
                text: 'No! I want to embrace the pain',   
                heal: -5,
                research: 0,
                nextText: 100,
            },  

        ]
    },
    {
        id: 60,
        text: 'Are you going to repair the space shuttle?\n',
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
                text: 'Yes I dont want to stay here for lifetime \n',   
                heal: -10,
                research: 15,
                nextText: 99,
            }, 
            {
                text: 'No! I’ll do that later coz. i am a procrastinator.',   
                heal: 5,
                research: -5,
                nextText: 61,
            },  

        ]
    },
    {
        id: 61,
        text: 'Are you going to repair the space shuttle?\n',
        url: "url('https://i.ibb.co/T0QyHtr/Mercury-has-some-extreme-temperature-changes.png')",
        options: [
            {
                text: 'Yes I dont want to stay here for lifetime \n',   
                heal: -10,
                research: 15,
                nextText: 23,
            }, 
            {
                text: 'No! I’ll do that later coz. i am a procrastinator.',   
                heal: 5,
                research: -5,
                nextText: 62,
            },  

        ]
    },
    {
        id: 62,
        text: 'Do you want to analyse the surroundings or moon??\n',
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
                text: 'Analysie the surrounding \n',   
                heal: 0,
                research: 0,
                nextText: 63,
            }, 
            {
                text: 'Analysie the moon.',   
                heal: 0,
                research: 0,
                nextText: 64,
            },  

        ]
    },
    {
        id: 63,
        text: 'Do you really wanna analyse the surrounding?\n',
        url: "url('https://i.ibb.co/T0QyHtr/Mercury-has-some-extreme-temperature-changes.png')",
        options: [
            {
                text: 'Yes lets check some new stuff \n',   
                heal: 0,
                research: 10,
                nextText: 64,
            }, 
            {
                text: 'Naah! I will rest ',   
                heal: 5,
                research: -5,
                nextText: 100,
            },  

        ]
    },
    {
        id: 64,
        text: 'How many moon are there in mercury ?\n',
        url: "url('https://i.ibb.co/T0QyHtr/Mercury-has-some-extreme-temperature-changes.png')",
        options: [
            {
                text: '4 \n',   
                heal: 0,
                research: 0,
                nextText: 58,
            }, 
            {
                text: '0',   
                heal: 0,
                research: 10,
                nextText: 65,
            },
            {
                text: '5',   
                heal: 5,
                research: -5,
                nextText: 66,
            },   

        ]
    },
    {
        id: 65,
        text: 'Absolutely correct!!\n',
        url: "url('https://i.ibb.co/6m4H17q/Mercury-has-the-most-craters-in-the-Solar-System.png')",
        options: [
            {
                text: 'Go to another planet \n',   
                heal:0,
                research: 10,
                nextText:23,
            },             
        ]
    },
    {
        id: 66,
        text: 'Biro! get a life ?\n',
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
                text: 'Go to another planet!\n',   
                heal: 0,
                research: 5,
                nextText: 99,
            },            
        ]
    },
    {
        id: 67,
        text: 'Welcome to the hotel of karma! \n where there is no menu but you get what you deserve.',
        url: "url('https://i.ibb.co/6m4H17q/Mercury-has-the-most-craters-in-the-Solar-System.png')",
        options: [
            {
                text: 'Click here',   
                heal: 0,
                research: 0,
                nextText: 100,
            },            
        ]
    },
    // mars
    {
        id: 68,
        text: 'MARS STORY \n Wooosh the spaceship lands!! \n Will the Astronaut look for survival \n',
        url: "url('https://i.ibb.co/wMMk3sk/Whats-App-Image-2021-10-03-at-10-33-37-PM.jpg')",
        options: [
            {
                text: 'Yes!',
                heal: 1,
                research:1,
                nextText: 72,
            },
            {
                text: 'No! ',
                heal: 0,
                research: -2,
                nextText: 69,
            }
        ]
        
    },
    {
        id: 69,
        text: 'Aliens attack(Aliens live on mars kidoo!!) are you ready to fight?',
        url: "url('https://i.ibb.co/ZXp6Scr/Whats-App-Image-2021-10-03-at-10-33-37-PM-1.jp')",
        options: [
            {
                text: 'Escape',
                heal: 2,
                research:2,
                nextText: 70, 
            },
            {
                text: 'Don`t Escape ',
                heal: 0,
                research: 1,
                nextText: 100, // dead 
            }
        ]
        
    },
    {
        id: 70,
        text: 'How much is the day lenght diff btw mars and earth?? \n',
        url: "url('https://i.ibb.co/wMMk3sk/Whats-App-Image-2021-10-03-at-10-33-37-PM.jpg')",
        options: [
            {
                text: '30 Mins',
                heal: -1,
                research:0,
                nextText: 100, 
            },
            {
                text: '40 mins ',
                heal: 1,
                research: 1,
                nextText: 71, 
            },
            {
                text: '60 mins ',
                heal: -1,
                research: 0,
                nextText: 100, 
            },
            {
                text: '90 mins ',
                heal: -1,
                research: 0,
                nextText:100, 
            }
        ]
        
    },
    {
        id: 71,
        text: 'Do you want to use med-kit? \n',
        url: "url('https://i.ibb.co/ZXp6Scr/Whats-App-Image-2021-10-03-at-10-33-37-PM-1.jp')",
        options: [
            {
                text: 'Yes',
                heal: 1,
                research:0,
                nextText: 23, // nxt planet
            },
            {
                text: 'No ',
                heal: -1,
                research: 0,
                nextText: 100, 
            },  
        ]     
     
    },
    {
        id: 72,
        text: 'Do You want to search for live sources? \n',
        url: "url('https://i.ibb.co/wMMk3sk/Whats-App-Image-2021-10-03-at-10-33-37-PM.jpg')",
        options: [
            {
                text: 'Yes',
                heal: 0,
                research:1,
                nextText: 73, 
            },
            {
                text: 'No ',
                heal: 0,
                research: -1,
                nextText: 100, 
            },  
        ]     
     
    },
    {
        id: 73,
        text: 'What do you wanna do? \n',
        url: "url(https://i.ibb.co/wMMk3sk/Whats-App-Image-2021-10-03-at-10-33-37-PM.jpg')",
        options: [
            {
                text: 'Looks for live sources',
                heal: 1,
                research:0,
                nextText: 74, 
            },
            {
                text: 'Repair the space shuttle ',
                heal: -1,
                research: 0,
                nextText: 100,  
            },  
        ]     
     
    },
    {
        id: 74,
        text: 'So is water available on mars? \n',
        url: "url('https://i.ibb.co/wMMk3sk/Whats-App-Image-2021-10-03-at-10-33-37-PM.jpg')",
        options: [
            {
                text: 'Yes',
                heal: 1,
                research:2,
                nextText: 75, 
            },
            {
                text: 'No ',
                heal: -1,
                research: 1,
                nextText: 80, 
            },  
        ]     
     
    },
    {
        id: 75,
        text: 'What do you wanna do? \n',
        url: "url('https://i.ibb.co/ZXp6Scr/Whats-App-Image-2021-10-03-at-10-33-37-PM-1.jp')",
        options: [
            {
                text: 'analyse the soil',
                heal: 1,
                research:0,
                nextText: 76, 
            },
            {
                text: 'look for living environment? ',
                heal: -1,
                research: 0,
                nextText:79, 
            },  
        ]     
     
    },
    {
        id: 76,
        text: 'Can plants be grown on mars? \n',
        url: "url('https://i.ibb.co/wMMk3sk/Whats-App-Image-2021-10-03-at-10-33-37-PM.jpg')",
        options: [
            {
                text: 'yes',
                heal: 1,
                research: 2,
                nextText: 77, 
            },
            {
                text: 'No ',
                heal: -1,
                research: -1,
                nextText: 100, 
            },  
        ]     
     
    },
    {
        id: 77,
        text: 'Congrats! you grew potatoes on mars,your health has increased  now \n Now what do you wanna do??',
        url: "url('https://i.ibb.co/ZXp6Scr/Whats-App-Image-2021-10-03-at-10-33-37-PM-1.jp')",
        options: [
            {
                text: 'Look for Air quality',
                heal: 0,
                research: 1,
                nextText: 78, 
            },
            {
                text: 'Look for living environment',
                heal: 0,
                research: 1,
                nextText: 79, 
            },  
        ]     
     
    },
    {
        id: 78,
        text: 'Is the Martian air breathable to humans?? \n',
        url: "url('https://i.ibb.co/wMMk3sk/Whats-App-Image-2021-10-03-at-10-33-37-PM.jpg')",
        options: [
            {
                text: 'yes',
                heal: 1,
                research: 2,
                nextText: 100, 
            },
            {
                text: 'No ',
                heal: -1,
                research: 1,
                nextText: 79, 
            },  
        ]     
     
    },
    {
        id: 79,
        text: 'Can Bacteria be grown on mars? \n',
        url: "url('https://i.ibb.co/ZXp6Scr/Whats-App-Image-2021-10-03-at-10-33-37-PM-1.jpg')",
        options: [
            {
                text: 'yes', 
                heal: 1,
                research: 2,
                nextText: 80, 
            },
            {
                text: 'No ',
                heal: -1,
                research: -1,
                nextText: 100,  
            },  
        ]     
     
    },
    {
        id: 80,
        text: 'Now you have two choices.. \n',
        url: "url('https://i.ibb.co/wMMk3sk/Whats-App-Image-2021-10-03-at-10-33-37-PM.jpg')",
        options: [
            {
                text: 'Repair the Spacecraft',
                heal:-2,
                research: 0,
                nextText: 23, 
            },
            {
                text: 'Escape ',
                heal: 0,
                research: 0,
                nextText: 100, 
            },  
        ]     
     
    },
    {
        id: 98,
        text: `Well you completed the game \n ${globalhealth} \n ${globalresearch}`,
        url: "url('https://i.ibb.co/Xt6jvx6/Whats-App-Image-2021-10-01-at-1-36-59-PM.jpg')",
        options: [
            {
                text: 'Thanks for playing',
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
                nextText: 68
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
                nextText: 52
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
                nextText: 52
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.vetmot,
                setState: { vetmot: false , vetmotmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.vetmot,
                setState: { vetmot: false , vetmotmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.vetmet,
                setState: { vetmet: false , vetmetmat: true},
                heal: 0,
                research: 0,
                nextText: 68
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
                nextText: 52
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.vetmotmat,
                setState: { vetmotmat: false , vetmotmatmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.vetmotmet,
                setState: { vetmotmet: false , vetmotmetmat: true},
                heal: 0,
                research: 0,
                nextText: 68
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
                nextText: 68
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.mot,
                setState: { mot: false , motmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.mot,
                setState: { mot: false , motvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.mot,
                setState: { mot: false , motmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.motmat,
                setState: { motmat: false , motmatvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.motmat,
                setState: { motmat: false , motmatmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.motvet,
                setState: { motvet: false , motvetmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.motvet,
                setState: { motvet: false , motvetmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.motmet,
                setState: { motmet: false , motmetmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.motmet,
                setState: { motmet: false , motmetvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.motmatvet,
                setState: { motmatvet: false , motmatvetmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.motmatmet,
                setState: { motmatmet: false , motmatmetvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.motvetmat,
                setState: { motvetmat: false , motvetmatmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.motvetmet,
                setState: { motvetmet: false , motvetmetmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.motmetmat,
                setState: { motmetmat: false , motmetmatvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.motmetvet,
                setState: { motmetvet: false , motmetvetmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.mat,
                setState: { mat: false , matvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.mat,
                setState: { mat: false , matmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.mat,
                setState: { mat: false , matmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.matvet,
                setState: { matvet: false , matvetmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.matvet,
                setState: { matvet: false , matvetmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.matmot,
                setState: { matmot: false , matmotmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.matmot,
                setState: { matmot: false , matmotvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.matmet,
                setState: { matmet: false , matmetmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.matmet,
                setState: { matmet: false , matmetvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.matmetvet,
                setState: { matmetvet: false , matmetvetmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.matmetmot,
                setState: { matmetmot: false , matmetmotvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.matmotvet,
                setState: { matmotvet: false , matmotvetmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.matmotmet,
                setState: { matmotmet: false , matmotmetvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.matvetmet,
                setState: { matvetmet: false , matvetmetmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Mercury',
                requiredState: (currentState) => currentState.matvetmot,
                setState: { matvetmot: false , matvetmotmet: true},
                heal: 0,
                research: 0,
                nextText: 52
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.met,
                setState: { met: false , metvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.met,
                setState: { met: false , metmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.met,
                setState: { met: false , metmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.metvet,
                setState: { metvet: false , metvetmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.metvet,
                setState: { metvet: false , metvetmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.metmat,
                setState: { metmat: false , metmatvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.metmat,
                setState: { metmat: false , metmatmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.metmot,
                setState: { metmot: false , metmotvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.metmot,
                setState: { metmot: false , metmotmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.metmotmat,
                setState: { metmotmat: false , metmotmatvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.metmotvet,
                setState: { metmotvet: false , metmotvetmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Venus',
                requiredState: (currentState) => currentState.metmatmot,
                setState: { metmatmot: false , metmatmotvet: true},
                heal: 0,
                research: 0,
                nextText: 3
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.metmatvet,
                setState: { metmatvet: false , metmatvetmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'Mars',
                requiredState: (currentState) => currentState.metvetmot,
                setState: { metvettmot: false , metvetmotmat: true},
                heal: 0,
                research: 0,
                nextText: 68
            },
            {
                text: 'Moon',
                requiredState: (currentState) => currentState.metvetmat,
                setState: { metvettmat: false , metvettmatmot: true},
                heal: 0,
                research: 0,
                nextText: 25
            },
            {
                text: 'I want to End the adventure',
                heal: 0,
                research: 0,
                nextText: 98
            }
        ]

    },
    {
        id: 100,
        text: 'Your health is depleted and you die',
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