// Name: Junyao Lin
// Modification's Title: Rocket Patrol: TBD
// Apprixomate Time: 12 hours
// Mods I chose: Display the time remaining (in seconds) on the screen (3), Allow the player to control the Rocket after it's fired (1),
// Continued: Randomize each spaceship's movement direction at the start of each play(Also spaceship movement will randomly choose in the game of each movement) (1)
// Continued: Implement mouse cotrol for player movement and left mouse click to fire (5)
// Continued: 
// Citations: 

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
