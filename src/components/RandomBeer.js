import React from 'react'
import {
  VStack,
  Heading,
  Box,
  Image,
  Text,
  HStack,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getRandomBeer } from '../services/getRandomBeer'
import BeerList from './BeerList'

export function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState()

  useEffect(() => {
    getRandomBeer().then(setRandomBeer)
  }, [])

  return (
    randomBeer && (
      <HStack align="start" mt="10">
        <VStack align="start" width="400px">
          <Heading textAlign="left">{randomBeer.name}</Heading>
          <Text fontSize="md">{randomBeer.description}</Text>
        </VStack>
        <Box boxSize="lg">
          {randomBeer.image_url && (
            <Image
              boxSize="300px"
              objectFit="contain"
              src={randomBeer.image_url}
              alt={randomBeer.name}
            />
          )}
        </Box>
      </HStack>
    )
  )
}
