import Obstacle from './Obstacle.js';

export default class HealingObstacle extends Obstacle {

    constructor(scene, x, y, texture, direction, scale = 1) {
        super(scene, x, y, texture, direction, scale);
        this.sprite.setTint(0x00FF00); // Cambia el color del obstáculo a verde para indicar que es curativo
        this.dmg = -1; // Cantidad de vida que restaura el obstáculo
    }

    update() {
        super.update();
    }

    executeCollision(player){
        player.recibirDano(-this.dmg);
    }

}

