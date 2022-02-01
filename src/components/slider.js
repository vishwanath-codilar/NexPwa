import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "../styles/slider.css"

export default class Slider_content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: 0,
    }
  }
  handelIncrement=()=>{
    this.setState({
      cartItems: this.state.cartItems+1
    })
  }
  handelDecrement=()=>{
    this.setState({
      cartItems: this.state.cartItems-1
    })
  }
  render() {
    
    const temp=[];
    this.props.images.map((val)=>{
      temp.push({original:val.thumbnail.url,thumbnail:val.thumbnail.url})
    })
    return (
    <div className="banner-container">
      <div className="carousl">
       <ImageGallery items={temp} thumbnailPosition={'left'} showBullets={true}></ImageGallery>
      </div>
      <div className="product-details">
           <h2>{this.props.data.products.items[0].name}</h2>
           <span className='sku'>sku:{this.props.data.products.items[0].sku}</span>
           <div className="add-to-cart">
           <div className='price'>
                  <span className='special_price'><span className='symbol'>{this.props.data.currency.base_currency_symbol}</span>{this.props.data.products.items[0].special_price}.00</span>
                  <span className='old_price'><span className='symbol'>{this.props.data.currency.base_currency_symbol}</span>{this.props.data.products.items[0].price.regularPrice.amount.value}.00</span>
                </div>
           <div className="product-action">
             <div className="input_f">
             <input type="number" value={this.state.cartItems} />
             <div className="product-btn">

             <button onClick={this.handelIncrement}>+</button>
             <button onClick={this.handelDecrement} disabled={this.state.cartItems==1}>-</button></div>
             </div>
             <button className="cart">ADD TO CART</button>
           </div>
           </div>
      </div>
      </div>  );
  }
}
