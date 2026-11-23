
import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene');
    }

    preload() {

        this.load.image('logo', 'assets/images/talefor2-logo.png');

    }

    create() {

        // Fondo
        this.cameras.main.setBackgroundColor('#000000');

        // Portada
        const logo = this.add.image(400, 230, 'logo');

        logo.setDisplaySize(650, 366);

        // Texto para iniciar
        const startText = this.add.text(400, 410, '♥  PULSA ENTER PARA JUGAR', {
            fontFamily: 'monospace',
            fontSize: '22px',
            color: '#ffffff'
        }).setOrigin(0.5);

        // Parpadeo suave
        this.tweens.add({
            targets: startText,
            alpha: 0.35,
            duration: 900,
            yoyo: true,
            repeat: -1
        });

        // Iniciar partida
        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('GameScene');
        });

    }
}
