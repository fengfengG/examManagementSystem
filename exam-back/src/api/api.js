import axios from 'axios';
export function insertQuestion() {
    const url = "/exam/questionsType";
    return axios.get(url)
}
