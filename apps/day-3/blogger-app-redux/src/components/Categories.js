import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AllCategory } from '../store';

import { getCategories } from '../redux/actions';

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const categoriesWithAll = [{ ...AllCategory }, ...this.props.categories];

    return <div>
      <h5>Categories</h5>
      <div className="list-group">
        {categoriesWithAll.map(c => {
          return <button
            key={c.id}
            onClick={() => { this.props.onCategorySelect(c); }}
            type="button"
            className="list-group-item list-group-item-action">
            {c.name}
          </button>
        })}
      </div>
    </div>;

  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
