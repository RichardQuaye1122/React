// components/UpdateModal.jsx
import React, { useState } from "react";

const UpdateModal = ({ student, onUpdate, onCancel }) => {
  const [name, setName] = useState(student.name);
  const [course, setCourse] = useState(student.course);

  return (
    <div className="fixed inset-0 bg-indigo-950/80 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-80 shadow-2xl text-center">
        <h2 className="text-xl font-bold mb-4">Edit Student</h2>
        <input
          className="w-full p-2 mb-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <div className="flex justify-center gap-3">
          <button
            onClick={() => onUpdate(student.id, name, course)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Update
          </button>
          <button
            onClick={onCancel}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
