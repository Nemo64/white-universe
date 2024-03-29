
/*****************************************************************************/
/* StarSystem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.StarSystem.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.StarSystem.helpers({
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
/* StarSystem: Lifecycle Hooks */
/*****************************************************************************/
Template.StarSystem.created = function () {
};

Template.StarSystem.rendered = function () {
};

Template.StarSystem.destroyed = function () {
};


