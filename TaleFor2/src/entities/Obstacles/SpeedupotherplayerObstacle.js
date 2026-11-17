import Obstacle from './Obstacle.js';

export default class SpeedupotherplayerObstacle extends Obstacle {

    constructor(scene, x, y, texture, direction, scale = 1) {
        super(scene, x, y, texture, direction, scale);
        this.sprite.setTint(0xFF00C3); // Cambia el color del obstáculo a violeta para indicar que es de aceleración
        this.dmg = 0; // Cantidad de vida que restaura el obstáculo
    }

    update() {
        super.update();
    }

    executeCollision(player){
        player.otherPlayer.speedUp(3000, 3); 
    }

}