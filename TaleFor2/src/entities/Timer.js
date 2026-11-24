export default class Timer {

    constructor(scene, initialSeconds, goalSeconds){

        this.scene = scene;
        this.seconds = initialSeconds;
        this.goalSeconds = goalSeconds;

        this.timerText = this.scene.add.text(400, 550, '', {
            fontFamily: 'monospace',
            fontSize: '22px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.showTime();

        this.timerEvent = this.scene.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });
    }

    updateTimer() {

        this.seconds++;
        this.showTime();

        if (this.seconds >= this.goalSeconds) {
            this.timerEvent.remove(false);
        }
    }

   showTime() {

        const remaining = Math.max(0, this.goalSeconds - this.seconds);

        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;

        const formattedTime = String(minutes).padStart(2, '0') + ':' +
                            String(seconds).padStart(2, '0');

        this.timerText.setText(`TIEMPO RESTANTE: ${formattedTime}`);

        if (remaining <= 10) {

            this.timerText.setColor('#A855F7');

        } else {

            this.timerText.setColor('#ffffff');

        }
    }
}