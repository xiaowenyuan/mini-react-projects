/** @jsxImportSource @emotion/react */
import './App.css';
import React from 'react';
import ProductsContainer from './ProductsContainer';
import FilterOptions from './FilterOptions';
import productsInfo from './products.json';
import { css } from "@emotion/react";

const products = productsInfo['products'];
let ingredients = productsInfo['ingredients'];
ingredients.unshift('all');
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filter: 'all'
    }
    this.changeFilter = this.changeFilter.bind(this);
  }
  changeFilter(newFilter){
    const newFilterSmallCaps = newFilter.toLowerCase();
    this.setState({
      filter: newFilterSmallCaps
    }
    )
  }

  render(){
    return(
      <div className ="App" css={{
        background: "#caf0f8",
        top:'0',
        padding:'0',
        paddingTop: '5%',
        margin:'0',
        width:'100%',
        minHeight: '100vh',
        height:'100%',
        fontFamily: 'Quicksand',
      }}>
        <h1 css={css`margin-top: 0; color: goldenrod; font-family: 'Oleo Script', cursive; font-size:4em; text-align:center`}>Lorem Ipsum Cafe</h1>
        <FilterOptions ingredients={ingredients} changeFilter={this.changeFilter} activeFilter={this.state.filter}/>
        <ProductsContainer products={products} activeFilter={this.state.filter}/>
      </div>
    )
  }
}


export default App;
