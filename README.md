#Make entity
Generic Entity object maker that can be extented and allow definitions of object properties and static properties as well.

This is an attempt to make game entities dryer as a lot of properties are shared.

##Idea
Store default values that can be overriden

##Usage
``` js
  var makeEntity = require('make-entity');

  var Player = makeEntity({
    x: 0,
    y: 0,
    direction: 'right'
  }, {
    spriteSrc: 'player.png'
  });

  var player = new Player({
    x: 50
  });

  
  // All the following asserts are true

  // Even though player was instanciated only with
  // 'x' property, it still has the defaults 
  assert(player.x === 50);
  assert(player.y === 0);
  assert(player.direction === 'right');

  // not defined in object
  assert(player.spriteSrc === undefined);

  // it's a static property, shared by all instances of Player
  assert(Player.spriteSrc === 'player.png'); 
``` 

##License
MIT
