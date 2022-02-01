import React, { Component } from 'react';
import "../styles/related_product.css"
export default class Related_products extends Component {
  render() {
      const {data}=this.props;
    return  <div className="related-product">
    <div className="related-product-wrap">
      <h4>YOU MAY ALSO LIKE</h4>
      <ul>
        {data.products.items[0].related_products.map((val)=>{
          return(
            <li key={val.id}>
              <img src={val.image.url} alt="" />
              
              <div className='related_produt_content'>
                <div className='r_price'>
                  <span className='special_price'><span className='symbol'>{data.currency.base_currency_symbol}</span>{val.special_price}.00</span>
                  <span className='old_price'><span className='symbol'>{data.currency.base_currency_symbol}</span>{val.price.regularPrice.amount.value}.00</span>
                </div>
                <div className="product_name ProductCard-Name_isLoaded">
                  {val.name}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  </div>;
  }
}
