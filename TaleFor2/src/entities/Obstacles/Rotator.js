import Obstacle from './Obstacle.js';

export default class Rotator extends Obstacle {

    constructor(scene, x, y, texture, persistent, direction, scale = 1, speed = 100, acceleration = -100, rotation = 90) {
        super(scene, x, y, texture, persistent, scale, speed);

        this.acceleration = acceleration;

        const dir = this.sprite.body.velocity.clone().normalize();

        this.sprite.setAngle(rotation);

        if (Math.abs(rotation % 180) === 90) {
            
            this.sprite.body.setSize(this.sprite.height, this.sprite.width, true);
        }

        this.sprite.setVelocity(direction.x, direction.y);
        this.sprite.body.velocity.normalize().scale(this.speed);

        this.sprite.setAcceleration(
            dir.x * this.acceleration.x,
            dir.y * this.acceleration.y
        );
    }

    update() {
        super.update();
    }

    executeCollision(player){
        return super.executeCollision(player); 
    }

}