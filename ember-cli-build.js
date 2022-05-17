'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    lessOptions: {
      paths: [
          'bower_components/semantic-ui',
          'node_modules/ember-flexberry-themes',
      ]
    },

    postcssOptions: {
      compile: {
        enabled: false,
        browsers: ['last 3 versions'],
      },
      filter: {
        enabled: true,
        plugins: [
          {
            module: autoprefixer,
            options: {
              browsers: ['last 2 versions']
            }
          }
        ]
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('vendor/font-icon.css');

  // Semantic UI Icons
  const uiThemeAssetsDir = 'bower_components/semantic-ui/src/themes/default/assets/fonts'
  app.import(`${uiThemeAssetsDir}/icons.eot`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/icons.otf`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/icons.svg`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/icons.ttf`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/icons.woff`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/icons.woff2`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/outline-icons.eot`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/outline-icons.otf`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/outline-icons.svg`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/outline-icons.ttf`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/outline-icons.woff`, { destDir: 'assets/fonts' });
  app.import(`${uiThemeAssetsDir}/outline-icons.woff2`, { destDir: 'assets/fonts' });

  // GOSTUI2
  const ghostThemeAssetsDir = 'node_modules/ember-flexberry-themes/src/themes/ghost/assets';
  app.import(`${ghostThemeAssetsDir}/fonts.css`);
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w170-regular_g_temp.eot`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w170-regular_g_temp.ttf`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w170-regular_g_temp.woff`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w170-regular_g_temp.woff2`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w450-medium_g_temp.eot`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w450-medium_g_temp.ttf`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w450-medium_g_temp.woff`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w450-medium_g_temp.woff2`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w706-bold_g_temp.eot`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w706-bold_g_temp.ttf`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w706-bold_g_temp.woff`, { destDir: 'assets/fonts' });
  app.import(`${ghostThemeAssetsDir}/fonts/GOSTUI2/GOSTUI2-w706-bold_g_temp.woff2`, { destDir: 'assets/fonts' });

  // guideline-icons
  app.import(`${ghostThemeAssetsDir}/guideline-icons.css`);
  app.import(`${ghostThemeAssetsDir}/fonts/guideline-icons/guideline-icons.eot`, { destDir: 'assets/fonts/guideline-icons' });
  app.import(`${ghostThemeAssetsDir}/fonts/guideline-icons/guideline-icons.ttf`, { destDir: 'assets/fonts/guideline-icons' });
  app.import(`${ghostThemeAssetsDir}/fonts/guideline-icons/guideline-icons.woff`, { destDir: 'assets/fonts/guideline-icons' });
  app.import(`${ghostThemeAssetsDir}/fonts/guideline-icons/guideline-icons.woff2`, { destDir: 'assets/fonts/guideline-icons' });
  app.import(`${ghostThemeAssetsDir}/fonts/guideline-icons/guideline-icons.svg`, { destDir: 'assets/fonts/guideline-icons' });

  return app.toTree();
};
