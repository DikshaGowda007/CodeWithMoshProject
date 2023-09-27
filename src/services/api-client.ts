import axios, { AxiosRequestConfig } from "axios"
export interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous?: string;
    results: T[]
}
const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f6c4aa140b654948955373779105f992'
    }
})

class APIclient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig)=>{
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
            .catch(err => console.log(`${err.message}`))
    }
}

export default APIclient