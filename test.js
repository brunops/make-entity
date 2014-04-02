var test = require('tape');

var extend = require('./');

test('extend', function (t) {
  t.plan(6);

  var MyEntity = extend({
    x: 1,
    y: 5
  });

  t.equal(typeof new MyEntity(), 'object');

  var obj = new MyEntity({ x: 10 });

  t.equal(typeof MyEntity, 'function');
  t.equal(obj.x, 10);
  t.equal(obj.y, 5);


  var EntityWithStaticProps = extend({
    a: 1
  }, {
    hey: 5
  });

  var obj2 = new EntityWithStaticProps({ hey: 10 });

  t.equal(obj2.hey, 10);
  t.equal(EntityWithStaticProps.hey, 5);
});
