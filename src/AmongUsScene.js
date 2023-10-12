import Phaser from 'phaser'
export default class AmongUsScene extends Phaser.Scene
{
constructor(){
super('collecting-stars-scene')
}
preload(){
    this.load.image('maps', 'images/maps.png')

    this.load.image('playerRed','images/Red.png')

    this.load.image('playerCyan','images/Cyan.png')

    this.load.image('playerPink','images/Pink.png')

    this.load.image('playerGreen','images/Green.png')

    this.load.image('playerOrange','images/Orange.png')

}
create(){
    this.add.image(960, 540, 'maps')

    this.add.image(1000, 400, 'playerRed')

    this.add.image(350, 290, 'playerPink')

    this.add.image(1740, 470, 'playerGreen')

    this.add.image(350, 790, 'playerOrange')

    this.add.image(960, 900, 'playerCyan')

    
}
}