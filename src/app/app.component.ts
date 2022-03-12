import { Component } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { Platform } from '@ionic/angular';

import Phaser from 'phaser';
import FirstScene from './scenes/FirstScene';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  phaserGame: Phaser.Game;
  config:Phaser.Types.Core.GameConfig;


  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }


  initializeApp(){
    this.platform.ready().then(()=> {

      this.initializePhaser();
    })
  }


  initializePhaser(){
    this.config = {
      type: Phaser.AUTO,
      width: 224,
      height: 224,
      parent: 'game',
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
      scene: [FirstScene],
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
      }
    };
    this.phaserGame = new Phaser.Game(this.config);
  }



}
