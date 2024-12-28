import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const Products = () => {
    const {products} = useContext(ShopContext);

  return (
    <div>
      {
        products.map((product, index) => {
            return (
                <Link to={`/product/${product._id}`}>
                <div key={index}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    </div>
                </Link>
            )
        })
      }
    </div>
  )
}

export default Products
