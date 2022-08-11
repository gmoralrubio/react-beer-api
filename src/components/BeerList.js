import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Image, Text, SimpleGrid, Heading, Flex, Button } from '@chakra-ui/react'
import { getBeerList } from '../services/getBeerList'
import { Link as RouteLink } from 'react-router-dom'
import Skeleton from './Skeleton'

export default function BeerList() {
  const [beerList, setBeerList] = useState()

  useEffect(() => {
    getBeerList().then(setBeerList)
  }, [])
  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={10}>
        {!beerList && [...Array(10).keys()].map((f, i) => <Skeleton key={i} />)}
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
