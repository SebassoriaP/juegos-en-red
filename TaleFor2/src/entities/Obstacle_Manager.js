import Obstacle from '../entities/Obstacles/Obstacle.js';
import HealingObstacle from '../entities/Obstacles/HealingObstacle.js';
import CursedObstacle from '../entities/Obstacles/CursedObstacle.js';
import SlowplayerObstacle from '../entities/Obstacles/SlowplayerObstacle.js';
import SlowotherplayerObstacle from '../entities/Obstacles/SlowotherplayerObstacle.js';
import SpeedupplayerObstacle from '../entities/Obstacles/SpeedupplayerObstacle.js';
import SpeedupotherplayerObstacle from '../entities/Obstacles/SpeedupotherplayerObstacle.js';

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
            let obstacle = this.spawnObstacle(4, 
            800, 300, 
            {x: -1, y: 0}, 
            0.5
            );
            
            this.scene.addObstacle(obstacle);
            return;
        }

        const randomValue = Math.random();
        const chance = this.initial_chance + this.chance_increment * this.reps;

        const randomX = Math.random(); // Posición X aleatoria (800 o 0)
        const randomY = Phaser.Math.Between(50, 450);
        // const direction = this.aimToPlayer();

        if (randomValue < chance) {
            let obstacle = this.spawnObstacle(Math.floor(Math.random() * 6), 
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
    
    destroy() {
        if (this.timer) {
            this.timer.destroy();
        }
    }

    spawnObstacle(type, x, y, scale) {
        let obstacle;
        switch (type) {
            case 0:
                obstacle = new HealingObstacle(this.scene, x, y, 'flecha', scale);
                break;
            case 1:
                obstacle = new CursedObstacle(this.scene, x, y, 'flecha', scale);
                break;
            case 2:
                obstacle = new SlowplayerObstacle(this.scene, x, y, 'flecha', scale);
                break;
            case 3:
                obstacle = new SlowotherplayerObstacle(this.scene, x, y, 'flecha', scale);
                break;
            case 4:
                obstacle = new SpeedupplayerObstacle(this.scene, x, y, 'flecha', scale);
                break;
            case 5:
                obstacle = new SpeedupotherplayerObstacle(this.scene, x, y, 'flecha', scale);
                break;
            default:
                obstacle = new Obstacle(this.scene, x, y, 'flecha', scale);
        }
        return obstacle;
    }

}