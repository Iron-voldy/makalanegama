import React from 'react';

const CursorTest = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-800 text-white p-4 rounded-lg text-sm">
      <p className="mb-2">Cursor Test Elements:</p>
      <button className="bg-red-600 text-white px-3 py-1 rounded mr-2 interactive">
        Button
      </button>
      <a href="#" className="text-blue-400 underline mr-2 interactive">
        Link
      </a>
      <input type="text" placeholder="Input" className="px-2 py-1 text-black w-20 interactive" />
    </div>
  );
};

export default CursorTest;