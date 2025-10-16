import React, { useRef } from 'react';
import axios from 'axios';
import './CSVImportExport.css';

function CSVImportExport({ onDataImported }) {
  const fileInputRef = useRef();

  const handleImport = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/import-csv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('CSV imported successfully!');
      onDataImported();
    } catch (error) {
      alert('Failed to import CSV');
    }

    // Reset file input
    fileInputRef.current.value = '';
  };

  const handleExport = async () => {
    try {
      const response = await axios.get('/export-csv');
      const csvContent = response.data.csv;

      // Create and download CSV file
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'transactions.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Failed to export CSV');
    }
  };

  return (
    <div className="csv-container">
      <h3>Import/Export CSV</h3>

      <div className="csv-section">
        <h4>Import Transactions</h4>
        <p>Upload a CSV file with columns: amount, description, type, category_id</p>
        <input
          type="file"
          accept=".csv"
          onChange={handleImport}
          ref={fileInputRef}
          className="file-input"
        />
      </div>

      <div className="csv-section">
        <h4>Export Transactions</h4>
        <p>Download all your transactions as a CSV file</p>
        <button onClick={handleExport} className="export-btn">
          Export CSV
        </button>
      </div>

      <div className="csv-info">
        <h4>CSV Format</h4>
        <p>Your CSV should have the following columns:</p>
        <ul>
          <li><strong>amount:</strong> Numeric value (e.g., 100.50)</li>
          <li><strong>description:</strong> Text description of the transaction</li>
          <li><strong>type:</strong> 'income' or 'expense'</li>
          <li><strong>category_id:</strong> Numeric ID of the category</li>
        </ul>
      </div>
    </div>
  );
}

export default CSVImportExport;
