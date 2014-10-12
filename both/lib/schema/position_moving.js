MovingPositionSchema = new SimpleSchema({
  sourcePositon: {
    type: PositionSchema
  },
  targetPosition: {
    type: PositionSchema
  },
  movementSpeed: {
    type: Number,
    decimal: true,
    min: 0
  },
  startTime: {
    type: Date
  }
});

MovingPositionSchema.getPosition = function (movingPosition) {
  check(movingPosition, MovingPositionSchema);
  
  var xd = movingPosition.targetPosition.x - movingPosition.sourcePositon.x;
  var yd = movingPosition.targetPosition.y - movingPosition.sourcePositon.y;
  var distance = Math.sqrt(xd*xd + yd*yd);
  
  var movingTime = App.time() - movingPosition.startTime.getTime();
  var movingDistance = movingTime * movingPosition.movementSpeed;
  var movingAngle = Math.atan2(yd, xd);
  
  return { // TODO requires testing
    x: movingDistance * Math.cos(movingAngle),
    y: movingDistance * Math.sin(movingAngle)
  }
};

MovingPositionSchema.getWithChangedDirection = function (movingPosition) {
  check(positionMoving, MovingPositionSchema);
};
