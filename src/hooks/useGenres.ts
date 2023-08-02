import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

interface Genre {
    id: number;
    name: string;
}
interface FetchGenresResponse {
    count: number;
    next?: string;
    previous?: string;
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
      const controller = new AbortController();
      setLoading(true)
      apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal})
        .then((res)=>{
          setGenres(res.data.results)
          setLoading(false)
          console.log(`Genre Results`);
          console.log(`${JSON.stringify(res.data.results)}`);
        })
        .catch((err)=>{
            if (err instanceof CanceledError) return;
          setError(err.message)
          setLoading(false)
          console.log(`Error: ${err.message}`);
        })
        return ()=> controller.abort();
    }, []);

    return { genres, error, isLoading};
}

export default useGenres;