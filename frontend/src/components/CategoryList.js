import React from 'react';
import './List.css';

function CategoryList({ categories, onUpdate }) {
  return (
    <div className="list-container">
      <h3>Categories</h3>
      {categories.length === 0 ? (
        <p className="empty-message">No categories yet. Add your first category above!</p>
      ) : (
        <div className="list">
          {categories.map(category => (
            <div key={category.id} className="list-item">
              <div className="item-info">
                <span className="category-name">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryList;
