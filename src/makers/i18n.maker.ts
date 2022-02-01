import {
  createI18n,
  LocaleMessages,
  VueMessageType
} from 'vue-i18n';
import { LanguageEnum } from '@/enum/common.enum';

function createLangsJson(context: Record<string, { [key: string]: string }>): { [x: string]: LocaleMessages<VueMessageType> } {
  const langArray = Object.keys(context).map(k => ({ filepath: k, obj: context[k] }));
  const messages: LocaleMessages<VueMessageType | object> = {};

  langArray.forEach(({ filepath, obj }) => {
    const matched = /(?<locale>[a-z0-9-_]+)\/(?<prefix>[a-z0-9-_]+)\./i.exec(filepath);

    if (matched && matched.groups && matched.groups.locale && matched.groups.prefix) {
      const { locale, prefix } = matched.groups;

      messages[locale] = messages[locale] || {};
      (messages[locale] as any)[prefix] = { ...obj };
    }
  });

  return messages as { [x: string]: LocaleMessages<VueMessageType> };
}

function loadLocaleMessages(): { [x: string]: LocaleMessages<VueMessageType> } {
  const locales = import.meta.globEager('/src/i18n/**/*.json');

  return createLangsJson(locales);
}

export const i18n = createI18n({
  locale: localStorage.getItem('language') ?? LanguageEnum['zh-tw'],
  messages: loadLocaleMessages()
});
