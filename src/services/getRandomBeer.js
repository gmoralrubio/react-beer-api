import { BASE_URL } from './config'

export async function getRandomBeer() {
  let response = await fetch(`${BASE_URL}/random`)
  let result = await response.json()
  console.log('result', result[0])
  return result[0]
}
