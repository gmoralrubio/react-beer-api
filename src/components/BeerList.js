import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
// prettier-ignore
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Link, Text} from '@chakra-ui/react'
import { getBeerList } from '../services/getBeerList'

export default function BeerList() {
  const [beerList, setBeerList] = useState()

  useEffect(() => {
    getBeerList().then(setBeerList)
  }, [])

  return (
    <>
      <Accordion allowMultiple>
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
      </Accordion>
    </>
  )
}
