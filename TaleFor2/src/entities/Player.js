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


        this.invincible = false;
        this.invincibleTimer = null;
        this.blinkingTimer = scene.time.addEvent({
            delay: 200, // Intervalo de parpadeo en milisegundos
            callback: this.switchVisibility,
            callbackScope: this,
            loop: true
        });
        this.invincibleDuration = 2000; // Duración de la invencibilidad en milisegundos
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

    switchVisibility(){
        if (this.invincible) {
            this.sprite.alpha = this.sprite.alpha === 1 ? 0.5 : 1; // Alterna entre visible e invisible
        }else{
            this.sprite.alpha = 1;
        }
    }

    recibirDano(amount = 1) {
        if(this.invincible) {
            return false; // Si el jugador es invencible, no recibe daño ni efectos
        }

        this.scene.hpBar.modifyHP(amount);

        if(amount < 0) {
            this.invincible = true;
            // this.sprite.setTint(0x888888); // Cambia el color del jugador a gris para indicar invencibilidad
            this.invincibleTimer = this.scene.time.addEvent({
                delay: this.invincibleDuration,
                callback: () => {   // Función de invenvibilidad
                    this.invincible = false;
                    this.sprite.setTint(0xffffff); // Restaura el color original del jugador
                    this.invincibleTimer = null;
                },
                callbackScope: this,
                loop: false
            });
        }

        return true;
    }

    setOtherPlayer(otherPlayer) {
        this.otherPlayer = otherPlayer;
    }

    slowDown(duration = 1000, slowFactor = 0.5) {
        if (this.slowed) {
            return false; // Si ya está ralentizado, no hacer nada
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

        return true;
    }

    speedUp(duration = 1000, speedFactor = 1.5) {
        if (this.slowed) {
            return false; // Si ya está ralentizado, no hacer nada
        }
        let result = this.slowDown(duration, speedFactor);
        this.sprite.setTint('0xEAFF00'); // Cambia el color del jugador a amarillo para indicar aceleración

        return result;
    }

    liftSlowdown() {
        this.speed = this.permanentSpeed;
        this.slowed = false;
        this.timer = null;
        this.sprite.setTint('0xFFFFFF');
    }
}   