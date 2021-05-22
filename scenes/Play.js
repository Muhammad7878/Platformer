import Phaser from "phaser";

class Play extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayers(map);

    this.createPlayer();
  }

  createMap() {
    const map = this.make.tilemap({ key: "map" });
    map.addTilesetImage("main_lev_build_1", "tiles-1");
    return map;
  }
  createLayers(map) {
    const teilset = map.getTileset("main_lev_build_1");
    const evnitonment = map.createStaticLayer("environment", teilset);
    const platforms = map.createStaticLayer("platforms", teilset);
    return { evnitonment, platforms };
  }
  createPlayer() {
    const player = this.physics.add.sprite(100, 250, "player");
    player.body.setGravityY(500);
    player.setCollideWorldBounds(true);
  }
}

export default Play;
