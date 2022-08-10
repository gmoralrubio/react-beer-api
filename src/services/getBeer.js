import { BASE_URL } from './config'

export async function getBeer(id) {
  let response = await fetch(`${BASE_URL}/${id}`)
  let result = await response.json()
  return result[0]
}
