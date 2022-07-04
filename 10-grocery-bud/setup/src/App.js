import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert';


const getLocalStorage = () =>{
  let list = localStorage.getItem('list')
  if(list){
    // STORING IN STRING SO WILL HAVE TO STRINGIFY IT
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})

const handleSubmit = (e) =>{
  e.preventDefault();
  // EMPTY STRING ALERT//
  if(!name){
  showAlert(true, 'danger', 'Please enter value');
//  EMPTY STRING '' IS A FALSY VALUE SO IF(!NAME) BASICALLY IF NAME IS FALSE AS IN EMPTY THN ALERT  . . . . . SO AND SO
  }

// CHECK FOR VALUE AND EDITING ALERT
 // this is for if name is true as in if there is any value and not just empty submission in the grocery list and also if the value is being edited, then we alert so both the conditions are met thn we deal with this.

  else if(name && isEditing){
setList(
  list.map((item)=>{
    if(item.id === editID){
      return { ...item, title: name}
    }
    return item;
  })
);
setName('');
setEditID(null);
setIsEditing(false);
showAlert(true, 'success', 'value changed');

  }

// IF EVERYTHING GOES WELL AND WE HAVE VALUE IN OUR LIST THN BOTTOM FUNCTION WILL RUN
  // NEW ITEM TO THE LIST (VALUE TAKEN AND ADDED AND DISPLAY ALONG WITH OLD LIST.)
  else{
    showAlert(true, 'success', 'item added to the list');
    const newItem = {id: new Date().getTime().toString(), title: name};

      // RIGHT AFTER VALUE IS SUBMITTED, INPUT WILL BE CLEARED BACK TO EMPTY STRING ''
    setList([...list, newItem]);
    setName('');
  }
};

// MADE A FUNCTION FOR ALERT INSTEAD BUT CANT FIGURE OUT THE PURPOSE FOR IT
const showAlert = (show = false,  type =  '', msg = '') =>{
  setAlert({show, type, msg});
}

const clearList = () =>{
  showAlert(true, 'danger', 'empty list');
  setList([]);
}

const removeItem = (id) =>{
  showAlert(true, 'danger', 'item removed');
  setList(list.filter((item) => item.id !==id));
};

const editItem = (id) =>{
  const specificItem = list.find((item) => item.id === id);
  setIsEditing(true);
  setEditID(id);
  setName(specificItem.title);
}
useEffect(()=>{
  localStorage.setItem('list', JSON.stringify(list))
}, [list])

  return (
  <section className='section-center'>

<form className='grocery-form' onSubmit={handleSubmit}>
  {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}   
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
  <List items={list} removeItem={removeItem} editItem={editItem}/>
  {/* ^PROP IS = LIST STATE VALUE */}
  <button className='clear-btn' onClick={clearList}>Clear Items</button>
</div>
)}


  </section>
  
  )
}
 

export default App




