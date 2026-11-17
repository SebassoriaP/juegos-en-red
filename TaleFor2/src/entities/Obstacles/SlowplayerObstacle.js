import Obstacle from './Obstacle.js';

export default class SlowplayerObstacle extends Obstacle {

    constructor(scene, x, y, texture, scale = 1) {
        super(scene, x, y, texture, scale);
        this.sprite.setTint(0x0000FF); // Cambia el color del obstáculo a azul para indicar que es de ralentización
        this.dmg = 0; // Cantidad de vida que restaura el obstáculo
    }

    update() {
        super.update();
    }

    executeCollision(player){
        return player.slowDown(3000, 0.5); // Ralentiza al jugador al 50% de su velocidad durante 3 segundos
    }

}