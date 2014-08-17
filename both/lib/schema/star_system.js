StarSystemSchema = new SimpleSchema({
  name: {
    type: String,
    unique: true
  },
  position: {
    type: PositionSchema
  },
  stars: {
    type: [PlanetSchema],
    minCount: 1,
    maxCount: 2
  },
  planets: {
    type: [PlanetSchema],
    minCount: 0,
    maxCount: 9
  }
});
