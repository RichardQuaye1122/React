// components/DeleteModal.jsx
import React from "react";

const DeleteModal = ({ student, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-red-950/80 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-80 shadow-2xl text-center">
        <p className="mb-4 text-gray-700">
          Are you sure you want to delete <strong>{student.name}</strong>?
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => onConfirm(student.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Yes, Delete
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

export default DeleteModal;
