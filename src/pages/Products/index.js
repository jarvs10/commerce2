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
    img: 'https://colanta.com/sabe-mas/wp-content/uploads/2019/01/leche-pasteurizada-entera-colanta-1000-ml.jpg'
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
    img: 'https://colanta.com/sabe-mas/wp-content/uploads/2019/01/Quesito-450g.jpg'
  },
  {
    id: 4,
    name: 'Frijol cargamanto',
    precio: 7500,
    img: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/200366/7702511003251.jpg?v=637814145985530000'
  },
  {
    id: 5,
    name: 'Frijol cargamanto',
    precio: 7500,
    img: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/200366/7702511003251.jpg?v=637814145985530000'
  },
  {
    id: 6,
    name: 'Frijol cargamanto',
    precio: 7500,
    img: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/200366/7702511003251.jpg?v=637814145985530000'
  }
]

const Products = () => {

  const { idShop } = useParams();
  
  const [searchProducts, setSearchProducts] = useState('');
  const { addProductCart } = useCart();

  const listenerButtom = (id) => {
    addProductCart(id)
  }

  const onSearchShops = (data) =>{
    setSearchProducts(data);
  }

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
            onPress={listenerButtom}
            hasAction={true}
            textAction= 'Agregar'
          />)
        }
      </ProductsGrid>
      
    </Page>
  )
}

export default Products