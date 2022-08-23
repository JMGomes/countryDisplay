import {Country} from "../api/CountryResponse";


export const buildCurrenciesString = (c: Country): string => {
  return Object.keys(c.currencies)
  .map(k => c.currencies[k].name)
  .join(', ')
}

export const buildLanguagesString = (c: Country): string => {
  return Object.keys(c.languages)
  .map(k => c.languages[k])
  .join(', ')
}

export const getNativeName = (c: Country): string => {
  for (const key in c.name.nativeName) {
    return c.name.nativeName[key].common;
  }
  return c.name.common;
}

export const formatPopulation = (pop: number): string => {
  return pop.toLocaleString()
}

export const sortCountriesAlphabetically = (countries: Country[]): void => {
  countries.sort((a,b) => a.name.common.localeCompare(b.name.common));
}