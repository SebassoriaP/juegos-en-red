import Obstacle from '../entities/Obstacles/Obstacle.js';
import HealingObstacle from '../entities/Obstacles/HealingObstacle.js';
import CursedObstacle from '../entities/Obstacles/CursedObstacle.js';
import SlowplayerObstacle from '../entities/Obstacles/SlowplayerObstacle.js';
import SlowotherplayerObstacle from '../entities/Obstacles/SlowotherplayerObstacle.js';

export default class Obstacle_Manager {

    constructor(scene, frequencey, initial_chance, chance_increment, debug = false) {

        this.scene = scene;
        this.frequencey = frequencey;
        this.initial_chance = initial_chance;
        this.chance_increment = chance_increment;
        this.reps = 0;

        this.timer = this.scene.time.addEvent({
            delay: this.frequencey,     // Tiempo en milisegundos (x)
            callback: this.onTimerTick, // Función
            callbackScope: this,
            loop: true
        });

        this.debug = debug;
    }

    update() {
        
    }

    onTimerTick() {
        if(this.debug) {
            let obstacle = this.spawnObstacle(3, 
            800, 300, 
            {x: -1, y: 0}, 
            0.5
            );
            
            this.scene.addObstacle(obstacle);
            return;
        }

        const randomValue = Math.random();
        const chance = this.initial_chance + this.chance_increment * this.reps;

        const randomY = Phaser.Math.Between(50, 450);
        if (randomValue < chance) {
            let obstacle = this.spawnObstacle(Math.floor(Math.random() * 3), 
            800, randomY, 
            {x: -1, y: 0}, 
            0.5
            );

            this.scene.addObstacle(obstacle);
        }else {
            let obstacle = this.spawnObstacle(10, 
            800, randomY, 
            {x: -1, y: 0}, 
            0.5
            );
            
            this.scene.addObstacle(obstacle);
        }

        this.reps++;
    }
    
    destroy() {
        if (this.timer) {
            this.timer.destroy();
        }
    }

    spawnObstacle(type, x, y, direction, scale) {
        let obstacle;
        switch (type) {
            case 0:
                obstacle = new HealingObstacle(this.scene, x, y, 'obstacle_texture', direction, scale);
                break;
            case 1:
                obstacle = new CursedObstacle(this.scene, x, y, 'obstacle_texture', direction, scale);
                break;
            case 2:
                obstacle = new SlowplayerObstacle(this.scene, x, y, 'obstacle_texture', direction, scale);
                break;
            case 3:
                obstacle = new SlowotherplayerObstacle(this.scene, x, y, 'obstacle_texture', direction, scale);
                break;
            default:
                obstacle = new Obstacle(this.scene, x, y, 'obstacle_texture', direction, scale);
        }
        return obstacle;
    }

}