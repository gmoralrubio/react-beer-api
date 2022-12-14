import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <Flex
        minWidth="max-content"
        direction={['column', 'row']}
        alignItems="center"
        gap="2"
        bgColor="blue.500"
        px={[4, 10]}
        py={['4']}
      >
        <Box>
          <Heading size="xl" color="white">
            Beer Api
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup>
          <Button>
            <RouteLink to="/">Home</RouteLink>
          </Button>
          <Button>
            <RouteLink to="/beer-list">Beer List</RouteLink>
          </Button>
          <Button>
            <RouteLink to="/about">About</RouteLink>
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  )
}
