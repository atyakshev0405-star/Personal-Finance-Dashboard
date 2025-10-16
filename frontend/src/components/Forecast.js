import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Forecast.css';

function Forecast() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadForecast();
  }, []);

  const loadForecast = async () => {
    try {
      const response = await axios.get('/forecast');
      setForecast(response.data.forecast);
    } catch (err) {
      setError('Failed to load forecast');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="forecast-container">Loading forecast...</div>;
  }

  return (
    <div className="forecast-container">
      <h3>Financial Forecast</h3>

      {error && <div className="error">{error}</div>}

      <div className="forecast-card">
        <h4>Next Month Prediction</h4>
        {typeof forecast === 'string' ? (
          <p className="forecast-message">{forecast}</p>
        ) : (
          <div className="forecast-amount">
            <span className="currency">$</span>
            <span className="amount">{forecast.toFixed(2)}</span>
            <span className="period">/month</span>
          </div>
        )}
      </div>

      <div className="forecast-info">
        <p>
          This forecast is based on a simple moving average of your last 3 transactions.
          For more accurate predictions, add more transaction data.
        </p>
      </div>
    </div>
  );
}

export default Forecast;
