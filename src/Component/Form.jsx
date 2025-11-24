import React, {useState} from "react";

const Form = () => {
  const[userName, setUserName] = useState("")
  const[userEmail, setUserEmail] = useState("")

  const handleUserName = (e) =>{
    setUserName(e.target.value)
  }

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const submit = (e) => {
    console.log(userName)
    console.log(userEmail)
    e.preventDefault()
    setUserName("")
    setUserEmail("")
  }

  return (
    <>
      <form onSubmit={submit}>
        <label>Name</label>
        <input type="text" value={userName} onChange={handleUserName} />

        <label>Email</label>
        <input type="text" value={userEmail} onChange={handleUserEmail}/>

        <input type="submit" />
      </form>
    </>
  )
}

export default Form