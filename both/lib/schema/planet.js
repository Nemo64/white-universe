PlanetSchema = new SimpleSchema({
  offset: {
    type: Number,
    min: 0,
    max: MAX_SYSTEM_SIZE
  },
  speed: {
    type: Number,
    min: 0,
    max: PLANET_MAX_SPEED
  },
  type: {
    type: String,
    allowedValues: _.toArray(PLANET_TYPES)
  }
});

PlanetSchema.calculatePosition = function (planet) {
  check(planet, PlanetSchema);
  
  // make this function reactive
  if (Meteor.isClient) {
    App.animationFrameDep.depend();
  }
  
  var time = (App.time() * SPEED_MOD) / planet.speed * 2;
  
  return {
    x: planet.offset * Math.cos(time * Math.PI),
    y: planet.offset * Math.sin(time * Math.PI)
  }
};
