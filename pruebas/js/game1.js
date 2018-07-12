// crear una nueva scena
let gameScene = new Phaser.Scene('Game');

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
    
    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

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

    console.log(this.jugador);

}

// el update se realiza a 60 veces por segundo

gameScene.update = function(){
    
    if (this.jugador.scaleX < 2){
        this.jugador.setScale(this.jugador.scaleX + 0.01);
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