import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import UKTIO_AppDolzhnostLForm from './forms/u-k-t-i-o-app-dolzhnost-l';
import UKTIO_AppOborudovanieLForm from './forms/u-k-t-i-o-app-oborudovanie-l';
import UKTIO_AppOrganizaciyaLForm from './forms/u-k-t-i-o-app-organizaciya-l';
import UKTIO_AppSotrudnikLForm from './forms/u-k-t-i-o-app-sotrudnik-l';
import UKTIO_AppTipOborudovaniyaLForm from './forms/u-k-t-i-o-app-tip-oborudovaniya-l';
import UKTIO_AppDolzhnostEForm from './forms/u-k-t-i-o-app-dolzhnost-e';
import UKTIO_AppOborudovanieEForm from './forms/u-k-t-i-o-app-oborudovanie-e';
import UKTIO_AppOrganizaciyaEForm from './forms/u-k-t-i-o-app-organizaciya-e';
import UKTIO_AppSotrudnikEForm from './forms/u-k-t-i-o-app-sotrudnik-e';
import UKTIO_AppTipOborudovaniyaEForm from './forms/u-k-t-i-o-app-tip-oborudovaniya-e';
import UKTIO_AppDolzhnostModel from './models/u-k-t-i-o-app-dolzhnost';
import UKTIO_AppOborudovanieModel from './models/u-k-t-i-o-app-oborudovanie';
import UKTIO_AppOrganizaciyaModel from './models/u-k-t-i-o-app-organizaciya';
import UKTIO_AppSotrudnikModel from './models/u-k-t-i-o-app-sotrudnik';
import UKTIO_AppTipOborudovaniyaModel from './models/u-k-t-i-o-app-tip-oborudovaniya';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'u-k-t-i-o-app-dolzhnost': UKTIO_AppDolzhnostModel,
    'u-k-t-i-o-app-oborudovanie': UKTIO_AppOborudovanieModel,
    'u-k-t-i-o-app-organizaciya': UKTIO_AppOrganizaciyaModel,
    'u-k-t-i-o-app-sotrudnik': UKTIO_AppSotrudnikModel,
    'u-k-t-i-o-app-tip-oborudovaniya': UKTIO_AppTipOborudovaniyaModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'u-k-t-i-o-app': {
          caption: 'u-k-t-i-o-app',
          title: 'u-k-t-i-o-app',
          'u-k-t-i-o-app-dolzhnost-l': {
            caption: 'u-k-t-i-o-app-dolzhnost-l',
            title: 'u-k-t-i-o-app-dolzhnost-l'
          },
          'u-k-t-i-o-app-organizaciya-l': {
            caption: 'u-k-t-i-o-app-organizaciya-l',
            title: 'u-k-t-i-o-app-organizaciya-l'
          },
          'u-k-t-i-o-app-sotrudnik-l': {
            caption: 'u-k-t-i-o-app-sotrudnik-l',
            title: 'u-k-t-i-o-app-sotrudnik-l'
          },
          'u-k-t-i-o-app-oborudovanie-l': {
            caption: 'u-k-t-i-o-app-oborudovanie-l',
            title: 'u-k-t-i-o-app-oborudovanie-l'
          },
          'u-k-t-i-o-app-tip-oborudovaniya-l': {
            caption: 'u-k-t-i-o-app-tip-oborudovaniya-l',
            title: 'u-k-t-i-o-app-tip-oborudovaniya-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'u-k-t-i-o-app-dolzhnost-l': UKTIO_AppDolzhnostLForm,
    'u-k-t-i-o-app-oborudovanie-l': UKTIO_AppOborudovanieLForm,
    'u-k-t-i-o-app-organizaciya-l': UKTIO_AppOrganizaciyaLForm,
    'u-k-t-i-o-app-sotrudnik-l': UKTIO_AppSotrudnikLForm,
    'u-k-t-i-o-app-tip-oborudovaniya-l': UKTIO_AppTipOborudovaniyaLForm,
    'u-k-t-i-o-app-dolzhnost-e': UKTIO_AppDolzhnostEForm,
    'u-k-t-i-o-app-oborudovanie-e': UKTIO_AppOborudovanieEForm,
    'u-k-t-i-o-app-organizaciya-e': UKTIO_AppOrganizaciyaEForm,
    'u-k-t-i-o-app-sotrudnik-e': UKTIO_AppSotrudnikEForm,
    'u-k-t-i-o-app-tip-oborudovaniya-e': UKTIO_AppTipOborudovaniyaEForm
  },

});

export default translations;
