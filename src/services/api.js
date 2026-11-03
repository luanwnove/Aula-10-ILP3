import axios from 'axios'

// A JSONPlaceholder é uma API pública de demonstração; operações de escrita
// retornam respostas simuladas e não persistem no servidor remoto.
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.response.use(
  response => response,
  error => {
    console.error('Falha na comunicação com a API:', error.message)
    return Promise.reject(error)
  }
)

export default api