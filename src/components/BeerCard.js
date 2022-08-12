import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Heading, Image, Text, Flex, Button, Spacer } from '@chakra-ui/react'

export default function BeerCard({ beerData, isFullSize }) {
  const imgUrl = beerData.image_url
    ? beerData.image_url
    : 'https://via.placeholder.com/300x300.png?text=Image+not+found'
  return (
    <Flex
      rounded="5px"
      height="stretch"
      direction="column"
      p={[2, 4]}
      boxShadow="lg"
      bg="white"
    >
      <Heading size="lg" pb="8">
        {beerData.name}
      </Heading>
      <Flex align="start" gap="8">
        <Image w={isFullSize ? '100px' : '50px'} src={imgUrl}></Image>
        <Flex direction="column" align="start">
          <Text mb="4" noOfLines={4}>
            {beerData.description}
          </Text>
          {!isFullSize && (
            <Button colorScheme="blue" size="sm">
              <RouteLink to={`/beer/${beerData.id}`}>View details</RouteLink>
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
