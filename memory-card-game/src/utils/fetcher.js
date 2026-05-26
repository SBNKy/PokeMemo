const MAX_POKEMON_ID = 151;
const URL = "https://pokeapi.co/api/v2/pokemon";
export default async function fetchPokemons(size = 10) {
    const randomIds = new Set();

    while (randomIds.size < size) {
        const randomId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
        randomIds.add(randomId);
    }

    const fetchPromises = Array.from(randomIds).map((id) =>
        fetch(`${URL}/${id}`).then((res) => {
            if (!res.ok)
                throw Error(
                    `Error with fetching data for pokemon with ID ${id}`,
                );
            return res.json();
        }),
    );

    try {
        const result = await Promise.all(fetchPromises);
        console.log(result);
        return result.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
        }));
    } catch (error) {
        console.error("Error with fetching data: ", error);
        return [];
    }
}
