import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene');
    }

    create() {
        this.add.text(400, 220, 'TaleFor2', {
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const startText = this.add.text(400, 350, 'PULSA ENTER PARA JUGAR', {
            fontSize: '22px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('GameScene');
        });
    }
}