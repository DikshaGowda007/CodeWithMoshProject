import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string
}

interface FetchGamesResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(()=>{
      apiClient.get<FetchGamesResponse>('/games')
        .then((res)=>{
          setGames(res.data.results)
          console.log(`Game Results`);
          console.log(`${res.data.results}`);
        })
        .catch((err)=>{
          setError(err.message)
          console.log(`Error: ${err.message}`);
        })
    }, [])
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