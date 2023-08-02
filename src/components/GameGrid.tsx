import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";


const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
    {error && <Text>{error}</Text>}
    <table>
      <thead className='my-5'>
        <tr className=''>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {games.map(game =><tr key={game.id}><th scope="row" style={{ lineHeight : 3}}>{game.id}</th><td style={{ lineHeight : 3}}>{game.name}</td></tr>)}
      </tbody>
    </table>
    </>
  )
}

export default GameGrid