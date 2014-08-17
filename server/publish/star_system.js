/*****************************************************************************/
/* StarSystem Publish Functions
/*****************************************************************************/

Meteor.publish('star_system', function () {
  return StarSystem.query().execute();
});
