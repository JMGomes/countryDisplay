export interface Country {
  name: CountryName;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  flags: Flag;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  tld: any;
  currencies: CurrencyMap;
  languages: LanguageMap;
  borders: string[];
}

interface CountryName {
  common: string;
  official: string;
  nativeName: NativeNameMap;
}

interface Flag {
  png: string;
  svg: string;
}

type NativeNameMap = {
  [key: string]: NativeName
}

interface NativeName {
  official: string;
  common: string;
}

type CurrencyMap = {
  [currency: string]: Currency
}

interface Currency {
  name: string;
  symbol: string;
}

type LanguageMap = {
  [language: string]: string
}