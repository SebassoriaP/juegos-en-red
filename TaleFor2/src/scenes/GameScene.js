import Phaser from 'phaser';
import SoundManager from './SoundManager.js';
import Player from '../entities/Player.js';
import HPBar from '../entities/HPBar.js';
import Obstacle_Manager from '../entities/Obstacle_Manager.js';
import HealingObstacle from '../entities/Obstacles/HealingObstacle.js';
import CursedObstacle from '../entities/Obstacles/CursedObstacle.js';
import Timer from '../entities/Timer.js';
import SpeedupplayerObstacle from '../entities/Obstacles/SpeedupplayerObstacle.js';
import SpeedupotherplayerObstacle from '../entities/Obstacles/SpeedupotherplayerObstacle.js';
import SlowplayerObstacle from '../entities/Obstacles/SlowplayerObstacle.js';
import SlowotherplayerObstacle from '../entities/Obstacles/SlowotherplayerObstacle.js';

// Benjamin, Sebastián y Marcos

export default class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image('player1', 'assets/images/player1.png');
        this.load.image('player2', 'assets/images/player2.png');
        this.load.image('obstacle_texture', 'assets/images/obstacle_test.png');
        this.load.image('flecha', 'assets/images/Flecha.png');
        this.load.image('rotator_texture', 'assets/images/Rotador.png');
    }

    create() {
        this.soundManager = new SoundManager(this);
        this.soundManager.stopMusic("MusicaMenu");

        // Arena
        const arena = this.add.rectangle(
            400, 225,
            700, 400,
            0x202336
        );
        arena.setStrokeStyle(3, 0xffffff);

        // Límites Físicos
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
        // this.hpBar.modifyHP(-19);

        this.timer = new Timer(this, 0, 120);

        // Jugador 1
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

        this.Obstacle_Manager = new Obstacle_Manager(this, 1000, 10000, 0.0, 0.01, 5000, 0.2, 20, false);

        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.pause();
            this.scene.launch('PauseScene');
        });

        this.input.keyboard.on('keydown-M', () => {
            this.soundManager.toggleMute();
        });
    }

    update() {
        this.player1.update();
        this.player2.update();

        this.Obstacle_Manager.update();
        this.obstacles.getChildren().slice().forEach(obstacle => {
            obstacle.parentClass.update();
        });

        if (this.hpBar.HP <= 0) {
            this.soundManager.playSfx("Muerte", { volume: 0.8 });
            this.scene.start('EndScene', { winner: false });
        } else if (this.timer.seconds >= this.timer.goalSeconds) {
            this.scene.start('EndScene', { winner: true });
        }
    }

    handleCollision(playerSprite, obstacleSprite) {
        const player = playerSprite.parentClass;
        const obstacle = obstacleSprite.parentClass;

        const colision = obstacle.executeCollision(player);

            if (colision) {
        if (
            obstacle instanceof SpeedupplayerObstacle || obstacle instanceof SpeedupotherplayerObstacle) {
        // Obstáculos que dan velocidad al jugador o al compañero
            this.soundManager.playSfx("PowerUp", { volume: 0.65 });
        } else if (obstacle instanceof CursedObstacle) {
        // Obstáculo rojo que quita 2 puntos de vida
            this.soundManager.playSfx("Hit", { volume: 0.7 });
        } else if (obstacle instanceof SlowplayerObstacle  || obstacle instanceof SlowotherplayerObstacle) {
        // Obstáculo que ralentiza al jugador
            this.soundManager.playSfx("SlowObstacle", { volume: 0.7 });
        } else if (obstacle instanceof HealingObstacle) {
        // Obstáculo que cura al jugador
            this.soundManager.playSfx("heal_04", { volume: 0.4 });
        } else 
        {
        // Obstáculo normal que quita 1 punto de vida
            this.soundManager.playSfx("Hit", { volume: 0.7 });
        }

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