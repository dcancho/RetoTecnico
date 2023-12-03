import { ICountryInfo, Language, Subdivision } from "../models/ICountryInfo";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';
import axios from "axios";

export async function GetICountry(): Promise<ICountryInfo[]> {
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
  });

  const query = gql`
    query {
      countries {
        name
        code
        continent {
          name
        }
        capital
        native
        currency
        languages {
          name
        }
        subdivisions {
          name
        }
      }
    }
  `;

  const { data } = await client.query({ query });

  const countries: ICountryInfo[] = data.countries.map((country: any) => ({
    name: country.name,
    code: country.code,
    continent: country.continent.name,
    capital: country.capital,
    native: country.native,
    currency: country.currency,
    languages: country.languages.map((language: Language) => language.name),
    subdivisions: country.subdivisions.map((subdivision: Subdivision) => subdivision.name),
    
    // Properties to be fetched later
    flagUrl: '',
    thumbnailUrl: '',
    thumbnailUrlAuthor: '',
    population: 0,
    areImagesLoaded: false
  }));

  return countries;
}

export async function GetPopulationByCode(code: string): Promise<number> {
  const { data } = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${code}`);
  return data[0].population;
}

export async function GetFlagUrlPictureByCode(code: string): Promise<string> {
  const { data } = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${code}`);
  return data[0].flags.png;
}

export async function GetThumbnailUrlByCountryAndCapitalName(name: string, capital: string): Promise<string> {
  const { data } = await axios.get(`https://pixabay.com/api/?key=41029351-f616d0e6fdeee349a631b9e1a&q=${name}+city&image_type=photo`);
  return data.hits[0].webformatURL;
}