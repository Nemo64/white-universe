Css = {};

Meteor.startup(function () {

  // check transform support

  $.support.transform = (function () {
    var transforms = {
      'transform':'transform',
      'webkitTransform':'-webkit-transform',
      'OTransform':'-o-transform',
      'msTransform':'-ms-transform',
      'MozTransform':'-moz-transform'
    };
    
    var el = document.createElement('p');
    var matchingProperty = null;
    _.any(transforms, function (cssProp, jsProp) {
      if (el.style[jsProp] !== undefined) {
        matchingProperty = jsProp;
        return true;
      } else {
        return false;
      }
    });
    
    return matchingProperty === null ? false : {
      css: transforms[matchingProperty],
      js: matchingProperty
    };
  })();

  $.support.tranlate3d = !$.support.transform ? false : (function () {
      var el = document.createElement('p');
      var has3d;

      // Add it to the body to get the computed style.
      document.body.insertBefore(el, null);
      el.style[$.support.transform.js] = "translate3d(1px,1px,1px)";
      has3d = window.getComputedStyle(el).getPropertyValue($.support.transform.css);
      document.body.removeChild(el);

      return (has3d != null && has3d.length > 0 && has3d !== "none");
  })();

  // generall css helpers

  Css.helpers = {
    cssPosition: function (position) {
      //check(position, PositionSchema); // XXX may be removed for performance
      
      return 'position:absolute;left:' + position.x + 'px;top:' + position.y + 'px';
    }
  };


  // hardware accelerated position helper

  // for borwsers with 3d support
  if ($.support.tranlate3d) {
    Css.helpers.cssHwPosition = function (position) {
      //check(position, PositionSchema); // XXX may be removed for performance
      
      var prop = $.support.transform.css;
      return 'position:absolute;'
        + prop + ':translate3d(' + position.x + 'px, ' + position.y + 'px, 0)';
    };
  }

  // for browsers with transform support
  else if ($.support.transform) {
    Css.helpers.cssHwPosition = function (position) {
      //check(position, PositionSchema); // XXX may be removed for performance
      
      var prop = $.support.transform.css;
      return 'position:absolute;'
        + prop + ':translate(' + position.x + 'px, ' + position.y + 'px, 0)';
    };
  }

  // for ancient browser
  else {
    Css.helpers.cssHwPosition = Css.helpers.cssPosition;
  }


  // add helpers
  _.each(Css.helpers, function (helper, key) {
    Handlebars.registerHelper(key, helper);
  });
});
