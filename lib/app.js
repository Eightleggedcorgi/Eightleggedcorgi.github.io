let gatoHunger = 0;
let gatoSleep = 0;
let gatoBored = 0;
let gatoAge = 0;
let deathActive = false;

//button functions
document.querySelector(".js-fed-button").onclick = function () {
    if (deathActive === true) {
        gatoHunger += 0;
    }
    else {
    alert("Yum yum");
    document.getElementById('image').src="images/mouthLucy.jpg";
    gatoHunger -= 2; }
    if (gatoHunger < 0) {
        gatoHunger = 0;
    }
    updateHungDisplay();
}

document.querySelector(".js-rest-button").onclick = function () {
    if (deathActive === true) {
        gatoHunger += 0;
    }
    else {
    alert("Zzzzzz");
    document.getElementById('image').src="images/sleepLucy.jpg";
    gatoSleep -= 2; }
    if (gatoSleep < 0) {
        gatoSleep = 0;
    }
    updateTiredDisplay();
}

document.querySelector(".js-play-button").onclick = function () {
    if (deathActive === true) {
        gatoHunger += 0;
    }
    else {
    alert("Yippee!");
    document.getElementById('image').src="images/lobsterLucy.jpg";
    gatoBored -= 1; }
    if (gatoBored < 0) {
        gatoBored = 0;
    }
    updateBoredDisplay();
}

document.querySelector(".js-ded-button").onclick = function () {
    alert("PERISH");
    deathActive = true;
    updateDeathDisplay();
}

document.querySelector(".js-superres-button").onclick = function () {
    alert("Heroes nevah die");
    deathActive = false;
    updateDeathDisplay();
    document.getElementById('image').src="images/lazyLucy.jpg";
    gatoHunger = 0;
    gatoSleep = 0;
    gatoBored = 0;
    gatoAge = 0;
    updateHungDisplay();
    updateTiredDisplay();
    updateBoredDisplay();
    updateAgeDisplay();
}

//SUPER button functions
document.querySelector(".js-superfed-button").onclick = function () {
    if (deathActive === true) {
        gatoHunger += 0;
    }
    else {
    alert("MMMMMM YYYYYYYYYYUM YUUUUUUUUMMMMMM");
    document.getElementById('image').src="images/mouthLucy.jpg";
    gatoHunger -= 4; }
    if (gatoHunger < 0) {
        gatoHunger = 0;
    }
    updateHungDisplay();
}
document.querySelector(".js-superrest-button").onclick = function () {
    if (deathActive === true) {
        gatoHunger += 0;
    }
    else {
    alert("zzzzzZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
    document.getElementById('image').src="images/sleepLucy.jpg";
    gatoSleep -= 3; }
    if (gatoSleep < 0) {
        gatoSleep = 0;
    }
    updateTiredDisplay();
}
document.querySelector(".js-superplay-button").onclick = function () {
    if (deathActive === true) {
        gatoHunger += 0;
    }
    else {
    alert("WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"); //perfect length
    document.getElementById('image').src="images/lobsterLucy.jpg";
    gatoBored -= 3; }
    if (gatoBored < 0) {
        gatoBored = 0;
    }
    updateBoredDisplay();
}

let result = document.getElementById("body");
function colorChange(color) {
    document.body.style.background = color;
}
document.querySelector(".js-light-button").onclick = function () {
    alert("Night Night")
    //document.getElementById('body').style.color = 'black';
    colorChange('black');
}

//visual counter operating code
    let counterHungDisplay = document.querySelector('.output1')
    function updateHungDisplay(){
        counterHungDisplay.innerHTML = gatoHunger;
        if (gatoHunger >= 10) {
            alert("your pet has DIED OF STARVATION")
            deathActive = true;
            updateDeathDisplay();
            gatoHunger -= 1;
        }
    };

    let counterTiredDisplay = document.querySelector('.output2')
    function updateTiredDisplay(){
        counterTiredDisplay.innerHTML = gatoSleep;
        if (gatoSleep >= 10) {
            alert("your pet has DIED OF EXHAUSTION")
            deathActive = true;
            updateDeathDisplay();
            gatoSleep -= 1;
        }
    };

    let counterBoredDisplay = document.querySelector('.output3')
    function updateBoredDisplay(){
        counterBoredDisplay.innerHTML = gatoBored;
        if (gatoBored >= 10) {
            alert("your pet has DIED OF BOREDOM")
            deathActive = true;
            updateDeathDisplay();
            gatoBored -= 1;
        }
    };

    let counterAgeDisplay = document.querySelector('.output4')
    function updateAgeDisplay(){
        counterAgeDisplay.innerHTML = gatoAge;
    };

    let counterDeathDisplay = document.querySelector('.isdead')
    function updateDeathDisplay(){
        if (deathActive === true) {
        counterDeathDisplay.innerHTML = "DEAD.";
        document.getElementById('image').src="images/floppedLucy.jpg";
        }
        else {
            counterDeathDisplay.innerHTML = "Alive!";
        }
    };

//Evil insidious timers of entropy
let counted = 0;
let target = 125;
let i = setInterval(function () {
    if (counted <= target) {
            counted++;
            if (deathActive === true) {
                gatoAge += 0;
            }
            else {
                gatoAge += 1;
            }
            updateAgeDisplay()
            alert("Habby Borfday! Your pet is older") //might make age meter take inputted name. depends on headache required.
            if (gatoAge >= 14) {
                alert("ANNNNNNNNNNIHILATION!!!!!")
                deathActive = true;
                updateDeathDisplay();
            }
            else if (gatoAge >= 10) {
                alert("ANNIHILATION APPROACHES")
            }
        } else {
            clearInterval(i);
        }
    }, 60000); //IT WORKS HOORAAAAAAAAAAAAAAAAAAAA interval 5000 = 5 seconds    

let counted2 = 0;
let target2 = 600;
let i2 = setInterval(function () {
    if (counted2 <= target2) {
            counted2++;
            if (deathActive === true) {
                gatoHunger += 0;
            }
            else {
                gatoHunger += 1;
            }
            updateHungDisplay()
        } else {
            clearInterval(i);
        }
    }, 25000);

let counted3 = 0;
let target3 = 600;
let i3 = setInterval(function () {
    if (counted3 <= target3) {
            counted3++;
            if (deathActive === true) {
                gatoSleep += 0;
            }
            else {
                gatoSleep += 1;
            }
            updateTiredDisplay()
        } else {
            clearInterval(i);
        }
    }, 18000);

let counted4 = 0;
let target4 = 600;
let i4 = setInterval(function () {
    if (counted4 <= target4) {
            counted4++;
            if (deathActive === true) {
                gatoBored += 0;
            }
            else {
                gatoBored += 1;
            }
            updateBoredDisplay()
        } else {
            clearInterval(i);
        }
    }, 12000);



class Game {
    constructor(name, birthday, color, eyecolor, attitude, favfood, altfavfood) {
    this.name = name //can be string or integer
    this.birthday = birthday //better be an integer
    this.color = color
    this.eyecolor = eyecolor
    this.attitude = attitude
    this.favfood = favfood
    this.altfavfood = altfavfood
    }

};

const bungo = new Game('Bungo', 1412, 'Shrimp Colors', 'Shrimpier Colors', 'From Beyond Space & Time', 'Human Hearts', 'Pig Snouts');
//console.log(bungo)
