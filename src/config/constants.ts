export const API_URL = 'https://pokeapi.co/api/v2';

export const SWR_OPTIONS = {
  dedupingInterval: 6000000,
  refreshInterval: 6000000,
  focusThrottleInterval: 6000000,
  fetcher: (url: string) => fetch(url).then((res) => res.json()),
};

export const LANGS = ['en', 'es', 'pt', 'ko', 'ja', 'fr', 'de'];

export const DEFAULT_LANG = 'en';
