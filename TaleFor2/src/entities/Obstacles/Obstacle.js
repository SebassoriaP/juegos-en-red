export default class Obstacle {

    constructor(scene, x, y, texture, persistent, scale = 1, speed = 200) {
        this.scene = scene;
        this.speed = speed;
        this.dmg = 1; // Daño que inflige el obstáculo
        this.persistent = persistent;

        this.sprite = scene.physics.add.sprite(x, y, texture);
        this.sprite.setScale(scale);

        this.direction = this.aimToPlayer();

        const anguloRadianes = Math.atan2(this.direction.y, this.direction.x);
        this.sprite.setRotation(anguloRadianes);

        const velocidadX = Math.cos(anguloRadianes) * this.speed;
        const velocidadY = Math.sin(anguloRadianes) * this.speed;
        this.sprite.setVelocity(velocidadX, velocidadY);
        this.sprite.body.velocity.normalize().scale(this.speed);

        this.sprite.parentClass = this;
    }

    update() {
        // Esto evita que se ejecute cuando se autodestruye
        if (!this.sprite || !this.sprite.active) return; 

        // Tamaño Pantalla
        const gameWidth = this.scene.scale.width;
        const gameHeight = this.scene.scale.height;
        
        // Tamaño objeto
        const objWidth = this.sprite.width;
        const objHeight = this.sprite.height;

        // Comprobar Salida
        if (
            this.sprite.x < -objWidth ||           // Salió por la izquierda
            this.sprite.x > gameWidth + objWidth || // Salió por la derecha
            this.sprite.y < -objHeight ||          // Salió por arriba
            this.sprite.y > gameHeight + objHeight  // Salió por abajo
        ) {
            this.destroy();
        }
    }
    destroy() {
        console.log("Objeto destruido");
        this.sprite.destroy();
    }

    executeCollision(player){
        let colision = player.recibirDano(-this.dmg);
        return this.persistent ? false : colision;
    }

    aimToPlayer(){
        const offset = 50;

        const playerCoordinates = this.scene.getRandomPlayerCoordinates();

        const targetX = playerCoordinates.x + Phaser.Math.Between(-offset, offset);
        const targetY = playerCoordinates.y + Phaser.Math.Between(-offset, offset);

        let dirX = targetX - this.sprite.x;
        let dirY = targetY - this.sprite.y;

        const distancia = Math.sqrt((dirX * dirX) + (dirY * dirY));
        
        if (distancia > 0) {
            dirX = dirX / distancia;
            dirY = dirY / distancia;
        }

        return { x: dirX, y: dirY };
    }
}

