import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Image, Text, SimpleGrid, Heading, Flex, Button, Link } from '@chakra-ui/react'
import { getBeerList } from '../services/getBeerList'
import { ITEMS_PER_PAGE } from '../services/config'
import Skeleton from './Skeleton'

export default function BeerList() {
  const [beerList, setBeerList] = useState()
  const [page, setPage] = useState(1)

  useEffect(() => {
    getBeerList(page).then(setBeerList)
  }, [page])

  const handleNextPage = () => {
    setPage((prev) => (beerList.length !== 0 ? prev + 1 : prev))
  }
  const handlePrevPage = () => {
    setPage((prev) => (prev === 1 ? 1 : prev - 1))
  }

  return (
    <>
      <Flex>
        <Link onClick={handlePrevPage}>Prev Page</Link>
        <Link onClick={handleNextPage}>Next Page</Link>
      </Flex>
      <SimpleGrid columns={[1, 1, 2]} spacing={10}>
        {!beerList && [...Array(ITEMS_PER_PAGE).keys()].map((i) => <Skeleton key={i} />)}
        {beerList && beerList.length === 0 && <p>No hay mas items</p>}
        {beerList &&
          beerList.map((beer) => (
            <Flex
              rounded="5px"
              height="stretch"
              direction="column"
              p={[2, 4]}
              key={beer.id}
              boxShadow="lg"
              bg="white"
            >
              <Heading size="lg" pb="8">
                {beer.name}
              </Heading>
              <Flex align="start" gap="4" height="stretch">
                <Image w="50px" src={beer.image_url}></Image>
                <Flex direction="column" align="end" height="stretch">
                  <Text mb="4" noOfLines={4}>
                    {beer.description}
                  </Text>
                  <Button bgColor="teal" color="white" mt="4">
                    <RouteLink to={`/beer/${beer.id}`}>View details</RouteLink>
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          ))}
      </SimpleGrid>
    </>
  )
}
