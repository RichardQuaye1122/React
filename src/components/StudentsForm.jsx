// components/StudentsForm.jsx
import React, { useState } from "react";
import useStudentsStore from "../store/studentsStore";

const StudentsForm = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const addStudent = useStudentsStore((state) => state.addStudent);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !course.trim()) {
      alert("Please fill out the form");
      return;
    }
    addStudent({ name, course });
    setName("");
    setCourse("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-white p-5 rounded-xl shadow-md"
    >
      <input
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
      />
      <input
        placeholder="Enter The Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
      />
      <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold">
        Add Student
      </button>
    </form>
  );
};

export default StudentsForm;
