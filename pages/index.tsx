import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {CountryList} from "../components/CountryList";
import {Country} from "../api/CountryResponse";
import {sortCountriesAlphabetically} from "../utils/CountriesUtils";

interface Props {
  countries: Country[];
}

const Home: NextPage<Props> = (props) => {
  return (
      <div className={styles.container}>
        <CountryList countries={props.countries}/>
      </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://restcountries.com/v3.1/all', {
    method: 'GET'
  });
  const countries: Country[] = await res.json();
  sortCountriesAlphabetically(countries);

  return {
    props: {
      countries: countries,
    },
  }
}

export default Home;
