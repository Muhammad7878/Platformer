import Phaser from "phaser";
import Player from "../entities/Player";

class Play extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayers(map);

    this.player = this.createPlayer();

    this.physics.add.collider(this.player, layers.platformColliders);

    this.playerSpeed = 200;
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createMap() {
    const map = this.make.tilemap({ key: "map" });
    map.addTilesetImage("main_lev_build_1", "tiles-1");
    return map;
  }
  createLayers(map) {
    const teilset = map.getTileset("main_lev_build_1");
    const platformColliders = map.createStaticLayer(
      "platform_colliders",
      teilset
    );
    const evnitonment = map.createStaticLayer("environment", teilset);
    const platforms = map.createStaticLayer("platforms", teilset);

    // 1 Way to set a collison
    // platformColliders.setCollisionByExclusion(-1, true);

    //Alternative
    platformColliders.setCollisionByProperty({ collides: true });

    return { evnitonment, platforms, platformColliders };
  }
  createPlayer() {
    const player = new Player(this, 100, 250);
    player.body.setGravityY(500);
    player.setCollideWorldBounds(true);

    return player;
  }

  update() {
    const { left, right } = this.cursors;

    if (left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
  }
}

export default Play;
