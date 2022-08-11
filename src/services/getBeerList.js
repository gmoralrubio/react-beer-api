import { BASE_URL, ITEMS_PER_PAGE } from './config'

export async function getBeerList(page) {
  let response = await fetch(`${BASE_URL}?page=${page}&per_page=${ITEMS_PER_PAGE}`)
  let result = await response.json()
  return result
}
