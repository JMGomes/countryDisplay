import {Country} from "../api/CountryResponse";

export const REGIONS_ALL = 'All';

export const buildRegions = (countries: Country[]): string[] => {
  const unique = (value: any, index: any, self: string | any[]) => {
    return self.indexOf(value) === index
  }
  const regions = countries
  .map((country) => country.region)
  .filter(unique);

  regions.unshift("All");
  return regions;
}

export const isMatchCountryAndRegion = (c: Country, region: string) => {
  if (region == REGIONS_ALL) return true;
  else {
    return (
        c.region === region
    );
  }
}