import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';

const ToDoForms = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let newUser = {
            name: name,
            email: email,
            id: uuidv4()
        };
        props.addNewUser(newUser);
        setName('');
        setEmail('');
    };
  return (

    <div className="min-h-screen w-200 flex items-center justify-center bg-linear-to-br from-blue-900 to-gray-900 p-4">

    
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl p-8 rounded-2xl w-full max-w-md">
            <h2 className="text-white text-2xl font-semibold mb-6 text-center">Add User</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

      
                <div>
                <label className="block text-white/80 font-medium mb-1">Name:</label>
                <input type="text" value={name} onChange={handleNameChange} required 
                className="w-full px-4 py-3 rounded-lg bg-white transition"/>
                </div>

                <div>
                <label className="block text-white font-medium mb-1">Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} required
                className="w-full px-4 py-3 rounded-lg bg-white transition"/>
                </div>
            

    
                <div>
                    <input type="submit" value="Add User"
                    className="w-full py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-semibold
                    shadow-lg cursor-pointer transition"/>
                </div>

            </form>
        </div>

    </div>

  )
}

export default ToDoForms