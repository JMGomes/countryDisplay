import React from "react";
import {Country} from "../../api/CountryResponse";
import {CountryList} from "@components/CountryList";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";

const country1: Country = {
  borders: ['POR', 'FRA'],
  capital: "Madrid",
  cca2: "ES",
  cca3: "ESP",
  ccn3: "724",
  cioc: "ESP",
  currencies: {EUR: {name: "Euro", symbol: "€"}, CHF: {name: "Swiss franc", symbol: "Fr."}},
  flags: {png: 'pngFile', svg: 'svgFile'},
  languages: {fra: "French"},
  name: {
    common: "Spain",
    official: "Kingdom of Spain",
    nativeName: {
      spa: {
        official: "Reino de España",
        common: "España"
      }
    }
  },
  population: 47351567,
  region: "Europe",
  subregion: "",
  tld: ["es"]
};
const country2: Country = {
  borders: ['ESP'],
  capital: "Lisbon",
  cca2: "PT",
  cca3: "PRT",
  ccn3: "620",
  cioc: "POR",
  currencies: {EUR: {name: "Euro", symbol: "€"}},
  flags: {png: 'pngFile', svg: 'svgFile'},
  languages: {por: "Portuguese"},
  name: {
    common: "Portugal",
    official: "Portuguese Republic",
    nativeName: {
      spa: {
        official: "República português",
        common: "Portugal"
      }
    }
  },
  population: 10305564,
  region: "Europe",
  subregion: "",
  tld: [".pt"]
};

describe("CountryList", () => {
  it("should render correctly", () => {
    render(<CountryList countries={[country1]}/>);

    // check if search input is rendered
    expect(screen.getByPlaceholderText('Search for country')).toBeInTheDocument();

    // check if country is rendered correctly
    expect(screen.getByTestId('population')).toHaveTextContent('Population: 47,351,567');
    expect(screen.getByTestId('region')).toHaveTextContent('Region: Europe');
    expect(screen.getByTestId('capital')).toHaveTextContent('Capital: Madrid');
  });
  it("should navigate to /country/code correctly", () => {
    render(<CountryList countries={[country1]}/>);

    // search header
    expect(screen.getByText('Spain')).toBeInTheDocument();
    expect(screen.getByText('Spain')).toHaveAttribute('href', '/country/ESP');
  });
  it("should update listing accordingly if input field is updated", async () => {
    render(<CountryList countries={[country1, country2]}/>);

    expect(screen.getByText('Spain')).toBeInTheDocument();
    expect(screen.getByText('Portugal')).toBeInTheDocument();

    // input field
    const inputField = screen.getByPlaceholderText('Search for country');
    fireEvent.change(inputField, {target: {value: 'portugal'}});
    fireEvent.click(inputField);

    await waitFor(() => {
      expect(screen.queryByText('Spain')).not.toBeInTheDocument();
      expect(screen.getByText('Portugal')).toBeInTheDocument();
    });
  });
  it("should render no countries if does not match input field", async () => {
    render(<CountryList countries={[country1, country2]}/>);

    expect(screen.getByText('Spain')).toBeInTheDocument();
    expect(screen.getByText('Portugal')).toBeInTheDocument();

    // input field
    const inputField = screen.getByPlaceholderText('Search for country');
    fireEvent.change(inputField, {target: {value: 'something random not valid'}});
    fireEvent.click(inputField);

    await waitFor(() => {
      expect(screen.queryByText('Spain')).not.toBeInTheDocument();
      expect(screen.queryByText('Portugal')).not.toBeInTheDocument();
    });
  });
});