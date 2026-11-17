import Obstacle from './Obstacle.js';

export default class CursedObstacle extends Obstacle {

    constructor(scene, x, y, texture, scale = 1) {
        super(scene, x, y, texture, scale);
        this.sprite.setTint(0xFF0000); // Cambia el color del obstáculo a rojo para indicar que es maldito
        this.dmg = 2; // Cantidad de vida que quita el obstáculo
    }

    update() {
        super.update();
    }

    executeCollision(player){
        return player.recibirDano(-this.dmg);
    }

}
