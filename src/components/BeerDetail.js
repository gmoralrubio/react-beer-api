import React from 'react'
import { useState, useEffect } from 'react'
import { getBeer } from '../services/getBeer'
import BeerCard from './BeerCard'
import Skeleton from './Skeleton'

export default function BeerDetail({ id }) {
  const [beerDetail, setBeerDetail] = useState()
  useEffect(() => {
    getBeer(id).then(setBeerDetail)
  }, [id])
  return (
    <>
      {!beerDetail && <Skeleton />}
      {beerDetail && <BeerCard beerData={beerDetail} isFullSize={true} />}
    </>
  )
}
