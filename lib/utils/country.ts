import type { CountriesResponse, CountryBase } from "../types/country";

const API_BASE_URL = "https://restcountries.com/v3.1";

export const getCountries = async (): Promise<CountriesResponse> => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/all?fields=name,flags,population,capital,region`,
    );

    if (!res.ok)
      return { error: true, msg: `Fail to get countries: ${res.status}` };

    const countries: CountryBase[] = await res.json();

    return { error: false, data: countries };
  } catch (error) {
    return { error: true, msg: `Fail to get countries: ${error}` };
  }
};
