

export default class FirstScene extends Phaser.Scene {

    constructor(config){
        super(config);
    }

    preload(){
        //load all assets
        this.load.image('sky', 'assets/sprites/sky.png');
        this.load.image('ground', 'assets/sprites/platform.png');
        this.load.image('star', 'assets/sprites/star.png');
        this.load.image('bomb', 'assets/sprites/bomb.png');
        this.load.spritesheet('dude', 
            'assets/sprites/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    }


    platforms;
    player;

    create(){
        //add assets to the scene
        this.add.image(400, 300, 'sky');

    this.platforms = this.physics.add.staticGroup();
    
    
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');


    this.player = this.physics.add.sprite(100, 450, 'dude');

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNames('dude', { start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4}],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });
}



    update(){
        //every 16ms Game logic here
    }




}