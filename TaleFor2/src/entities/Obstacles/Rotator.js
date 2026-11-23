import Obstacle from './Obstacle.js';

export default class Rotator extends Obstacle {

    constructor(scene, x, y, texture, persistent, scale = 1, acceleration = -50, rotationSpeed = 90) {
        super(scene, x, y, texture, persistent, scale);
        this.acceleration = acceleration;
        this.rotationSpeed = rotationSpeed;
        this.sprite.setAngularVelocity(rotationSpeed);

        const dir = this.sprite.body.velocity.clone().normalize();

        // Aplicamos la aceleración negativa en esa misma dirección (efecto boomerang)
        this.sprite.setAcceleration(
            dir.x * this.acceleration,
            dir.y * this.acceleration
        );
    }

    update() {
        super.update();
    }

    executeCollision(player){
        return super.executeCollision(player); 
    }

}