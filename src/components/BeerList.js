import { Alert, AlertIcon, Flex, Link, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ITEMS_PER_PAGE } from '../services/config'
import { getBeerList } from '../services/getBeerList'
import BeerCard from './BeerCard'
import Skeleton from './Skeleton'

export default function BeerList() {
  const [beerList, setBeerList] = useState()
  const [page, setPage] = useState(1)

  useEffect(() => {
    scrollToTop()

    getBeerList(page).then(setBeerList)
  }, [page])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleNextPage = () => {
    setBeerList()
    setPage((prev) => (beerList.length !== 0 ? prev + 1 : prev))
  }
  const handlePrevPage = () => {
    setBeerList()
    setPage((prev) => (prev === 1 ? 1 : prev - 1))
  }

  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={10}>
        {!beerList && [...Array(ITEMS_PER_PAGE).keys()].map((i) => <Skeleton key={i} />)}

        {beerList &&
          beerList.map((beer) => (
            <BeerCard key={beer.id} beerData={beer} isFullSize={false} />
          ))}
      </SimpleGrid>
      <Flex gap="4" mt="10" justify="center">
        <Link onClick={handlePrevPage}>Prev page</Link>
        <Link onClick={handleNextPage}>Next page</Link>
      </Flex>
      {beerList && beerList.length === 0 && (
        <Alert mt="10" status="info">
          <AlertIcon />
          No more beers found!
        </Alert>
      )}
    </>
  )
}
