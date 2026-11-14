import Phaser from 'phaser';
import Player from '../entities/Player.js';
import HPBar from '../entities/HPBar.js';
import Obstacle from '../entities/Obstacle.js';

export default class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
    }

    preload() {

        this.load.image('player1', 'assets/images/player1.png');
        this.load.image('player2', 'assets/images/player2.png');
        this.load.image('obstacle_texture', 'assets/images/obstacle_test.png');
    }

    create() {

        // Arena 
        const arena = this.add.rectangle(
            400, 225,
            700, 400,
            0x202336
        );


        arena.setStrokeStyle(3, 0xffffff);

        // Límites Físicoss
        this.physics.world.setBounds(
            50, 50,
            700, 500
        );

        this.player1 = new Player(this, 250, 300, 'player1', null);
        this.player2 = new Player(this, 550, 300, 'player2', null);
        this.playerGroup = this.add.group([this.player1.sprite, this.player2.sprite]);

        this.hpBar = new HPBar(this, 20, 20, 700, 40);

        // jugador 1
        this.controls1 = this.input.keyboard.addKeys({
            up: 'W',
            down: 'S',
            left: 'A',
            right: 'D'
        });

        // Jugador 2
        this.controls2 = this.input.keyboard.createCursorKeys();

        // Asignar controles
        this.player1.controls = this.controls1;
        this.player2.controls = this.controls2;


        this.obstacle = new Obstacle(this, 1000, 300, 'obstacle_texture', {x: -1, y: 0});

        // Para hacer que colisionen, mejorar en el futuro para manejar grupos
        this.physics.add.overlap(
            this.playerGroup, 
            this.obstacle.sprite, 
            this.handleCollision, // Función que se ejecutará al chocar
            null, 
            this
        );

        
    }

    update() {
        this.player1.update();
        this.player2.update();
        this.hpBar.update();
    }

    handleCollision(playerSprite, obstacleSprite) {
        // playerSprite y obstacleSprite son los objetos de Phaser nativos, 
        // pero puedes llamar a los métodos de tus clases así:
        
        this.obstacle.executeCollision(this.player1);
        this.obstacle.destroy();
    }
}