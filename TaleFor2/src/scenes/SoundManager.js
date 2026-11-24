export default class SoundManager {
    constructor(scene, cooldownMs = 100) {
        this.scene = scene;
        this.cooldownMs = cooldownMs;
        this.lastPlayed = new Map();
        this.sfxVolume = 1;
        this.musicVolume = 0.6;
        this.muted = false;
        this.musicInstances = new Map();
    }

    playSfx(key, options = {}) {
        if (this.muted) return null;
        if (!this.scene || !this.scene.sound) return null;
        if (!this.scene.cache.audio.exists(key)) return null;

        const now = Date.now();
        const prevTime = this.lastPlayed.get(key) || 0;
        if (now - prevTime < this.cooldownMs) {
            return null;
        }
        this.lastPlayed.set(key, now);

        const baseVolume = options.volume !== undefined ? options.volume : 1;
        const finalVolume = Phaser.Math.Clamp(baseVolume * this.sfxVolume, 0, 1);

        return this.scene.sound.play(key, {
            ...options,
            volume: finalVolume
        });
    }

    playMusic(key, options = {}) {
        if (!this.scene || !this.scene.sound) return null;
        if (!this.scene.cache.audio.exists(key)) return null;

        let music = this.musicInstances.get(key);
        const baseVolume = options.volume !== undefined ? options.volume : this.musicVolume;
        const targetVolume = this.muted ? 0 : Phaser.Math.Clamp(baseVolume, 0, 1);

        if (!music) {
            music = this.scene.sound.add(key, {
                loop: true,
                ...options,
                volume: targetVolume
            });
            this.musicInstances.set(key, music);
            music.play();
        } else {
            music.setVolume(targetVolume);
            if (!music.isPlaying) {
                music.play();
            }
        }

        return music;
    }

    stopMusic(key) {
        const music = this.musicInstances.get(key);
        if (music) {
            music.stop();
        }
        if (this.scene && this.scene.sound) {
            this.scene.sound.getAllPlaying().forEach((sound) => {
                if (sound.key === key) {
                    sound.stop();
                }
            });
        }
    }

    setSfxVolume(volume) {
        this.sfxVolume = Phaser.Math.Clamp(volume, 0, 1);
    }

    setMusicVolume(volume) {
        this.musicVolume = Phaser.Math.Clamp(volume, 0, 1);
        if (!this.muted) {
            this.musicInstances.forEach((music) => {
                music.setVolume(this.musicVolume);
            });
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        if (this.scene && this.scene.sound) {
            this.scene.sound.mute = this.muted;
        }
        return this.muted;
    }
}