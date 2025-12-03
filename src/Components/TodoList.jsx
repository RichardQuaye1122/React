import React from 'react'

const TodoList = (props) => {
  return (
    <div className="min-h-screen pt-4 px-5  space-y-4 w-150">

      {props.users.map((user) => {
        return (
          <div key={user.email} className="flex max-w-2xl justify-between items-center px-6 py-4 bg-gray-300 rounded-xl text-black shadow-lg transition">
            
            <h1 className="text-lg font-semibold">{user.name}</h1>

            <h1 className="text-black">{user.email}</h1>
          </div>
        );
      })}

    </div>
  );
};


export default TodoList