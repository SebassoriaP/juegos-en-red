import Phaser from 'phaser';
import SoundManager from './SoundManager.js';

export default class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene');
    }

    preload() {
        this.load.image('logo', 'assets/images/talefor2-logo.png');

        this.load.audio("Hit", "assets/audio/Hit.wav");
        this.load.audio("PowerUp", "assets/audio/PowerUp.wav");
        this.load.audio("Muerte", "assets/audio/Muerte.wav");
        this.load.audio("MusicaMenu", "assets/audio/MusicaMenu.wav");
        this.load.audio("Start", "assets/audio/Start.wav");
        this.load.audio("SlowObstacle", "assets/audio/SlowObstacle.mp3");
        this.load.audio("heal_04", "assets/audio/heal_04.mp3");
    }

    create() {
        this.soundManager = new SoundManager(this);
        this.soundManager.playMusic("MusicaMenu", { loop: true, volume: 0.5 });

        this.input.keyboard.on('keydown-M', () => {
            this.soundManager.toggleMute();
        });

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
            this.soundManager.stopMusic("MusicaMenu");
            this.soundManager.playSfx("Start", { volume: 0.6 });
            this.scene.start('GameScene');
        });
    }
}