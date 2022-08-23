export interface Props {
  flag: string;
  name: string,
  population: string,
  region: string,
  capital: string,
  code: string,
}

export const CountryView = ({flag, name, population, region, capital, code}: Props) =>
    <div className="country-container">
      <div className="country-container__block">
        <div className="country-container__block__flag">
          <img src={flag} width="100%" height="100%"/>
        </div>
        <div className="country-container__block__description">
          <h3><a href={`/country/${code}`}>{name}</a></h3>
          <p data-testid="population"><span style={{fontWeight: 'bold'}}>Population: </span>{population}</p>
          <p data-testid="region"><span style={{fontWeight: 'bold'}}>Region: </span>{region}</p>
          <p data-testid="capital"><span style={{fontWeight: 'bold'}}>Capital: </span>{capital}</p>
        </div>
      </div>
    </div>;