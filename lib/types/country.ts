export interface CountryBase {
  name: Name;
  capital: string[];
  flags: Flags;
  population: number;
  region: string;
}

export type Name = {
  common: string;
  official: string;
  nativeName: object;
};

export type Flags = {
  svg: URL;
  png: URL;
  alt: string;
};

export type CountriesResponse = {
  error: boolean;
  msg?: string;
  data?: CountryBase[];
};
