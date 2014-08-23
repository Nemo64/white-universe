/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
  time: TimeSync.serverTime // TODO remove dependency that this method introduces
});

App.helpers = {
  // path to a star system with current path
  starSystemPath: function (starSystem) {
    var current = Router.current();
    var params = _.clone(current.params);
    params.star_system = starSystem.name;
    return Router.path(current.route.name, params);
  },
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

Meteor.subscribe('star_system');

$(document).on('click', '[data-href]', function () {
  Router.go($(this).data('href'));
});
