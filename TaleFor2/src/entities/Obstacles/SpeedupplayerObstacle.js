import Obstacle from './Obstacle.js';

export default class SpeedupplayerObstacle extends Obstacle {

    constructor(scene, x, y, texture, scale = 1) {
        super(scene, x, y, texture, scale);
        this.sprite.setTint(0xEAFF00); // Cambia el color del obstáculo a amarillo para indicar que es de aceleración
        this.dmg = 0; // Cantidad de vida que restaura el obstáculo
    }

    update() {
        super.update();
    }

    executeCollision(player){
        return player.speedUp(3000, 3); 
    }

}