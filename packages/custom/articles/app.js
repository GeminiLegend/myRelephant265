'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Articles = new Module('articles');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Articles.register(function(app, users, system) {
  console.log('registering articles package: ');
  console.log('Articles Module: ', Articles);

  //We enable routing. By default the Package Object is passed to the routes
  //Articles.routes(app, auth, database);

  // Articles.angularDependencies(['mean.system', 'mean.users']);

  //This is how you set a layout
  app.set('views', __dirname + '/server/views');

  //We are adding a link to the main menu for all authenticated users
  Articles.menus.add({
    title: 'articles example page',
    link: 'articles example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  Articles.config.aggregate = true;
  console.log(Articles.config.aggregate);  
  //Articles.aggregateAsset('css', 'articles.css'); //Not working for some reason

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Articles.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Articles.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Articles.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Articles;
});
