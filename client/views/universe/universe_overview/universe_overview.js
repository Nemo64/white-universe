
/*****************************************************************************/
/* UniverseOverview: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.UniverseOverview.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.UniverseOverview.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  systems: function () {
    return StarSystem.find();
  },
  
  isActive: function (starSystem) {
    var params = Router.current().params;
    return starSystem.name === params.star_system;
  }
});

/*****************************************************************************/
/* UniverseOverview: Lifecycle Hooks */
/*****************************************************************************/
Template.UniverseOverview.created = function () {
};

Template.UniverseOverview.rendered = function () {
};

Template.UniverseOverview.destroyed = function () {
};


