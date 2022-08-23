import {CountryView} from "./CountryView";
import {SearchInput} from "./SearchInput";
import {useEffect, useState} from "react";
import {buildRegions, isMatchCountryAndRegion, REGIONS_ALL} from "../utils/CountriesRegionsUtils";
import {isMatchCountryAndSearchTerm} from "../utils/isMatchCountryAndSearchTerm";
import {SearchSelect} from "./SearchSelect";
import {Country} from "../api/CountryResponse";
import {formatPopulation} from "../utils/CountriesUtils";

export interface Props {
  countries: Country[];
}

export const CountryList = ({countries}: Props) => {
  const [regions, setRegions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionSelected, setRegionSelected] = useState(REGIONS_ALL);
  const [currentCountries, setCurrentCountries] = useState<Country[]>(countries);

  useEffect(() => {
    setRegions(buildRegions(countries));
  }, [])

  useEffect(() => {
    setCurrentCountries(
        countries
        .filter(c => isMatchCountryAndSearchTerm(c, searchTerm))
        .filter(c => isMatchCountryAndRegion(c, regionSelected))
    )
  }, [searchTerm, regionSelected, countries])

  return (
      <>
        <div className="search-containers">
          <SearchInput onChange={setSearchTerm}/>
          <SearchSelect regions={regions} onChange={setRegionSelected}/>
        </div>
        <div className="country-list-container">
          {
            currentCountries.map((country) =>
                <CountryView
                    key={country.name.common}
                    flag={country.flags.svg}
                    name={country.name.common}
                    population={formatPopulation(country.population)}
                    capital={country.capital}
                    region={country.region}
                    code={country.cca3}
                />
            )
          }
        </div>
      </>);
};