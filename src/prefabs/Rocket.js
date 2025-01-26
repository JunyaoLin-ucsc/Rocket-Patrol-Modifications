class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        this.isFiring = false
        this.moveSpeed = 2
        this.sfxShot = scene.sound.add('sfx-shot')
    }

    update() {
        this.x = Phaser.Math.Clamp(
            this.scene.input.activePointer.x,
            borderUISize + this.width,
            game.config.width - borderUISize - this.width
        );

        if (this.scene.input.activePointer.isDown && !this.isFiring){
            this.isFiring = true;
            this.sfxShot.play();
        }

        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed
        }

        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding
        }
    }

    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }
}