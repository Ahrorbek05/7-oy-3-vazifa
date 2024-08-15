import React from 'react';

function Cards(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {props.data.map((item, index) => (
        <div key={index} className="border p-4 rounded shadow-md break-words">
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Age:</strong> {item.age}</p>
          <p><strong>Remarks:</strong> {item.remarks}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
