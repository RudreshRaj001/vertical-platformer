const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const scaledCanvas = {
  width: canvas.width / 4,
  height: canvas.height / 4,
}

const floorCollisions2D = [];
for(let i = 0; i < floorCollisions.length; i+=36){
  floorCollisions2D.push(floorCollisions.slice(i, i+36));
}
console.log(floorCollisions2D);

floorCollisions2D.forEach((row)=>{
  row.forEach((symbol)=>{
    if(symbol === 202){
      console.log('draw a block here!');
    }
  })
})

const gravity = 0.5;


const player = new Player({
  x: 0,
  y: 0
});
const player2 = new Player({
  x: 300,
  y: 100
});

const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  }
}

const background = new Sprite({
  position:{
    x: 0,
    y: 0
  },
  imageSrc: './assets/background.png'
});

function animate(){
  window.requestAnimationFrame(animate);

  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.save();
  c.scale(4,4);
  c.translate(0, -background.image.height + scaledCanvas.height);
  background.update();
  c.restore();

  player.update();
  player2.update();

  player.velocity.x = 0;
  if(keys.d.pressed) player.velocity.x = 5;
  else if(keys.a.pressed) player.velocity.x = -5;
}

animate();

window.addEventListener('keydown', (event)=>{
  // console.log(event);
  switch(event.key){
    case 'd':
        // console.log("moving right");
        // player.velocity.x = 1;
        keys.d.pressed = true;
        break;
    case 'a':
        // 
        ;
        // player.velocity.x = -1;
        keys.a.pressed = true;
        break;
    case 'w':
        // console.log("moving up");
        player.velocity.y = -20;
        break;
  }
})
window.addEventListener('keyup', (event)=>{
  // console.log(event);
  switch(event.key){
    case 'd':
      // console.log("moving right");
      // player.velocity.x = 1;
      keys.d.pressed = false;
      break;
    case 'a':
      // console.log("moving left");
      // player.velocity.x = -1;
      keys.a.pressed = false;
      break;
  }
})
