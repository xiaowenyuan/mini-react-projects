import React from 'react';
import './FilterOptions.css';

class FilterOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleFilterClick(e){
        const newFilter = e.target.textContent;
        this.props.changeFilter(newFilter);
    }
    render(){
        return(
            <div className="filter-container">
                <h3>Select Beverage Type</h3>
                <ul className="filter-options" role="list">
                    {this.props.ingredients.map((ing, key) => {
                        if(ing === this.props.activeFilter){
                            return <li key={`ingredient_${key}`} value={ing.toUpperCase()} onClick={this.handleFilterClick} className='active-filter'>{ing}</li>
                        }
                        return <li key={`ingredient_${key}`} value={ing.toUpperCase()} onClick={this.handleFilterClick}>{ing}</li>
                    })}
                </ul>

            </div>
        )
    }
}

export default FilterOptions;