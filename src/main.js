// Name: Junyao Lin
// Modification's Title: Rocket Patrol: TBD
// Apprixomate Time: 12 hours
// Mods I chose: Display the time remaining (in seconds) on the screen (3), Allow the player to control the Rocket after it's fired (1),
// Continued: Randomize each spaceship's movement direction at the start of each play(Also spaceship movement will randomly choose movement after destroy and reset) (1)
// Continued: Implement mouse cotrol for player movement and left mouse click to fire (5)
// Continued: Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5), adding 3 seconds when successful hits and subtract 2 seconds when misses.
// Continued: Create a new enemy Spaceship(totally new art work), that's smaller, faster and worth more points (up to 50 points) (5)
// Citations: 
// Phaser Pointer Document(No need to cite)
// Phaser Math, Phaser.Math, Phaser.Math.Angle Official Documents(No need to cite) for randomize spaceship movement
// ChatGPT to know control the rocket after fire it, to remove the code if (!this.isFiring)...
// Display Timer: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/timer/ and ChatGPT assist timer match different difficulty
// Control Timer Add or Subtract: https://gamedev.stackexchange.com/questions/182242/phaser-3-how-to-trigger-an-event-every-1-second, ChatGPT also for assist
// I created the spaceship artwork and reference Nathan's code to make it faster, smaller and worth more points.

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }

let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

// reverse keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT
