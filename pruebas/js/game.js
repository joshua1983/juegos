// crear una nueva scena
let gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preload = function(){
    // load images
    this.load.image('background', 'assets/road.png');
    this.load.image('player', 'assets/player.png');
};

// llamado despues del preload

gameScene.create = function(){
    // crear fondo
    let bg = this.add.sprite(0,0,'background');
    // colocar en el centro
    
    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    bg.setPosition(gameW/2,gameH/2);
    
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