// store/studentsStore.js
import { create } from "zustand";
import { db } from "../services/firebase";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

const useStudentsStore = create((set, get) => ({
  students: [],

  fetchStudents: async () => {
    const snapshot = await getDocs(collection(db, "students"));
    const studentData = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
    set({ students: studentData });
  },

  addStudent: async (student) => {
    const docRef = await addDoc(collection(db, "students"), student);
    set({ students: [...get().students, { id: docRef.id, ...student }] });
  },

  deleteStudent: async (id) => {
    await deleteDoc(doc(db, "students", id));
    set({ students: get().students.filter((student) => student.id !== id) });
  },

  updateStudent: async (id, updateData) => {
    await updateDoc(doc(db, "students", id), updateData);
    set({
      students: get().students.map((student) =>
        student.id === id ? { ...student, ...updateData } : student
      ),
    });
  },
}));

export default useStudentsStore;
