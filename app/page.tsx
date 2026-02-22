import { CountriesResponse, CountryBase } from "@/lib/types/country";
import { getCountries } from "@/lib/utils/country";
import Image from "next/image";

export default async function Home() {
  const countries: CountriesResponse = await getCountries();

  return (
    <main className="container mx-auto px-6 sm:px-0">
      <section className="grid md:grid-cols-[repeat(auto-fit,minmax(266,1fr))] gap-14">
        {countries.data?.map((country: CountryBase) => (
          <article
            key={country.name.official}
            className="grid dark:bg-blue-900"
          >
            <div className="order-2 p-6">
              <h3 className="text-xl font-bold mb-6">{country.name.common}</h3>
              <dl>
                <div className="flex gap-0.5">
                  <dt className="font-bold">Population: </dt>
                  <dd>{country.population}</dd>
                </div>
                <div className="flex gap-0.5">
                  <dt className="font-bold">Region: </dt>
                  <dd>{country.region}</dd>
                </div>
                <div className="flex gap-0.5">
                  <dt className="font-bold">Capital: </dt>
                  <dd>{country.capital}</dd>
                </div>
              </dl>
            </div>
            <Image
              className="order-1 h-41.5 w-full"
              src={country.flags.svg.toString()}
              alt={country.flags.alt}
              width={266}
              height={166}
            />
          </article>
        ))}
      </section>
    </main>
  );
}
