import { BASE_URL } from './config'

export async function getBeerList() {
  let response = await fetch(BASE_URL)
  let result = await response.json()
  return result
}
