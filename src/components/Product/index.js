import React from 'react'
import { Button } from '../../globalStyles'
import { Theme } from '../../themes/theme'
import { currencyFormat } from '../../utils/CurrencyFormat'
import { ProductWrapper } from './styles'

export const Product = ({ id, name, precio, quanty, img, onPress, hasAction, textAction }) => {

  return (
    <ProductWrapper>
      <img src={img} alt={name} width='50px' height='55px' />
      <h2>{name}</h2>
      <h3>{ currencyFormat(precio) } </h3>
      <p>{quanty}</p>
      {
        hasAction && 
        <Button onClick={ e => onPress(id)} bgColor={Theme.secondary}>{textAction}</Button>
      }
      
    </ProductWrapper>
  )
}
