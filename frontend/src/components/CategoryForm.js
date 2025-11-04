import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function CategoryForm({ onCategoryAdded }) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/categories', { name });
      onCategoryAdded(response.data);
      setName('');
    } catch (err) {
      setError('Failed to add category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h3>Add Category</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Category Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Category'}
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;
