interface CurrencyFormat {
  prefix: string;
  suffix: string;
}

interface Currency {
  code: string;
  name: string;
  name_native: string;
  plural: string;
  plural_native: string;
  symbol: string;
  symbol_native: string;
  format: {
    negative: CurrencyFormat;
    positive: CurrencyFormat;
  };
}

interface Location {
  continent: Region;
  country: Country;
  region: Region;
  city: string;
  postal?: string;
  latitude: number;
  longitude: number;
  language: Language;
  in_eu: boolean;
}

interface Country {
  area: number;
  borders: string[];
  calling_code: string;
  capital: string;
  code: string;
  name: string;
  population: number;
  population_density: number;
  flag: CountryFlag;
  languages: Language[];
  tld: string;
}

interface Language {
  code: string;
  name: string;
  native: string;
}

interface CountryFlag {
  emoji: string;
  emoji_unicode: string;
  emojitwo: string;
  noto: string;
  twemoji: string;
  wikimedia: string;
}

interface Region {
  code: string;
  name: string;
}

interface TimeZone {
  id: string;
  abbreviation: string;
  current_time: string;
  name: string;
  offset: number;
  in_daylight_saving: boolean;
}

export interface IpRegistryResponse {
  ip: string;
  type: string;
  hostname: string;
  currency: Currency;
  location: Location;
  time_zone: TimeZone;
}
