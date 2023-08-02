import axios from "axios"
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f6c4aa140b654948955373779105f992'
    }
})