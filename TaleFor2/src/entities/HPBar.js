    export default class HPBar {

        constructor(scene, HPMax, HP) {

            this.scene = scene;
            this.HPMax = HPMax;
            this.HP = HP;
            this.width = 300;
            this.height = 20;

            this.x = 250;
            this.y = 500;


            this.hpTitle = this.scene.add.text(205, this.y, 'HP', {
                fontFamily: 'monospace',
                fontSize: '22px',
                color: '#ffffff'
            }).setOrigin(0.5);


            this.hpBarBackground = this.scene.add.rectangle(
                this.x, this.y,
                this.width, this.height, 
                0x2D1B45
            ).setOrigin(0, 0.5); // Mismo origen para que coincidan perfectamente


            this.hpBar = this.scene.add.rectangle(
                this.x, this.y,
                this.width, this.height, 
                0xA855F7
            ).setOrigin(0, 0.5); 

            this.hpBar.width = (this.HP / this.HPMax) * this.width;

            this.hpBorder = this.scene.add.rectangle(
                this.x, this.y,
                this.width, this.height
            ).setOrigin(0, 0.5);

            this.hpBorder.setFillStyle(0x000000, 0);
            this.hpBorder.setStrokeStyle(2, 0xffffff);

            // Contador numérico
            this.hpText = this.scene.add.text(565, this.y, '', {
                fontFamily: 'monospace',
                fontSize: '20px',
                color: '#ffffff'
            }).setOrigin(0, 0.5);

            this.modifyHP(0);
        }

        update() {
            
        }
        
        destroy() {
            this.hpTitle.destroy();
            this.hpBarBackground.destroy();
            this.hpBar.destroy();
            this.hpBorder.destroy();
            this.hpText.destroy();
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
            this.hpText.setText(`${this.HP}/${this.HPMax}`);
        }
    }