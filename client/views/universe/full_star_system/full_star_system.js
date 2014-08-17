
/*****************************************************************************/
/* FullStarSystem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.FullStarSystem.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.FullStarSystem.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  planetPosition: function (planet) {
    var position = PlanetSchema.calculatePosition(planet);
    return Css.helpers.cssHwPosition(position);
  }
});

/*****************************************************************************/
/* FullStarSystem: Lifecycle Hooks */
/*****************************************************************************/
Template.FullStarSystem.created = function () {
};

Template.FullStarSystem.rendered = function () {
};

Template.FullStarSystem.destroyed = function () {
};


