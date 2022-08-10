import React from 'react'
// prettier-ignore
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, } from '@chakra-ui/react'
import { getBeerList } from '../services/getBeerList'
import { useState } from 'react'
import { useEffect } from 'react'

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
              <AccordionPanel pb={4}>{beer.description}</AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </>
  )
}
