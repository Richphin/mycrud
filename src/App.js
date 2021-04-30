import { useState } from 'react';
import './App.css';
import ContactForm from './components/contactForm';
import Contacts from './components/contacts';


function App() {
  const[users,setstate]=useState([])

  function handleAddContacts(user) {
    setstate([
      ...users, user
    ])
    
  }

  
  

 return(
   <div>
     <div><ContactForm handleAddContacts={handleAddContacts}/></div>
     <div><Contacts allUsers={users}/></div>
     
     
   </div>
  
 )
}

export default App;
