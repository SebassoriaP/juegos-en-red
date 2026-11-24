import Phaser from 'phaser';

export default class EndScene extends Phaser.Scene {

    constructor() {
        super('EndScene');
    }

    preload() {

        this.load.image('gameOverLogo', 'assets/images/game-over.png');
        this.load.image('victoryLogo', 'assets/images/victoria.png');

    }

    init(data) {
        this.winner = data.winner;
    }

    create() {

        this.cameras.main.setBackgroundColor('#000000');

        const heart1 = this.add.image(360, 275, 'player1').setDepth(1);
        const heart2 = this.add.image(440, 275, 'player2').setDepth(1);

        if (this.winner) {

            this.add.image(400, 195, 'victoryLogo')
                .setDisplaySize(550, 150);

            this.add.text(400, 335, '¡Habéis sobrevivido juntos!', {
                fontFamily: 'monospace',
                fontSize: '20px',
                color: '#ffffff'
            }).setOrigin(0.5);

            this.tweens.add({
                targets: [heart1, heart2],
                scale: 1.25,
                duration: 600,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });

        } else {

            this.add.image(400, 195, 'gameOverLogo')
                .setDisplaySize(550, 150);

            const defeatText = this.add.text(400, 335, 'No habéis sobrevivido...', {
                fontFamily: 'monospace',
                fontSize: '20px',
                color: '#d1d1d1'
            }).setOrigin(0.5);

            this.tweens.add({
                targets: [heart1, heart2, defeatText],
                alpha: { from: 0.85, to: 0.35 },
                duration: 1200,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });

        }


        this.add.text(400, 405, 'ENTER - Volver a jugar', {
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.5);


        this.add.text(400, 455, 'M - Menú principal', {
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.5);

        const restartGame = () => {

            this.input.keyboard.off('keydown-M', returnMenu);
            this.scene.start('GameScene');

        };

        const returnMenu = () => {

            this.input.keyboard.off('keydown-ENTER', restartGame);
            this.scene.start('MenuScene');

        };

        this.input.keyboard.once('keydown-ENTER', restartGame);
        this.input.keyboard.once('keydown-M', returnMenu);

    }
}