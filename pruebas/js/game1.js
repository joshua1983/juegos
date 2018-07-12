// crear una nueva scena
let gameScene = new Phaser.Scene('Game');
var gameW = 0;
var gameH = 0;
// Load assets
gameScene.preload = function(){
    // load images
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/dragon.png');
};

// llamado despues del preload

gameScene.create = function(){
    // crear fondo
    let bg = this.add.sprite(0,0,'background');
    // colocar en el centro
    
    gameW = this.sys.game.config.width;
    gameH = this.sys.game.config.height;

    bg.setPosition(gameW/2,gameH/2);

    // crear el jugador
    this.jugador = this.add.sprite(60,180,'player');
    this.jugador.setScale(0.5);


    //crear un enemigo
    this.enemy1 = this.add.sprite(250,180,'enemy');
    this.enemy2 = this.add.sprite(450,180,'enemy');

    // flip
    this.enemy1.flipX =true;

    this.altoPlayer = this.jugador.height;
    this.anchoPlayer = this.jugador.width;

    this.flip = false;
}

// el update se realiza a 60 veces por segundo

gameScene.update = function(){
    
    vigilar(this.jugador, 'x', 0.5);
    vigilar(this.enemy1, 'y', 0.5);
}

/*
* Movimientos ciclicos
*/

function vigilar(jugador, eje, paso){

    if (eje.toLowerCase() == 'x'){
        if (jugador.x < gameW && jugador.flipX == false ){
            jugador.x += paso;
        }
        if (jugador.x == gameW && jugador.flipX == false){
            jugador.flipX = true;
        }
        if (jugador.flipX == true && jugador.x > 0){
            jugador.x -= paso;
        }
        if (jugador.x == 0){
            jugador.flipX= false;
        }
    }else{
        if (jugador.y < gameH && jugador.flipY == false ){
            jugador.y += paso;
        }
        if (jugador.y == gameH && jugador.flipY == false){
            jugador.flipY = true;
        }
        if (jugador.flipY == true && jugador.y > 0){
            jugador.y -= paso;
        }
        if (jugador.y == 0){
            jugador.flipY= false;
        }
    }

    
}


// configurar el juego

let config = {
    type: Phaser.AUTO, // Webgl si esta disponible sino canvas
    width: 640,
    height: 360,
    scene: gameScene
}

// crear nuevo juego y pasar la configuracion

let game = new Phaser.Game(config);