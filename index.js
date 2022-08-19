var buttons = document.querySelectorAll("button")
console.log(buttons)
var audiourl = [
    './sounds/crash.mp3',
    './sounds/kick-bass.mp3',
    './sounds/snare.mp3',
    './sounds/tom-1.mp3',
    './sounds/tom-2.mp3',
    './sounds/tom-3.mp3',
    './sounds/tom-4.mp3'
];

for (i = 0; i<audiourl.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML)
        buttonanimation(buttonInnerHTML)
    })
}

for (i = 0; i<audiourl.length; i++) {
    buttons[i].addEventListener("keydown", function (event) {
        var keypressed = event.key
        makesound(keypressed)
        buttonanimation(keypressed)
    })
}

function makesound(key) {
    
    switch (key) {
        case "w":
            audio = new Audio(audiourl[0])
            audio.play()
            break;
        case "a":
            audio = new Audio(audiourl[1])
            audio.play()
            break;
        case "s":
            audio = new Audio(audiourl[2])
            audio.play()
            break;
        case "d":
            audio = new Audio(audiourl[3])
            audio.play()
            break;
        case "j":
            audio = new Audio(audiourl[4])
            audio.play()
            break;
        case "k":
            audio = new Audio(audiourl[5])
            audio.play()
            break;
        case "l":
            audio = new Audio(audiourl[6])
            audio.play()
            break;
        default:
            break;
    }
}


function buttonanimation(currentkey) {
    document.querySelector("." + currentkey).classList.add("pressed")
    setTimeout(() => {
        document.querySelector("." + currentkey).classList.remove("pressed")
    }, 50);
}
// buttons.forEach( (element, num) => { element.addEventListener("click", handleClick(num))

//     });
// document.getElementsByTagName("button").addEventListener("click", handleClick)



// var audio = new Audio('./sounds/tom-1.mp3');
// function handleClick() {
//     var audio = new Audio(audiourlselect)
//     audio.play();
// }

    