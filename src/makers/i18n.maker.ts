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

export function useI18n() {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { t, te, tm, rt, d, n, ...globalApi } = i18n.global;

  return {
    t: t.bind(i18n),
    te: te.bind(i18n),
    tm: tm.bind(i18n),
    rt: rt.bind(i18n),
    d: d.bind(i18n),
    n: n.bind(i18n),
    ...globalApi
  };
}
