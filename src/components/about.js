import React, { Component } from 'react';
import "../styles/about.css"

export default class About_content extends Component {
  render() {
      const {content}=this.props
    return <div>
         <div className='about-product-main'>
        <div className="about-product">
          <h3>ABOUT THIS PRODUCT</h3>
          <div  
      dangerouslySetInnerHTML={{__html: content.items[0].description.html}}></div>
        </div>
      </div>
      <div className='custome_review'>
        <div className='custome_review_content'>
        <h3>Customer reviews</h3>
        <h4>There are no reviews yet! Click button on the right to submit one!</h4>
        </div>
        <div>
          <button>WRITE A NEW REVIEW</button>
        </div>
      </div>
    </div>;
  }
}
