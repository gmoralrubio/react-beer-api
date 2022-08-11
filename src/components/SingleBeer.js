import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function SingleBeer({ beerData }) {
  return (
    <>
      {beerData && (
        <HStack align="start" mt="10">
          <VStack align="start" width="400px">
            <Heading textAlign="left">{beerData.name}</Heading>
            <Text fontSize="md">{beerData.description}</Text>
          </VStack>
          <Box boxSize="lg">
            {beerData.image_url && (
              <Image
                boxSize="300px"
                objectFit="contain"
                src={beerData.image_url}
                alt={beerData.name}
              />
            )}
          </Box>
        </HStack>
      )}
    </>
  )
}
