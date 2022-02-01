import React, { Component } from 'react'
import sendRequest from './request';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './styles/App.css';
import Header from './components/header';
import Slider_content from './components/slider';
import About_content from './components/about';
import Related_products from './components/related_products';
import Footer from './components/footer';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      images:[]
    }
  }
  componentDidMount() {
    const query = `
    query{
      cmsBlocks (identifiers: "1"){
        items {
          content
          
         
        }
      }
      storeConfig {
       header_logo_src
        welcome
      }
      currency{
            available_currency_codes
            base_currency_code
            base_currency_symbol
            default_display_currency_code
            default_display_currency_symbol
        exchange_rates {
          currency_to
          rate
        }
          }
      
      
      products(
        search:null
        sort:{ position: ASC }
        currentPage: 1
        pageSize: 1
        filter: {
          custom_filter:[{attribute: "entity_id",condition:{eq: "1958"}}]      
        }
      )
    
      {
        items{
          name
          sku
          thumbnail {
            label
            path
            url
          }
          special_price
          price {
       
            regularPrice {
              amount {
                currency
                value
              }
            }
          }
          breadcrumbs{
            category_name
          
          }
       media_gallery_entries{
            media_type
            
            id
            thumbnail{
              url
            }
          }
          description{
            html
          }
          image{
            url
          }
         
         related_products{
           id
         
          name
          
          image{
            url
          }
          
          
          
          special_price
           price{
      
          regularPrice{
            amount{
              value
            currency
            }
          }  
         
            
       
      }
        
        }
      }
        
      }
    } 
    `
    sendRequest({
      query,
      variables: { url: "men.html" }
    }).then(res => {
      
      this.setState({
        data: res.data,
        images:res.data.products.items[0].media_gallery_entries
      })
    })
  }

  render() {
    console.log(this.state);
    // const description=this.state.data.products.items[0].description.html;
    // console.log(description);
       
    return (
      <div className="App">
          {
       !this.state.data ? (
         <p>Loading....</p>
       ) : ( <>
         <Header storeConfig={this.state.data.storeConfig} currency={this.state.data.currency}></Header>
      <div className="breadcrumbs">
        <ul>
        <li>Home</li>
          {this.state.data.products.items[0].breadcrumbs.map((val,i)=>{
            return(<>
             
              <li>{val.category_name}</li></>
            )
          })}
          <li>{this.state.data.products.items[0].name}</li>
        </ul>

      </div>
      <Slider_content data={this.state.data} images={this.state.images}></Slider_content>
      <About_content content={this.state.data.products}></About_content>
      <Related_products data={this.state.data}></Related_products>
      <Footer content={this.state.data.cmsBlocks.items[0].content}></Footer>
      </>
       )
     }
      </div>
    );
  }
}
