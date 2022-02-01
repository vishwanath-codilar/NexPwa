import React, { Component } from 'react';
import "../styles/footer.css"
export default class Footer extends Component {
  render() {
      const {content}=this.props
    return <div  
    dangerouslySetInnerHTML={{__html: content}}></div>;
  }
}
