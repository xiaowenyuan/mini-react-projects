import React from 'react'; 
import Product from './Product';
import './ProductsContainer.css';

class ProductsContainer extends React.Component{
    render(){
       return(
        <div className="products-container">
           {this.props.products.map((product, index) => {
               return <div key={`product_${index}`}><Product activeFilter={this.props.activeFilter} product={product}/></div>
           })}
        </div>
       )
    }
}

export default ProductsContainer;