import {Country} from "../CountryResponse";

export const fetchAllCountries = async (): Promise<Country[]> => {
  const res = await fetch('https://restcountries.com/v3.1/all', {
    method: 'GET'
  });
  return await res.json();
}