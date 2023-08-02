import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
    {/* {error && <Text>{error}</Text>}
    <table>
      <thead className='my-5'>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {games.map(game =><tr key={game.id}><th scope="row" style={{ lineHeight : 3}}>{game.id}</th><td style={{ lineHeight : 3}}>{game.name}</td></tr>)}
      </tbody>
    </table> */}

    <SimpleGrid columns={{ sm:1, md:2, lg: 3, xl: 3 }} padding={"10px"} spacing={10}>
      {games.map((game)=>(
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid