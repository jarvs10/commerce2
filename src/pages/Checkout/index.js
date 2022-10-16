import React from 'react';
import Page from '../../components/Page';
import { Product } from '../../components/Product';
import { ProductsGrid } from '../Products/styles';
import { FormWrapper, TotalWrapper } from './styles';


export const Checkout = ({ carrito }) => {
  const sumaPrecios = carrito.reduce((total, suma) => total + suma.precio, 0);

  return (
    <Page>
      <h1>Articulos en el Carrito</h1>
      <ProductsGrid>
        {
          carrito.map((products, key) => <Product
            key={key}
            {...products}
            quanty={'X ' + 1}
          />)
        }
      </ProductsGrid>
      <TotalWrapper>
        <label>Total Carrito</label>
        <input type="text" defaultValue={'$ ' + sumaPrecios} />
      </TotalWrapper>

      <h4>Datos Usuario</h4>

      <FormWrapper>
        <label>Direccion de Entrega</label>
        <input type="text" placeholder='cra/calle/casa o apartamento' />
        <br />
        <label>Observaciones</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </FormWrapper>
    </Page>
  )
}

export default Checkout