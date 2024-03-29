// # Create Map
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

// # Create Collision for map
// +=70 because the tiles of our maps it 70 tiles wide
const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i));
}

class Boundary {
  constructor({ position }) {
    this.position = position;
    this.width = 48;
    this.height = 48;
  }
}

console.log("collisionMap", collisionsMap);

// Create an image for the map
const image = new Image();
image.src = "./img/map.png";

// # Create Player
const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

// Class for the images and their postion in the application
class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}
// Creates an background and defines a starting position
const background = new Sprite({
  position: { x: -1300, y: -1070 },
  image: image,
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  c.drawImage(
    // crop the character
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );

  // change the background postion
  if (keys.w.pressed && lastKey === "w") {
    background.position.y = background.position.y + 3;
  } else if (keys.a.pressed && lastKey === "a") {
    background.position.x = background.position.x + 3;
  } else if (keys.s.pressed && lastKey === "s") {
    background.position.y = background.position.y - 3;
  } else if (keys.d.pressed && lastKey === "d") {
    background.position.x = background.position.x - 3;
  }
}
animate();

let lastKey = "";

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
