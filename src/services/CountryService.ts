import { ICountryInfo, Language, Subdivision } from "../models/ICountryInfo";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';
import { ref } from "vue";
import axios from "axios";

export async function GetICountry(): Promise<ICountryInfo[]> {

    const countries = ref<ICountryInfo[]>([]);

    const client = new ApolloClient({
        uri: 'https://countries.trevorblades.com',
        cache: new InMemoryCache()
    });

    const query = gql`
    query {
            countries {
                name
                code
                capital
                native
                currency
                languages {
                name
                }
                subdivisions{
                name
                }
            }
        }
    `

    const { data } = await client.query({ query });
    countries.value = data.countries.map((country: ICountryInfo) => ({
        ...country,
        languages: country.languages.map((language: Language) => language.name),
        subdivisions: country.subdivisions.map((subdivision: Subdivision) => subdivision.name)
    }));


    return countries.value;
}

export async function GetPopulationByCode(code: string): Promise<number> {

    // URL for population: https://restcountries.com/v3.1/alpha?codes={code}
    const { data } = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${code}`);
    return data[0].population;
}