import {Country, CurrencyMap, LanguageMap} from "../api/CountryResponse";
import {buildCurrenciesString, buildLanguagesString, formatPopulation} from "./CountriesUtils";

describe("CountriesUtils", () => {
  describe("buildCurrenciesString()", () => {
    it('should build currency string correctly for single currency', () => {
      const c: Country = {currencies: {EUR: {name: "Euro", symbol: "€"}} as CurrencyMap} as Country;
      const res = buildCurrenciesString(c);
      expect(res).toEqual('Euro');
    });
    it('should build currency string correctly for multiple currencies', () => {
      const c: Country = {
        currencies: {
          EUR: {name: "Euro", symbol: "€"},
          CHF: {name: "Swiss franc", symbol: "Fr."}
        } as CurrencyMap
      } as Country;
      const res = buildCurrenciesString(c);
      expect(res).toEqual('Euro, Swiss franc');
    });
    it('should return empty string when no currency is present', () => {
      const c: Country = {} as Country;
      const res = buildCurrenciesString(c);
      expect(res).toEqual('');
    });
  });
  describe("buildLanguagesString()", () => {
    it('should build language string correctly for single languages', () => {
      const c: Country = {languages: {fra: "French"} as LanguageMap} as Country;
      const res = buildLanguagesString(c);
      expect(res).toEqual('French');
    });
    it('should build language string correctly for multiple languages', () => {
      const c: Country = {
        languages: {
          fra: "French",
          gsw: "Swiss German",
          ita: "Italian",
          roh: "Romansh"
        } as LanguageMap
      } as Country;
      const res = buildLanguagesString(c);
      expect(res).toEqual('French, Swiss German, Italian, Romansh');
    });
    it('should return empty string when no currency is present', () => {
      const c: Country = {} as Country;
      const res = buildLanguagesString(c);
      expect(res).toEqual('');
    });
  });
  describe("formatPopulation()", () => {
    it('should return 0 for 0', () => {
      const res = formatPopulation(0);
      expect(res).toEqual('0');
    });
    it('should return correctly for 3 digits', () => {
      const res = formatPopulation(343);
      expect(res).toEqual('343');
    });
    it('should return correctly for 4 digits', () => {
      const res = formatPopulation(4355);
      expect(res).toEqual('4,355');
    });
    it('should return correctly for 6 digits', () => {
      const res = formatPopulation(424355);
      expect(res).toEqual('424,355');
    });
    it('should return correctly for 8 digits', () => {
      const res = formatPopulation(42444355);
      expect(res).toEqual('42,444,355');
    });
    it('should return correctly for 12 digits', () => {
      const res = formatPopulation(423599444355);
      expect(res).toEqual('423,599,444,355');
    });
  });
});