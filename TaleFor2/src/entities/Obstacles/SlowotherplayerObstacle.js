import Obstacle from './Obstacle.js';

export default class SlowotherplayerObstacle extends Obstacle {

    constructor(scene, x, y, texture, scale = 1) {
        super(scene, x, y, texture, scale);
        this.sprite.setTint(0xFFAA00); // Cambia el color del obstáculo a naranja para indicar que es de ralentización
        this.dmg = 0; // Cantidad de vida que restaura el obstáculo
    }

    update() {
        super.update();
    }

    executeCollision(player){
        return player.otherPlayer.slowDown(3000, 0.5); // Ralentiza al jugador al 50% de su velocidad durante 3 segundos
    }

}