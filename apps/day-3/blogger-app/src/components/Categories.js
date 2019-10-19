import React from 'react';
import { AllCategory } from '../store';

const Categories = ({ categories, onCategorySelect }) => {
  const categoriesWithAll = [{ ...AllCategory }, ...categories];

  return <div>
    <h5>Categories</h5>
    <div className="list-group">
      {categoriesWithAll.map(c => {
        return <button
          key={c.id}
          onClick={() => { onCategorySelect(c); }}
          type="button"
          className="list-group-item list-group-item-action">
          {c.name}
        </button>
      })}
    </div>
  </div>;
};

export default Categories;
