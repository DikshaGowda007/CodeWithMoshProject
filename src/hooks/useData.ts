import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number;
    next?: string;
    previous?: string;
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
      const controller = new AbortController();
      setLoading(true)
      apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal})
        .then((res)=>{
          setData(res.data.results)
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

    return { data, error, isLoading};
}

export default useData;