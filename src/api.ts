import axios from "axios";

    const BASE = 'https://api.b7web.com.br/cinema/'

export const api = {
    getAllMovies: async () => {
        let response = await axios.get(`${BASE}`)
        return response.data
    }
}