export interface ICountryInfo {
    flagUrl: string;
    thumbnailUrl: string;
    thumbnailUrlAuthor: string;
    name: string;
    code: string;
    continent: string;
    capital: string;
    languages: Language[];
    population: number;
    currency: string;
    subdivisions: Subdivision[];
}

export interface Language {
    name: string;
}

export interface Subdivision {
    name: string;
}