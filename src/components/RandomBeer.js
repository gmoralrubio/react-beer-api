import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomBeer } from '../services/getRandomBeer'
import SingleBeer from './SingleBeer'
import Skeleton from './Skeleton'

export function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState()

  useEffect(() => {
    getRandomBeer().then(setRandomBeer)
  }, [])

  return (
    <>
      {!randomBeer && <Skeleton />}
      {randomBeer && <SingleBeer beerData={randomBeer} />}
    </>
  )
}
