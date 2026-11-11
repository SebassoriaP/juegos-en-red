import Phaser from 'phaser';

import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';

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

    scene: [MenuScene, GameScene]
};

const game = new Phaser.Game(config);