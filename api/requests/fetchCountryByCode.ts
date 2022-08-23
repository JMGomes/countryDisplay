import {Country} from "../CountryResponse";

export const fetchCountryByCode = async (countryCode: string): Promise<Country> => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`, {
    method: 'GET'
  });
  const result: Country[] = await res.json();
  return result[0];
}