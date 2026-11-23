import Phaser from 'phaser';

export default class PauseScene extends Phaser.Scene {

    constructor() {
        super('PauseScene');
    }

    create() {

        this.add.rectangle(
            400, 300,
            800, 600,
            0x000000,
            0.75
        );

        this.add.text(400, 220, 'JUEGO EN PAUSA', {
            fontSize: '40px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(400, 320, 'ESC - Continuar', {
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(400, 370, 'M - Menu principal', {
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.resume('GameScene');
            this.scene.stop();
        });

        this.input.keyboard.on('keydown-M', () => {
            this.scene.stop('GameScene');
            this.scene.start('MenuScene');
        });

    }
}