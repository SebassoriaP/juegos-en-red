import Phaser from 'phaser';

export default class EndScene extends Phaser.Scene {

    constructor() {
        super('EndScene');
    }

    init(data) {
        this.winner = data.winner;
    }

    create() {

        const title = this.winner ? 'VICTORIA' : 'GAME OVER';

        this.add.text(400, 220, title, {
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(400, 330, 'ENTER - Volver a jugar', {
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(400, 380, 'M - Menú principal', {
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('GameScene');
        });

        this.input.keyboard.once('keydown-M', () => {
            this.scene.start('MenuScene');
        });

    }
}