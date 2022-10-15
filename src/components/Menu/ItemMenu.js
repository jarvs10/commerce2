import React from 'react'
import { Link } from 'react-router-dom'
import { ItemMenuWrapper } from './styles'

const ItemMenu = ({ icon:Icon, label, path }) => {
  return (
    <Link to={path}>
      <ItemMenuWrapper>
          <Icon />
          <p>{label}</p>
      </ItemMenuWrapper>
    </Link>
  )
}

export default ItemMenu