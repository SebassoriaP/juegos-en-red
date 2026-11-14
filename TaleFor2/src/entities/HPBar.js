export default class HPBar {

    constructor(scene, HPMax, HP, width, height) {

        this.scene = scene;
        this.HPMax = HPMax;
        this.HP = HP;
        this.width = width;
        this.height = height;

        this.hpBarBackground = this.scene.add.rectangle(
            50, 500, 
            this.width, this.height, 
            0x002200
        ).setOrigin(0, 0.5); // Mismo origen para que coincidan perfectamente


        this.hpBar = this.scene.add.rectangle(
            50, 500,
            this.width, this.height, 
            0x00FF00
        ).setOrigin(0, 0.5); 

        this.hpBar.width = (this.HP / this.HPMax) * this.width;
    }

    update() {
    }
    
    destroy() {
        this.hpBarBackground.destroy();
        this.hpBar.destroy();
    }


    modifyHP(amount) {
        this.HP += amount;

        if (this.HP > this.HPMax) {
            this.HP = this.HPMax;
        }
        if (this.HP < 0) {
            this.HP = 0;
        }

        this.hpBar.width = (this.HP / this.HPMax) * this.width;
    }
}