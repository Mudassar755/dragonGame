

function some(a, b) {






}


var num = 10;
var num2 = 30;
var num3 = 60;

var nums = [10, 30, 60];

var myNum = nums[2]


class Student {


}

var st1 = new Student;



some(10, []);


let game = {
    init: function () {

        this.gameStarted = false;
        this.gameMusic = document.createElement('audio');
        this.gameMusic.src = 'splashS.mp3';

        this.coinMusic = document.createElement('audio');
        this.coinMusic.src = 'click.mp3';

        this.currentScore = 0;





        gameStarter.onclick = this.startGame.bind(this);
    },
    onKeyPress: function (evt) {

        switch (evt.keyCode) {

            case 39:

                if (this.gameStarted) {
                    var bounds = gameHero.getBoundingClientRect();
                    gameHero.style.left = (bounds.left + 7) + 'px';
                }

                break;


            case 38:
                if (this.gameStarted) {
                    if (this.gameStarted) {
                        var bounds = gameHero.getBoundingClientRect();
                        gameHero.style.top = (bounds.top - 4) + 'px';
                    }
                }
                break;

            case 37:
                if (this.gameStarted) {
                    if (this.gameStarted) {
                        var bounds = gameHero.getBoundingClientRect();
                        gameHero.style.left = (bounds.left - 7) + 'px';
                    }
                }
                break;


        }

    },
    generateCoins: function () {

        let maxCoins = Math.round(Math.random() * 10);
        var offset = appContainer.getBoundingClientRect().left;

        for (i = 0; i < maxCoins; i++) {

            let coin = new Image();
            coin.src = 'coin.png';

            coin.style.left = (offset + Math.round(splashScreen.offsetWidth * Math.random())) + 'px'
            coin.style.top = Math.round(appContainer.offsetHeight * Math.random()) - 50 + 'px'
            coin.classList.add('coin');
            gameScreen.appendChild(coin);

        }

    },
    updateScore: function () {

        this.currentScore++;
        scoreItem.innerText = this.currentScore;

    },
    startGame: function () {

        this.generateCoins();

        // this.gameMusic.play();
        splashScreen.classList.add('hide');
        gameScreen.classList.remove('hide');

        this.gameStarted = true;

        document.onkeydown = this.onKeyPress.bind(this);

        var coins = document.querySelectorAll('.coin');

        setInterval(() => {

            if (this.gameStarted) {

                var bounds = gameHero.getBoundingClientRect();
                var appContainerBounds = appContainer.getBoundingClientRect();

                if (bounds.bottom < appContainerBounds.bottom) {

                    gameHero.style.top = (++bounds.top) + 'px';
                }


                coins.forEach((coin) => {

                    let coinBounds = coin.getBoundingClientRect();
                    let dragonBounds = gameHero.getBoundingClientRect(); 

                    let leftCheck = coinBounds.left < (dragonBounds.left + dragonBounds.width);
                    let topCheck = coinBounds.top > dragonBounds.top;
                    let rightCheck = coinBounds.left > dragonBounds.left;
                    let bottomCheck = coinBounds.bottom < dragonBounds.bottom;

                    if (leftCheck && topCheck && rightCheck && bottomCheck) {

                        this.coinMusic.currentTime = 0;
                        this.coinMusic.play();
                        coin.classList.add('hide');
                        this.updateScore();
                    }

                });



            }


        }, 20);


    }
};