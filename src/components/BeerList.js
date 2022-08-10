import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  Image,
  Text,
  SimpleGrid,
  Heading,
  Flex,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'
import { getBeerList } from '../services/getBeerList'
import { Link as RouteLink } from 'react-router-dom'

export default function BeerList() {
  const [beerList, setBeerList] = useState()

  useEffect(() => {
    getBeerList().then(setBeerList)
  }, [])

  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={10}>
        {beerList &&
          beerList.map((beer) => (
            <Flex
              bg="#ececec"
              rounded="5px"
              height="stretch"
              direction="column"
              p={[2, 4]}
              key={beer.id}
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

      {/* <Accordion allowMultiple>
        {beerList &&
          beerList.map((beer) => (
            <AccordionItem key={beer.id}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {beer.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">{beer.description}</Text>
                <RouteLink to={`/beer/${beer.id}`}>
                  View details
                </RouteLink>
              </AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion> */}
    </>
  )
}
