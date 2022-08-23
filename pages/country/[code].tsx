import type {NextPage} from 'next'
import {Country} from "../../api/CountryResponse";
import {DetailPage} from "../../components/detail-page/DetailPage";
import {fetchAllCountries} from "../../api/requests/fetchAllCountries";
import {fetchCountryByCode} from "../../api/requests/fetchCountryByCode";
import {fetchCountriesByCode} from "../../api/requests/fetchCountriesByCode";

interface Props {
  country: Country;
  borderCountries: { border: string; commonName: string; }[];
}

const Home: NextPage<Props> = ({country, borderCountries}) => {
  return (<DetailPage country={country} borderCountries={borderCountries} />)
}

export async function getStaticPaths() {
  const countries: any[] = await fetchAllCountries();
  const validCodes: string[] = [];
  countries.forEach((c) => {
    validCodes.push(c.cca3);
  });
  const paths = validCodes
  .filter((validCode) => validCode != undefined)
  .map((validCode) => ({
    params: {code: validCode},
  }));

  return {
    paths: paths,
    fallback: false
  };
}


// @ts-ignore
export async function getStaticProps({params}) {
  const country: Country = await fetchCountryByCode(params.code);
  const borderCountries: { border: string; commonName: string; }[] = [];
  if (country.borders) {
    const countries = await fetchCountriesByCode(country.borders);
    country.borders.forEach((border: string) => {
      borderCountries.push({
        border: border,
        commonName: countries.filter(br => br.cca3 === border)[0].name.common
      });
    })
  }

  return {
    props: {
      country: country,
      borderCountries: borderCountries,
    },
  }
}

export default Home
