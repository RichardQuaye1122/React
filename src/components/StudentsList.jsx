// components/StudentsList.jsx
import React, { useEffect, useState } from "react";
import useStudentsStore from "../store/studentsStore";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const StudentsList = () => {
  const students = useStudentsStore((state) => state.students);
  const fetchStudents = useStudentsStore((state) => state.fetchStudents);
  const deleteStudent = useStudentsStore((state) => state.deleteStudent);
  const updateStudent = useStudentsStore((state) => state.updateStudent);

  const [studentToDelete, setStudentToDelete] = useState(null);
  const [studentToEdit, setStudentToEdit] = useState(null);

  useEffect(() => {
    fetchStudents(); // fetch once on mount
  }, []);

  const handleDelete = (id) => {
    deleteStudent(id);
    setStudentToDelete(null);
  };

  const handleUpdate = (id, name, course) => {
    updateStudent(id, { name, course });
    setStudentToEdit(null);
  };

  return (
    <div className="mt-5 space-y-2">
      {students.map((student) => (
        <div
          key={student.id}
          className="flex justify-between items-center bg-orange-200 p-3 rounded-lg shadow-sm"
        >
          <span className="font-medium">
            {student.name} - {student.course}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setStudentToEdit(student)}
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={() => setStudentToDelete(student)}
              className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {studentToDelete && (
        <DeleteModal
          student={studentToDelete}
          onConfirm={handleDelete}
          onCancel={() => setStudentToDelete(null)}
        />
      )}

      {studentToEdit && (
        <UpdateModal
          student={studentToEdit}
          onUpdate={handleUpdate}
          onCancel={() => setStudentToEdit(null)}
        />
      )}
    </div>
  );
};

export default StudentsList;
