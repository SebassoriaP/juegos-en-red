import Phaser from 'phaser';
import Player from '../entities/Player.js';

export default class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
    }

    preload() {

        this.load.image('player1', 'assets/images/player1.png');
        this.load.image('player2', 'assets/images/player2.png');

    }

    create() {

        // Arena 
        const arena = this.add.rectangle(
            400, 300,
            700, 500,
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

    }

    update() {

        this.player1.update();
        this.player2.update();

    }
}