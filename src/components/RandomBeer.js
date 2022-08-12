import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomBeer } from '../services/getRandomBeer'
import BeerCard from './BeerCard'
import Skeleton from './Skeleton'

export function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState()

  useEffect(() => {
    getRandomBeer().then(setRandomBeer)
  }, [])

  return (
    <>
      {!randomBeer && <Skeleton />}
      {randomBeer && <BeerCard beerData={randomBeer} isFullSize={true} />}
    </>
  )
}
