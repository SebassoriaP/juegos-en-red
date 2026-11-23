import Phaser from 'phaser';
import Player from '../entities/Player.js';
import HPBar from '../entities/HPBar.js';
import Obstacle_Manager from '../entities/Obstacle_Manager.js';
import Obstacle from '../entities/Obstacles/Obstacle.js';
import HealingObstacle from '../entities/Obstacles/HealingObstacle.js';
import CursedObstacle from '../entities/Obstacles/CursedObstacle.js';

export default class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
    }

    preload() {

        this.load.image('player1', 'assets/images/player1.png');
        this.load.image('player2', 'assets/images/player2.png');
        this.load.image('obstacle_texture', 'assets/images/obstacle_test.png');
        this.load.image('flecha', 'assets/images/Flecha.png');
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
            50, 25,
            700, 400
        );

        this.player1 = new Player(this, 250, 300, 'player1', null);
        this.player2 = new Player(this, 550, 300, 'player2', null);

        this.player1.setOtherPlayer(this.player2);
        this.player2.setOtherPlayer(this.player1);
        this.playerGroup = this.add.group([this.player1.sprite, this.player2.sprite]);

        this.hpBar = new HPBar(this, 20, 20);
        this.hpBar.modifyHP(-19);

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


        this.obstacles = this.add.group();
        // Para hacer que colisionen, mejorar en el futuro para manejar grupos
        this.physics.add.overlap(
            this.playerGroup, 
            this.obstacles, 
            this.handleCollision, // Función que se ejecutará al chocar
            null, 
            this
        );

        this.Obstacle_Manager = new Obstacle_Manager(this, 500, 0.0, 0.01, false);


        this.input.keyboard.on('keydown-ESC', () => {

            this.scene.pause();
            this.scene.launch('PauseScene');

        });


    }

    update() {
        this.player1.update();
        this.player2.update();

        if (this.hpBar.HP <= 0) {

            this.scene.start('EndScene', { winner: false });

        }
    }

    handleCollision(playerSprite, obstacleSprite) {
        const player = playerSprite.parentClass;
        const obstacle = obstacleSprite.parentClass;
        
        let colision = obstacle.executeCollision(player);
        
        if(colision) {
            obstacle.destroy();
        }
    }

    addObstacle(obstacle) {
        this.obstacles.add(obstacle.sprite);
    }

    getRandomPlayerCoordinates() {
        const players = [this.player1, this.player2];
        const randomPlayer = Phaser.Utils.Array.GetRandom(players);
        return { x: randomPlayer.sprite.x, y: randomPlayer.sprite.y };
    }
}