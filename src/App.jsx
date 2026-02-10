// App.jsx
import React from "react";
import StudentsForm from "./components/StudentsForm";
import StudentsList from "./components/StudentsList";

const App = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-200 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-5">STUDENT REGISTER</h1>
      <StudentsForm />
      <StudentsList />
    </div>
  );
};

export default App;
