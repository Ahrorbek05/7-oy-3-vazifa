import React, { useState, useEffect } from 'react';
import Cards from './components/Card.jsx';

function App() {
  const [inputs, setInputs] = useState([]);
  const [inputCards, setInputCards] = useState(false);

  useEffect(function () {
    const saveInfo = JSON.parse(localStorage.getItem('Data'));
    if (saveInfo && saveInfo.length > 0) {
      setInputs(saveInfo);
    } else {
      setInputs([{ name: '', age: '', remarks: '' }]);
    }
  }, []);

  function handleInputChange(index, e) {
    const { name, value } = e.target;
    const refreshInputs = [...inputs];
    refreshInputs[index][name] = value;
    setInputs(refreshInputs);
  }

  function handleAdd() {
    setInputs([...inputs, { name: '', age: '', remarks: '' }]);
  }

  function handleRemove(index) {
    const inputsRefresh = inputs.filter(function(item, i) {
      return i !== index;
    });
    setInputs(inputsRefresh);
    localStorage.setItem('Data', JSON.stringify(inputsRefresh));
  }
  
  function handleSubmit() {
    localStorage.setItem('Data', JSON.stringify(inputs));
    setInputCards(true);
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      {inputs.map(function (inputss, index) {
        return (
          <div key={index} className="flex space-x-4 mb-2">
            <input
              type="text"
              name="name"
              value={inputss.name}
              onChange={function (e) { handleInputChange(index, e); }}
              placeholder="Name"
              className="border p-[10px] w-[150px] flex-shrink-0"
              required
            />
            <input
              type="number"
              name="age"
              value={inputss.age}
              onChange={function (e) { handleInputChange(index, e); }}
              placeholder="Age"
              className="border p-[10px] w-[150px] flex-shrink-0"
              required
              min="0"
            />
            <textarea
              name="remarks"
              value={inputss.remarks}
              onChange={function (e) { handleInputChange(index, e); }}
              placeholder="Remarks"
              className="border p-[10px] w-full resize-none"
              rows="2"
              required
            />
            <button
              onClick={handleAdd}
              className="bg-blue-500 text-white p-[10px] w-[100px] rounded flex-shrink-0"
            >
              Add More
            </button>
            <button
              onClick={function () { handleRemove(index); }}
              className="bg-red-500 text-white p-[10px] w-[100px] rounded flex-shrink-0"
            >
              Remove
            </button>
          </div>
        );
      })}
      <div className="flex space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-[10px] w-[100px] rounded"
        >
          Submit
        </button>
      </div>
      {inputCards && <Cards data={inputs} />}
    </div>
  );
}

export default App;
