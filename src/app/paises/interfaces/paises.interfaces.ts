export interface PaisSmall {
    name: string;
    alpha3Code: string;
<<<<<<< HEAD
}

export interface Pais {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion: string;
    region: Region;
    population: number;
    latlng: number[];
    demonym: string;
    area?: number;
    timezones: string[];
    nativeName: string;
    numericCode: string;
    flags: Flags;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flag: string;
    regionalBlocs: RegionalBloc[];
    independent: boolean;
    gini?: number;
    borders?: string[];
    cioc?: string;
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export enum Region {
    Americas = "Americas",
    Europe = "Europe",
}

export interface RegionalBloc {
    acronym: Acronym;
    name: Name;
    otherAcronyms?: string[];
    otherNames?: string[];
}

export enum Acronym {
    Eu = "EU",
    Usan = "USAN",
}

export enum Name {
    EuropeanUnion = "European Union",
    UnionOfSouthAmericanNations = "Union of South American Nations",
}

export interface Translations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}
=======
}
>>>>>>> 7701889e43dc34d809cc996098715750deb758ca
