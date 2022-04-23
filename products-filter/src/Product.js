import React from 'react';
import './Product.css';

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expanded: false
        }
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand(){
        let currentExpand = this.state.expanded;
        this.setState({
            expanded: !currentExpand
        })
    }
    
    expandButton(){
        if (this.state.expanded){
            return '-'
        } else {
            return '+'
        }

    }
    render(){
        const {id, name, price, summary, tags} = this.props.product;
        if(this.props.activeFilter === 'all' || tags.includes(this.props.activeFilter) ){
            return(
                <div className={`product`} id={`product_${id}`}>
                    <h2>{name}</h2>
                    <p className="price">${price}</p>
                    <button className="expand-button" onClick={this.toggleExpand}>{this.expandButton()}</button>
                    <br/>
                    <div  className ={`info-expanded-${this.state.expanded}`}>
                        {summary}
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default Product;