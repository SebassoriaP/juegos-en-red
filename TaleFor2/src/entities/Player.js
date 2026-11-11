export default class Player {

    constructor(scene, x, y, texture, controls) {

        this.scene = scene;
        this.speed = 200;
        this.controls = controls;

        this.sprite = scene.physics.add.sprite(x, y, texture);

        this.sprite.setCollideWorldBounds(true);

    }

    update() {

        let velocityX = 0;
        let velocityY = 0;

        if (this.controls.left.isDown) {
            velocityX = -this.speed;
        }
        else if (this.controls.right.isDown) {
            velocityX = this.speed;
        }

        if (this.controls.up.isDown) {
            velocityY = -this.speed;
        }
        else if (this.controls.down.isDown) {
            velocityY = this.speed;
        }

        this.sprite.body.setVelocity(velocityX, velocityY);

        // Evita que las diagonales sean más rápidas
        this.sprite.body.velocity.normalize().scale(this.speed);
    }

}   