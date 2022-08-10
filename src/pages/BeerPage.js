import React from 'react'
import { useParams } from 'react-router-dom'
import BeerDetail from '../components/BeerDetail'

export default function BeerPage() {
  const { id } = useParams()

  return <BeerDetail id={id} />
}
