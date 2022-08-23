import {Country} from "../api/CountryResponse";

export const isMatchCountryAndSearchTerm = (c: Country, term: string): boolean => {
  if (term === '') return true;
  const aux = term.toUpperCase();
  return (
      c.cca3.toUpperCase().includes(aux) ||
      (c.ccn3 && c.ccn3.toUpperCase().includes(aux)) ||
      c.cca2.toUpperCase().includes(aux) ||
      (c.cioc && c.cioc.toUpperCase().includes(aux)) ||
      c.name.common.toUpperCase().includes(aux) ||
      c.name.official.toUpperCase().includes(aux)
  );
}