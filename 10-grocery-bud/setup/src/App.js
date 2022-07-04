import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert';


function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: true, msg: 'Hello World', type: 'success'})

const handleSubmit = (e) =>{
  e.preventDefault()
  // EMPTY STRING ALERT//
  if(!name){

//  empty string '' is a falsely value so the if(!name) basically is name is false as in empty thn display alert  . . . . . so n so
  }
// CHECK FOR VALUE AND EDITING ALERT
  else if(name && isEditing){
 // this is for if name is true as in if there is any value and not just empty submission in the grocery list and also if the value is being edited, then we alert so both the conditions are met thn we deal with this.
  }

// IF EVERYTHING GOES WELL AND WE HAVE VALUE IN OUR LIST THN BOTTOM FUNCTION WILL RUN
  // NEW ITEM TO THE LIST (VALUE TAKEN AND ADDED AND DISPLAY ALONG WITH OLD LIST.)
  else{
    const newItem = {id: new Date().getTime().toString(), title:name};
    setList([...list, newItem])
    // RIGHT AFTER VALUE IS SUBMITTED, INPUT WILL BE CLEARED BACK TO EMPTY STRING ''
    setName('')
  }
}




  return (
  <section className='section-center'>

<form className='grocery-form' onSubmit={handleSubmit}>
  {alert.show && <Alert {...alert}/>}   
                            {/* ^ OBJECT THREAD OPERATOR*/}
  <h3>Grocery Bud</h3>
  <div className='form-control'>
    <input type='text' className='grocery' placeholder='e.g eggs' value={name} onChange = {(e)=>setName(e.target.value)}/>
    <button type='submit' className='submit-btn'>
      {/* one butn having 2 functions using ternary operator, pretty cool!!! */}
      {isEditing ? 'edit': 'submit'}
    </button>
  </div>
</form>


{/* CONDITION APPLIED FOR THE CLEAR BTN TO SHOW ONLY WHEN THERE IS VALUE IN THE LIST ALONG WITH EDIT OR DELETE BTN */}
{list.length > 0 && (
  <div className='grocery-container'>
  <List items={list}/>
  {/* ^PROP IS = LIST STATE VALUE */}
  <button className='clear-btn'>Clear Items</button>
</div>
)}


  </section>
  
  )
}
 

export default App




