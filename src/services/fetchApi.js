import axios from 'axios';

const URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: URL,
});

export const fetchDecks = async () => {
  const result = await api.get('/decks');
  return result.data;
}

export const fetchCards = async () => {
  const result = await api.get('/cards');
  return result.data;
}

export const fetchDeckId = async (id) => {
  const result = await api.get(`/deck/${id}`)
  return result.data;
}
