import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import AmongUsScene from './AmongUsScene'
import CollectingStarsScene from './CollectingStarsScene'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [CollectingStarsScene],
}

export default new Phaser.Game(config)
