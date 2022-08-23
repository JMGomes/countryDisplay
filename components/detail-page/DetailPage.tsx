import {Country} from "../../api/CountryResponse";
import {
  buildCurrenciesString,
  buildLanguagesString,
  formatPopulation,
  getNativeName
} from "../../utils/CountriesUtils";
import {BorderCountryButton} from "../BorderCountryButton";
import {ReactNode} from "react";

export interface Props {
  country: Country;
  borderCountries: { border: string; commonName: string; }[];
}

const singleLabel = (label: string, children: ReactNode): ReactNode => {
  return (<p>
        <span style={{fontWeight: "bold"}}>{label}: </span>
        {children}
      </p>
  )
}

const renderColumns = (country: Country): ReactNode => {
  return (
      <>
        <div className="detail-page__first-column">
          {singleLabel('Native Name', getNativeName(country))}
          {singleLabel('Population', formatPopulation(country.population))}
          {singleLabel('Region', country.region)}
          {singleLabel('Sub Region', country.subregion)}
          {singleLabel('Capital', country.capital)}
        </div>
        <div className="detail-page__second-column">
          {singleLabel('Top Level Domain', country.tld)}
          {singleLabel('Currencies', buildCurrenciesString(country))}
          {singleLabel('Language', buildLanguagesString(country))}
        </div>
      </>
);
}

export const DetailPage = ({country, borderCountries}: Props) => {
  return (
      <div className="detail-page" style={{display: "flex", flexWrap: 'wrap'}}>
        <div className='detail-page__flag-container'>
          <img src={country.flags.svg}/>
        </div>
        <div className="detail-page__info">
          <h1>{country.name.common}</h1>
          {renderColumns(country)}
          <p style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center',
            alignItems: 'center',
          }}>
            <span style={{fontWeight: "bold"}}>Border Countries: </span>{
            borderCountries.map(b =>
                <BorderCountryButton
                    key={b.border}
                    commonName={b.commonName}
                    border={b.border}/>
            )}
          </p>
        </div>
      </div>
  );
}