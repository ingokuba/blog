import { siteConfig } from '../config'
import type I18nKey from './i18nKey'
import { en } from './languages/en'
import { de } from './languages/de'

export type Translation = {
  [K in I18nKey]: string
}

const defaultTranslation = en

const map: { [key: string]: Translation } = {
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  de: de,
  de_DE: de,
  de_AT: de,
  de_CH: de,
  de_LI: de,
  de_LU: de,
}

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation
}

export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'en'
  return getTranslation(lang)[key]
}