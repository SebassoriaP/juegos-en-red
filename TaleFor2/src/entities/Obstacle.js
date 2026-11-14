export default class Obstacle {

    constructor(scene, x, y, texture, direction) {
        this.scene = scene;
        this.speed = 200;
        this.dmg = 1; // Daño que inflige el obstáculo

        this.sprite = scene.physics.add.sprite(x, y, texture);

        this.sprite.body.setVelocity(direction.x * this.speed, direction.y * this.speed);
        this.sprite.body.velocity.normalize().scale(this.speed);
    }

    update() {

    }
    
    destroy() {
        this.sprite.destroy();
    }

    executeCollision(player){
        player.recibirDano(-this.dmg);
    }

}

