var test = require('tape');

var Entity = require('./Entity');

test('Entity', function (t) {
  t.plan(3);

  var MyEntity = Entity.extend({
    x: 1,
    y: 5
  });

  t.equal(typeof MyEntity, 'function');

  var obj = new MyEntity({ x: 10 });
  t.equal(obj.x, 10);
  t.equal(obj.y, 5);
});
