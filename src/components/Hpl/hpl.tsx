import React from 'react'
import Badge from './Badge/Badge'
import Price from './Price/Price'
import CargoPrice from './CargoPrice/CargoPrice'
import DropRatio from './DropRatio/DropRatio'
import Header from './Header/Header'
import './hpl.css'

function Hpl() {
  return (
    <div>
        <Header />
        <DropRatio />
        <CargoPrice />
        <Badge />
        <Price />
    </div>
  )
}

export default Hpl