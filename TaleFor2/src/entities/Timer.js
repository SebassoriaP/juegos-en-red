export default class Timer {

    constructor(scene, initialSeconds, goalSeconds){
        this.scene = scene;
        this.seconds = initialSeconds;
        this.goalSeconds = goalSeconds;

        this.timerTextTemplate = 'Survived time: ';

        this.timerText = this.scene.add.text(400, 550, `${this.timerTextTemplate} 0`, {
            fontFamily: 'monospace',
            fontSize: '22px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.timerEvent = this.scene.time.addEvent({
            delay: 1000, // 1 segundo
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });
    }

    updateTimer() {
        this.seconds++;
        this.timerText.setText(`${this.timerTextTemplate} ${this.seconds}`);
        if (this.seconds >= this.goalSeconds) {
            // this.timerEvent.remove(false);
            // this.scene.scene.start('GameOverScene', { won: true });
            this.timerText.color = '#00ff00'; // Cambia el color del texto a verde
        }
    }
}