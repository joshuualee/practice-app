import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const pokemon = await getPokemon(request.params.id);
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon").then(
    (response) => response.json()
  );
  return NextResponse.json(pokemon);
}
// https://pokeapi.co/api/v2/pokemon/ditto
