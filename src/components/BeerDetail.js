import React from 'react'
import { useState, useEffect } from 'react'
import { getBeer } from '../services/getBeer'
import SingleBeer from './SingleBeer'
import Skeleton from './Skeleton'

export default function BeerDetail({ id }) {
  const [beerDetail, setBeerDetail] = useState()
  useEffect(() => {
    getBeer(id).then(setBeerDetail)
  }, [])
  return (
    <>
      {!beerDetail && <Skeleton />}
      {beerDetail && <SingleBeer beerData={beerDetail} />}
    </>
  )
}
