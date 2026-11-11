import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    backgroundColor: '#171725',

    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },

    scene: {
        create: create
    }
};

const game = new Phaser.Game(config);

function create() {
    this.add.text(400, 300, 'TaleFor2', {
        fontSize: '48px',
        color: '#ffffff'
    }).setOrigin(0.5);
}