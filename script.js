let character = document.getElementById('character');
let block = document.getElementById('block');
let time = document.getElementById('alive-time');

let isPlaying = false;
let aliveTime = 0;
let timeInterval = null;

document.getElementsByTagName('html')[0].addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        if (!isPlaying)
            return start();
        jump();
    }
});

function start() {
    block.style.animation = 'block 1s infinite linear';
    isPlaying = true;
    timeInterval = setInterval(function () {
        if (isPlaying) {
            aliveTime += 100;
            time.innerText = aliveTime / 1000 + ' sec';
        }
    }, 100);
}

function jump() {
    if (character.classList != 'animate') {
        character.classList.add('animate');
    }

    setTimeout(function () {
        character.classList.remove('animate');
    }, 300);
}

let checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if (blockLeft < 140 && blockLeft > 100 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('You lose!');
        clearInterval(timeInterval);
        isPlaying = false;
    }
}, 10);