export default class Obstacle {

    constructor(scene, x, y, texture, direction, scale = 1) {
        this.scene = scene;
        this.speed = 200;
        this.dmg = 1; // Daño que inflige el obstáculo

        this.sprite = scene.physics.add.sprite(x, y, texture);
        this.sprite.setScale(scale);

        this.sprite.body.setVelocity(direction.x * this.speed, direction.y * this.speed);
        this.sprite.body.velocity.normalize().scale(this.speed);
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
        player.recibirDano(-this.dmg);
    }

}

