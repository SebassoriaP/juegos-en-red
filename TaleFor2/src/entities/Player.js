export default class Player {

    constructor(scene, x, y, texture, controls) {

        this.scene = scene;
        this.speed = 200;
        this.permanentSpeed = this.speed;
        this.controls = controls;

        this.sprite = scene.physics.add.sprite(x, y, texture);

        this.sprite.setCollideWorldBounds(true);

        this.sprite.parentClass = this;

        this.slowed = false;
    }

    update() {

        let velocityX = 0;
        let velocityY = 0;

        if (this.controls.left.isDown) {
            velocityX = -this.speed;
        }
        else if (this.controls.right.isDown) {
            velocityX = this.speed;
        }else{
            velocityX = 0;
        }

        if (this.controls.up.isDown) {
            velocityY = -this.speed;
        }
        else if (this.controls.down.isDown) {
            velocityY = this.speed;
        }else{
            velocityY = 0;
        }

        this.sprite.body.setVelocity(velocityX, velocityY);

        // Evita que las diagonales sean más rápidas
        this.sprite.body.velocity.normalize().scale(this.speed);
    }

    recibirDano(amount = 1) {
        this.scene.hpBar.modifyHP(amount);
    }

    setOtherPlayer(otherPlayer) {
        this.otherPlayer = otherPlayer;
    }

    slowDown(duration = 1000, slowFactor = 0.5) {
        if (this.slowed) {
            return; // Si ya está ralentizado, no hacer nada
        }

        this.slowed = true;
        this.speed *= slowFactor;
        this.sprite.setTint('0x0000FF');
        this.timer = this.scene.time.addEvent({
            delay: duration,     // Tiempo en milisegundos (x)
            callback: this.liftSlowdown, // Función
            callbackScope: this,
            loop: false
        });
    }

    liftSlowdown() {
        this.speed = this.permanentSpeed;
        this.slowed = false;
        this.timer = null;
        this.sprite.setTint('0xFFFFFF');
    }
}   