import React from 'react'
import { CardShopContent, CardShopImage, CardShopWrapper } from './styles'

const CardShop = ({ image, name, location, category, id }) => {
  return (
    <CardShopWrapper to={`/products/${id}`}>

      <CardShopImage>
        <img src={image} alt={name} />
      </CardShopImage>

      <CardShopContent>
        <h4>{name}</h4>
        <p>{location}</p>
        <span>{category}</span>
      </CardShopContent>
      
    </CardShopWrapper>
  )
}

export default CardShop