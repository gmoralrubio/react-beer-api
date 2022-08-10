import { Box } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { getBeer } from '../services/getBeer'

export default function BeerDetail({ id }) {
  const [beerDetail, setBeerDetail] = useState()
  useEffect(() => {
    getBeer(id).then(setBeerDetail)
  }, [])
  return <>{beerDetail && <Box>{beerDetail.name}</Box>}</>
}
