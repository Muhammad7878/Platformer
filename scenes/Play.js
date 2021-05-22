import Phaser from "phaser";

class Play extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const teilset1 = map.addTilesetImage("main_lev_build_1", "tiles-1");
    // const teilset2 = map.addTilesetImage("main_lev_build_2", "tiles-2");

    //ORDER MATTERS
    map.createStaticLayer("environment", teilset1);
    map.createStaticLayer("platforms", teilset1);
  }
}

export default Play;
