import Phaser from 'phaser';

import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';
import PauseScene from './scenes/PauseScene.js';
import EndScene from './scenes/EndScene.js';

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

    scene: [MenuScene, GameScene, PauseScene, EndScene]
};

const game = new Phaser.Game(config);