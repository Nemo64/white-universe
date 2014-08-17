StarSystem = new Meteor.Collection('star_system');
StarSystem.attachSchema(StarSystemSchema);

/*
 * Add query methods like this:
 *  StarSystem.findPublic = function () {
 *    return StarSystem.find({is_public: true});
 *  }
 */
