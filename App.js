import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [symbolNo, setSymbolNo] = useState('');
  const [results, setResults] = useState([]);

  const getResult = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/results/${symbolNo}`);
      setResults(response.data);
    } catch (error) {
      console.error(error);
      alert('Result not found.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Result Checker</h2>
      <input
        type="text"
        value={symbolNo}
        onChange={(e) => setSymbolNo(e.target.value)}
        placeholder="Enter Symbol Number"
      />
      <button onClick={getResult}>Get Result</button>
      <div>
        {results.length > 0 && (
          <table border="1" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Semester</th>
                <th>Subject</th>
                <th>Grade</th>
                <th>GPA</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, index) => (
                <tr key={index}>
                  <td>{res.semester}</td>
                  <td>{res.subject}</td>
                  <td>{res.grade}</td>
                  <td>{res.gpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
