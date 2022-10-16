import { useParams } from 'react-router-dom';
import Page from '../../components/Page';
import { Product } from '../../components/Product';
import Search from '../../components/Search';
import { ProductsGrid } from './styles';
import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';

const Productos = [
  {
    id: 1,
    name: 'Leche Colanta x 1',
    precio: 3500,
    img: 'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNENFZHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--33dcd2c3df9ad3b88515f1dcccd6ad4b6aa5fa82/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/Leche-uht-entera-1100ml-colanta-1.png?locale=es'
  },
  {
    id: 2,
    name: 'Huevos x 30',
    precio: 12500,
    img: 'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVlDYlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f38ad4b51d6264d7807ba4e407614cb4b8ddded2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/HUEVO%20AA.jpg?locale=es'
  },
  {
    id: 3,
    name: 'Quesito Colanta x 1',
    precio: 9500,
    img: 'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXVlSWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--70639d6169defe408e62b73c534dad465eee7c51/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/003037.jpg?locale=es'
  },
  {
    id: 4,
    name: 'Mantequilla',
    precio: 10500,
    img: 'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeEt3aFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cd1720f83cb622131afff3a54fd336d0dfbc41dc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/Mantequilla-sin-sal-250g-.png?locale=es'
  },
  {
    id: 5,
    name: 'Azucar',
    precio: 7500,
    img: 'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMmQ2amc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--955831a503bdf4575025545c5f89ec7691503a5b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/7702059601322-1.jpg?locale=es'
  },
  {
    id: 6,
    name: 'Frijol cargamanto',
    precio: 7500,
    img: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/200366/7702511003251.jpg?v=637814145985530000'
  },
  {
    id: 7,
    name: 'Espaguettis',
    precio: 6000,
    img: 'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNHM4a0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cf3aa14a2a4f2e7130dde603c83d354d1e26e3da/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/httpsstorage.googleapis.comlarecetta-ibis-images1005148.jpg?locale=es'
  },
  {
    id: 8,
    name: 'Arroz',
    precio: 15500,
    img: 'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM2xyamc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c2d03138aa6e9850882cc376e3ceff80b3fde317/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/1061144.jpg?locale=es'
  },
  {
    id: 9,
    name: 'Lentejas',
    precio: 6500,
    img: 'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM1ZGalE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f8678a807211b322e39dbc5c8047f7299a9c6664/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/lenteja.png?locale=es'
  },
  {
    id: 10,
    name: 'Sal',
    precio: 5500,
    img: 'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2lNaXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--99a0d4ca603b4c8b9409a716c99625e440eeed5e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/7703812007542.jpg?locale=es'
  }
]

export const Products = ({ carrito, setCarrito }) => {

  const { idShop } = useParams();
  
  const [searchProducts, setSearchProducts] = useState('');
  const { addProductCart } = useCart();

  const listenerButtom = ({id, name, precio, img}) => {
    addProductCart(id);
    setCarrito([...carrito, {id, precio, name, img }]);
  }

  const onSearchShops = (data) =>{
    setSearchProducts(data);
  }

  console.log(carrito);

  return (
    <Page>
      <h2>Shop ID:{idShop}</h2>
      <Search Listener={onSearchShops}/>
      <p>{searchProducts}</p>
      <ProductsGrid>
        {
          Productos.map((products, key) => <Product 
            key={key} 
            {...products} 
            onPress={() => listenerButtom(products)}
            hasAction={true}
            textAction= 'Agregar'
          />)
        }
      </ProductsGrid>
      {/* <Checkout /> */}

    </Page>
  )
}

export default Products