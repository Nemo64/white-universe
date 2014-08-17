
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
  },
  
  activeSystem: function () {
    var params = Router.current().params;
    return StarSystem.findOne({name: params.star_system});
  }
});

/*****************************************************************************/
/* UniverseOverview: Lifecycle Hooks */
/*****************************************************************************/
Template.UniverseOverview.created = function () {
};

Template.UniverseOverview.rendered = function () {
  var self = this;
  self.resizeEvent = function () {
    // TODO universe resize event
  };
  
  $([document, document.body]).on('ready resize focus blur', self.resizeEvent);
};

Template.UniverseOverview.destroyed = function () {
  var self = this;
  
  $([document, document.body]).off('ready resize focus blur', self.resizeEvent);
};


