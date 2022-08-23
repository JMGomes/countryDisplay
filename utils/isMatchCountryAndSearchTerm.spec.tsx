import {Country} from "../api/CountryResponse";
import {isMatchCountryAndSearchTerm} from "./isMatchCountryAndSearchTerm";

describe("isMatchCountryAndSearchTerm", () => {
  describe("cca3", () => {
    it('should return true for empty term', () => {
      const c: Country = {region: 'region1'} as Country;
      const res = isMatchCountryAndSearchTerm(c, '');
      expect(res).toBeTruthy();
    });
    it('should return true when term is exactly the same as cca3', () => {
      const c: Country = {cca3: 'Portugal'} as Country;
      const res = isMatchCountryAndSearchTerm(c, 'Portugal');
      expect(res).toBeTruthy();
    });
    it('should return true when term is the same as cca2 - different casing', () => {
      const c: Country = {cca3: 'Swiss'} as Country;
      const res = isMatchCountryAndSearchTerm(c, 'swiss');
      expect(res).toBeTruthy();
    });
    it('should return false when term not is the same as cca2', () => {
      const c: Country = {cca3: 'Swiss'} as Country;
      const res = isMatchCountryAndSearchTerm(c, 'swiss2');
      expect(res).toBeFalsy();
    });
  });

});