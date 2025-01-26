class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.points = pointValue
        this.moveSpeed = game.settings.spaceshipSpeed
        this.initialY = y;
        this.reset();
    }

    update() {
        this.x += this.moveSpeed * this.direction;

        if (this.direction < 0 && this.x <= -this.width) {
            this.reset();
        }
        else if (this.direction > 0 && this.x >= game.config.width + this.width) {
            this.reset();
        }
    }

    reset() {
        this.direction = (Phaser.Math.Between(0, 1) === 0) ? -1 : 1;
        this.y = this.initialY;

        if (this.direction < 0) {
            this.x = game.config.width + this.width;
        } else {
            this.x = -this.width;
        }
    }
}