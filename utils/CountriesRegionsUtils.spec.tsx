import {buildRegions, isMatchCountryAndRegion, REGIONS_ALL} from "./CountriesRegionsUtils";
import {Country} from "../api/CountryResponse";

describe("CountriesRegionsUtil", () => {
  describe("buildRegions()", () => {
    it('empty list should be populated with default value', () => {
      const res = buildRegions([]);
      expect(res).toEqual([REGIONS_ALL]);
    });
    it('single elem list should be populated with default value + elem', () => {
      const c: Country = {region: 'region1'} as Country;
      const res = buildRegions([c]);
      expect(res).toEqual([REGIONS_ALL, 'region1']);
    });
    it('multiple list should be populated with default value + elem (no duplicates)', () => {
      const c: Country = {region: 'region1'} as Country;
      const c2: Country = {region: 'region2'} as Country;
      const res = buildRegions([c, c2]);
      expect(res).toEqual([REGIONS_ALL, 'region1', 'region2']);
    });
    it('multiple list should be populated with default value + elem (with duplicates)', () => {
      const c: Country = {region: 'region1'} as Country;
      const c2: Country = {region: 'region2'} as Country;
      const c3: Country = {region: 'region1'} as Country;
      const c4: Country = {region: 'region3'} as Country;
      const c5: Country = {region: 'region3'} as Country;
      const res = buildRegions([c, c2, c3, c4, c5]);
      expect(res).toEqual([REGIONS_ALL, 'region1', 'region2', 'region3']);
    });
  });
  describe("isMatchCountryAndRegion()", () => {
    it('should return false when regions dont match', () => {
      const c1: Country = {region: 'region1'} as Country;
      const res = isMatchCountryAndRegion(c1, 'some-other-region');
      expect(res).toBeFalsy();
    });
    it('should return true when regions match', () => {
      const c1: Country = {region: 'region1'} as Country;
      const res = isMatchCountryAndRegion(c1, 'region1');
      expect(res).toBeTruthy();
    });
    it('should return true when regions is REGIONS_ALL', () => {
      const c1: Country = {region: 'region1'} as Country;
      const res = isMatchCountryAndRegion(c1, REGIONS_ALL);
      expect(res).toBeTruthy();
    });
  });
});