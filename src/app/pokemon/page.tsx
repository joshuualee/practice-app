import Link from "next/link";

export default async function PokemonPage() {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon").then((res) =>
    res.json()
  );

  return (
    <>
      <div className="mx-auto text-center">
        <h1 className="text-center">Pokemon</h1>
      </div>

      <div className="flex justify-center">
        <ul role="list" className="divide-y divide-gray-200">
          {pokemon.results.map(({ name }) => (
            <li key={name} className="flex py-4 w-44">
              <Link
                href={`/pokemon/${name}`}
                className="flex justify-center w-full"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 capitalize  text-center">
                    {name}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
      </div>
    </>
  );
}
