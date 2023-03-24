export default async function SinglePokemonPage({ params }) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  ).then((response) => response.json());

  return (
    <div>
      <h1> {params.name} </h1>
      <h4>Abilities:</h4>
      {pokemon?.abilities?.map(({ ability }) => (
        <p key={ability.name}> {ability.name} </p>
      ))}
      {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
    </div>
  );
}
