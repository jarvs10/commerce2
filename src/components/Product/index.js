import React from 'react'
import { Button } from '../../globalStyles'
import { Theme } from '../../themes/theme'
import { currencyFormat } from '../../utils/CurrencyFormat'
import { ProductWrapper } from './styles'

export const Product = ({ id, name, precio, img, onPress, hasAction, textAction }) => {

  return (
    <ProductWrapper>
      <img src={img} alt={name} width='50px' />
      <h2>{name}</h2>
      <h3>{ currencyFormat(precio) } </h3>
      {
        hasAction && 
        <Button onClick={ e => onPress(id)} bgColor={Theme.secondary}>{textAction}</Button>
      }
      
    </ProductWrapper>
  )
}
