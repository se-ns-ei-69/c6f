import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
      'errors': {
        'authError': 'Username or password are incorrect.'
      },
      'messages': {
        'emptyList': 'There seems to be nothing here',
        'loading': 'Loading...'
      },
      'buttons': {
        'login': 'Login by Bungie.net',
        'logout': 'Logout'
      },
      'pages': {
        'profile': 'PROFILE',
        'inventory': 'Inventory',
        'home': 'HOME'
      },
      'modals': {
        'logout': {
          'description': 'Are you sure you want to log out?',
          'buttons': {
            'agree': 'Log out',
            'disagree': 'Cancel'
          }
        }
      }
    }
  },
  ua: {
    translation: {
      'errors': {
        'authError': 'Ім\'я користувача або пароль введено неправильно.'
      },
      'messages': {
        'emptyList': 'Здається тут пусто =(',
        'loading': 'Завантаження...'
      },
      'buttons': {
        'login': 'Авторизоватись за допомогою Bungie.net',
        'logout': 'Вийти'
      },
      'pages': {
        'profile': 'ПРОФІЛЬ',
        'inventory': 'Інвентар',
        'home': 'ГОЛОВНА'
      },
      'modals': {
        'logout': {
          'description': 'Ви дійсно хочете вийти з акаунта?',
          'buttons': {
            'agree': 'Вийти',
            'disagree': 'Скасувати'
          }
        }
      }
    }
  },
  ru: {
    translation: {
      'errors': {
        'authError': 'Ім\'я користувача або пароль введено неправильно.'
      },
      'messages': {
        'emptyList': 'Здається тут пусто =(',
        'loading': 'Завантаження...'
      },
      'buttons': {
        'login': 'Авторизоваться с помощью Bungie.net',
        'logout': 'Выйти'
      },
      'pages': {
        'profile': 'ПРОФІЛЬ',
        'inventory': 'Инвентарь',
        'home': 'ГОЛОВНА'
      },
      'modals': {
        'logout': {
          'description': 'Ви дійсно хочете вийти з акаунта?',
          'buttons': {
            'agree': 'Вийти',
            'disagree': 'Скасувати'
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development'
  });


export default i18n;
