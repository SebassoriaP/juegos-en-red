import Obstacle from '../entities/Obstacles/Obstacle.js';
import HealingObstacle from '../entities/Obstacles/HealingObstacle.js';
import CursedObstacle from '../entities/Obstacles/CursedObstacle.js';
import SlowplayerObstacle from '../entities/Obstacles/SlowplayerObstacle.js';
import SlowotherplayerObstacle from '../entities/Obstacles/SlowotherplayerObstacle.js';
import SpeedupplayerObstacle from '../entities/Obstacles/SpeedupplayerObstacle.js';
import SpeedupotherplayerObstacle from '../entities/Obstacles/SpeedupotherplayerObstacle.js';
import Rotator from '../entities/Obstacles/Rotator.js';

export default class Obstacle_Manager {

    constructor(scene, frequency, frequency2, initial_chance, chance_increment, rotatorTime, maxChance = 0.2, frequencyToIncrement = 5, debug = false) {

        this.scene = scene;
        this.frequencyArrows = frequency;
        this.frequencyRotators = frequency2;
        this.initial_chance = initial_chance;
        this.chance_increment = chance_increment;
        this.maxChance = maxChance;
        this.reps = 0;
        this.frequencyToIncrement = frequencyToIncrement;

        this.timerArrows = this.scene.time.addEvent({
            delay: this.frequencyArrows,     // Tiempo en milisegundos (x)
            callback: this.onTimerTick, // Función
            callbackScope: this,
            loop: true
        });

        this.timerStartRotators = this.scene.time.addEvent({
            delay: rotatorTime,     // Tiempo en milisegundos (x)
            callback: this.startRotators, // Función
            callbackScope: this,
            loop: false
        });

        this.debug = debug;
    }

    update() {
        /*
        const seconds = this.scene.timer.seconds;

        if (seconds >= 110) {

            this.timerArrows.delay = 200;

        } else if (seconds >= 90) {

            this.timerArrows.delay = 250;

        } else if (seconds >= 60) {

            this.timerArrows.delay = 300;

        } else if (seconds >= 30) {

            this.timerArrows.delay = 400;

        } else {

            this.timerArrows.delay = this.frequencey;

        }
        */
    }

    onTimerTick() {
        for(let n = 0; n < (1 + Math.floor(this.reps / this.frequencyToIncrement)); n++) {
            if(this.debug) {
                let obstacle = this.spawnObstacle(5, 
                800, 300, 
                false,
                0.5
                );
                
                this.scene.addObstacle(obstacle);
                return;
            }

            const randomValue = Math.random();
            const chance = Math.min(0.7, this.initial_chance + this.chance_increment * this.reps);

            const randomX = Math.random(); // Posición X aleatoria (800 o 0)
            const randomY = Phaser.Math.Between(50, 450);
            // const direction = this.aimToPlayer();

            if (randomValue < chance) {
                let obstacle = this.spawnObstacle(this.getRandomObstacleType(),
                randomX < 0.5 ? 800 : 0, randomY, 
                0.5
                );

                this.scene.addObstacle(obstacle);
            }else {
                let obstacle = this.spawnObstacle(10, 
                randomX < 0.5 ? 800 : 0, randomY, 
                0.5
                );
                
                this.scene.addObstacle(obstacle);
            }

            this.reps++;
        }
    }
    
    destroy() {
        if (this.timerArrows) {
            this.timerArrows.destroy();
        }
    }

    getRandomObstacleType() {

        const random = Math.random();

        if (random < 0.1) {

            return 0;

        } else if (random < 0.4) {

            return 1;

        } else if (random < 0.6) {

            return 2;

        } else if (random < 0.8) {

            return 3;

        } else if (random < 0.9) {

            return 4;

        } else {

            return 5;

        }
    }

    spawnObstacle(type, x, y, scale) {
        let obstacle;
        switch (type) {
            case 0:
                obstacle = new HealingObstacle(this.scene, x, y, 'flecha', false, scale);
                break;
            case 1:
                obstacle = new CursedObstacle(this.scene, x, y, 'flecha', false, scale);
                break;
            case 2:
                obstacle = new SlowplayerObstacle(this.scene, x, y, 'flecha', false, scale);
                break;
            case 3:
                obstacle = new SlowotherplayerObstacle(this.scene, x, y, 'flecha', false, scale);
                break;
            case 4:
                obstacle = new SpeedupplayerObstacle(this.scene, x, y, 'flecha', false, scale);
                break;
            case 5:
                obstacle = new SpeedupotherplayerObstacle(this.scene, x, y, 'flecha', false, scale);
                break;
            default:
                obstacle = new Obstacle(this.scene, x, y, 'flecha', false, scale);
        }
        return obstacle;
    }

    startRotators(){
        console.log("Iniciando Rotators {this.frequencyRotators: " + this.frequencyRotators + "}");
        this.timerRotators = this.scene.time.addEvent({
            delay: this.frequencyRotators,     // Tiempo en milisegundos (x)
            callback: this.spawnRotator, // Función
            callbackScope: this,
            loop: true
        });
    }

    spawnRotator() {
        console.log("Spawn Rotator");
        let rotator;
        let randomSpeed = Phaser.Math.Between(100, 300);
        if(Math.random() > 0.5) {
            const randomX = Math.random();
            const randomY = Phaser.Math.Between(50, 450);
            const direction = new Phaser.Math.Vector2(randomX < 0.5 ? -1 : 1, 0);
            const acceleration = new Phaser.Math.Vector2(-100, 0); // Aceleración negativa en la dirección opuesta al movimiento
            rotator = new Rotator(this.scene, randomX < 0.5 ? 800 : 0, randomY, 'rotator_texture', false, direction, 2, randomSpeed, acceleration, 90);
        }else{
            const randomX = Phaser.Math.Between(50, 750);
            const randomY = Math.random();
            const direction = new Phaser.Math.Vector2(0, randomY < 0.5 ? -1 : 1);
            const acceleration = new Phaser.Math.Vector2(0, -100);
            rotator = new Rotator(this.scene, randomX, randomY < 0.5 ? 600 : 0, 'rotator_texture', false, direction, 2, randomSpeed, acceleration, 0);
        }
        this.scene.addObstacle(rotator);
    }
}