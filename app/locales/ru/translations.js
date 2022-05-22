import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'uktio',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'uktio',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'U k t i o_app',
          title: 'U k t i o_app'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'u-k-t-i-o-app': {
          caption: 'uktio',
          title: 'uktio',
          'u-k-t-i-o-app-dolzhnost-l': {
            caption: 'Должности',
            title: ''
          },
          'u-k-t-i-o-app-organizaciya-l': {
            caption: 'Организации',
            title: ''
          },
          'u-k-t-i-o-app-sotrudnik-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'u-k-t-i-o-app-oborudovanie-l': {
            caption: 'Оборудование',
            title: ''
          },
          'u-k-t-i-o-app-tip-oborudovaniya-l': {
            caption: 'Виды оборудования',
            title: ''
          }
        }
      }
    },

    'login-form': {
      'header': 'Войти в систему',
      'sign-up-caption': 'Или зарегистрироваться',
      'enter-login-caption': 'Введите логин',
      'enter-password-caption': 'Введите пароль',
      'login-using-caption': 'Войти в систему с помощью',
      'reset-password-caption': 'Забыли пароль?',
      'login-button-caption': 'Войти'
    },

    'support-form' : {
      'caption': 'Написать в техподдержку',
      'contacts-caption': 'Контакты техподдержки: 8 (800) 300-44-44, rgirsk-support@ics.perm.ru',
      'enter-name-caption': 'Введите Ваше имя',
      'enter-email-caption': 'Введите Вашу почту',
      'enter-message-placeholder': 'Если вы столкнулись с проблемой, опишите подробно: как она проявляется, какие действия и в каком порядке вы совершали. По возможности приложите скриншот',
      'send-button-caption': 'Отправить',
      'attach-file-caption':'Прикрепить файл'
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
