import { GameObject } from "./types/gameObjects";
import spaceShip from "/assets/spaceShip.png";
import starBig from "/assets/star-big.png";
import starMedium from "/assets/star-medium.png";
import starSmall from "/assets/star-small.png";
import rocket from "/assets/rocket.png";
import rocketCounter from "/assets/rocketCounter.png";
import asteroid from "/assets/asteroid.png";
import asteroidBig from "/assets/asteroidBig.png";
import explosion from "/assets/explosion.png";
import healthPotion from "/assets/additionalHealth.png";

import { Sounds } from "./types/sounds";
import backGround from "/audio/background.mp3";
import rocketStart from "/audio/rocket-start.mp3";
import explosionPlayer from "/audio/explosion-player.mp3";
import explosionRocket from "/audio/explosion-rocket.mp3";
import heal from "/audio/heal.mp3";
import reload from "/audio/reload.mp3";
import missedAsteroidAlarm from "/audio/missed-asteroid-alarm.mp3";

export function preload(this: Phaser.Scene): void {
  this.load.spritesheet(GameObject.SPACE_SHIP, spaceShip, {
    frameWidth: 48,
    frameHeight: 50,
  });
  this.load.spritesheet(GameObject.ROCKET, rocket, {
    frameWidth: 48,
    frameHeight: 50,
  });
  this.load.spritesheet(GameObject.EXPLOSION, explosion, {
    frameWidth: 50,
    frameHeight: 50,
  });

  this.load.image(GameObject.STAR_BIG, starBig);
  this.load.image(GameObject.STAR_MEDIUM, starMedium);
  this.load.image(GameObject.STAR_SMALL, starSmall);
  this.load.image(GameObject.ROCKET_COUNTER, rocketCounter);
  this.load.image(GameObject.ASTEROID, asteroid);
  this.load.image(GameObject.ASTEROID_BIG, asteroidBig);
  this.load.image(GameObject.HEALTH_POTION, healthPotion);

  this.load.audio(Sounds.BACKGROUND_MUSIC, backGround);
  this.load.audio(Sounds.ROCKET_START, rocketStart);
  this.load.audio(Sounds.EXPLOSION_PLAYER, explosionPlayer);
  this.load.audio(Sounds.EXPLOSION_ROCKET, explosionRocket);
  this.load.audio(Sounds.HEAL, heal);
  this.load.audio(Sounds.RELOAD, reload);
  this.load.audio(Sounds.MISSED_ASTEROID_ALARM, missedAsteroidAlarm);
}
