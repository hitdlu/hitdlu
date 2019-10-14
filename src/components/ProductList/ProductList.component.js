
import React from 'react';
import { ProductItem } from '../ProductItem'
const ProductList = (props) => {
  return (
    <section className="recepies">
      <div className="container">
        <ul className="recepies-list">
          {props.data.map(item => {
            return <ProductItem  data={item} />
          })
          }
        </ul>
      </div>
    </section>
  )
}
export default ProductList;