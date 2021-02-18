import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [error, checkError] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [errorClass, setErrorClass]= useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const checkCases = (e) => {
    e.preventDefault()
    let result = true
    if (name === "" || email === "" || phone === "" || password === "") setMessage('All fields are mandatory')
    else if(!name.match(/^[0-9a-z]+$/)) setMessage('Name is not alphanumeric')
    else if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) setMessage('Email must contain @')
    else if(!phone.match(/^\d{10}$/)) setMessage('Phone Number must contain only numbers')
    else if(password.length < 6) setMessage('Password must contain atleast 6 letters')
    else {
      let show_name = ''
      let i = 0
      while(email[i] !== '@') {
        show_name += email[i++]
      }
      setMessage(`Hello ${show_name}`)
      result = false
    }
    checkError(result)
  }

  useEffect(() => {
    if(error) setErrorClass('error')
  }, [checkCases])

  return (
    <div id="main">
      <h1>Sign Up Form</h1>
        <form action="">
          <label>Name: </label>
          <input onChange={handleChangeName} value={name} data-testid='name'></input><br />
          <label>Email: </label>
          <input onChange={handleChangeEmail} value={email} data-testid='email'></input><br />
          <select name="gender">
            <option value="male" defaultValue>Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          <label>Phone: </label>
          <input onChange={handleChangePhone} value={phone} data-testid='phoneNumber'></input><br />
          <label>Password: </label>
          <input onChange={handleChangePassword} value={password} data-testid='password' type="password"></input><br />
          <button onClick={checkCases} type="submit" data-testid='submit'>Submit</button>
        </form>
         <h1 className={errorClass}>{message}</h1>
    </div>
  )
}


export default App;
