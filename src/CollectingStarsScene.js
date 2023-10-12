import Phaser from 'phaser'
export default class AmongUsScene extends Phaser.Scene
{
constructor(){
super('collecting-stars-scene')
}

init(){
    this.platform = undefined
    this.player = undefined
    this.stars = undefined
    this.cursor = undefined
}


preload(){
    this.load.image('ground','images/platform.png')
    this.load.image('star', 'images/star.png')
    this.load.image('sky','images/sky.png')
    this.load.image('bomb', 'images/bomb.png')
    this.load.image('dude','image/dude.png')

}
create(){
    this.add.image(400,300,'sky')
    this.platforms=this.physics.add.staticGroup()    
    this.platforms.create(600,400,'ground')
    this.platforms.create(50,250,'ground')
    this.platforms.create(750,220,'ground')
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    this.player=this.physics.add.sprite(100,450,'dude')
    this.player.setCollideWorldBounds(true)
    this.physics.add.collider(this.player,this.platforms)
    this.stars = this.physics.add.group({
        key: 'star',
        repeat:10,
        setXY: {x:50, y:0, stepX:70}
        });
    this.physics.add.collider(this.stars, this.platform)
    this.cursor=this.input.keyboard.createCursorKeys()
    this.anims.create({
        key:'left',
        frames :this.anims.generateFrameNumbers
        ('dude',{start:0, end:3}),
        frameRate:10,
        repeat:-1
        });
    
//     collectStar(player, star){
//         this.star.destroy()
//         }
 }}
