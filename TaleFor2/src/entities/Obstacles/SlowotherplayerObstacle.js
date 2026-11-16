import Obstacle from './Obstacle.js';

export default class SlowotherplayerObstacle extends Obstacle {

    constructor(scene, x, y, texture, direction, scale = 1) {
        super(scene, x, y, texture, direction, scale);
        this.sprite.setTint(0xFFAA00); // Cambia el color del obstáculo a naranja para indicar que es de ralentización
        this.dmg = -1; // Cantidad de vida que restaura el obstáculo
    }

    update() {
        super.update();
    }

    executeCollision(player){
        player.otherPlayer.slowDown(3000, 0.5); // Ralentiza al jugador al 50% de su velocidad durante 3 segundos
    }

}