import Phaser from "phaser";
import PlayScene from "../scenes/Play";
import PreloadScene from "../scenes/Preload";

const WIDTH = 1200;
const HEIGHT = 600;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT
};

const Scenes = [PreloadScene, PlayScene];
const createScene = Scene => new Scene(SHARED_CONFIG);
const initScenes = () => Scenes.map(createScene);

const config = {
  //Specifying a renderer
  //DEFAULT RENDRER => WebGL
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  //Specifying physics => Interaction of the objects, velocity of the objects
  physics: {
    //"Arcade" physics plugin, manages physics simulation
    default: "arcade",
    arcade: {
      debug: true
    }
  },
  //Basically what a user sees on the screen
  scene: initScenes()
};

new Phaser.Game(config);
