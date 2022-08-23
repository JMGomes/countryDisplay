import {Country} from "../CountryResponse";

export const fetchCountriesByCode = async (codes: string[]): Promise<Country[]> => {
  const countries = await fetch(`https://restcountries.com/v3.1/alpha/?codes=${codes.join(',')}`, {
    method: 'GET'
  });
  return await countries.json();
}