
import { useState } from "react";





function ContactForm(props) {
    const[state,userstate]=useState({
        Name:"",
        Phone_number:"",
        Location:"",
    })
    function handleonChange(event){
                userstate({
                    ...state,
                    [event.target.name]:event.target.value,
                })
                
            }
    function handleonclick() {
        let user={...state}
        console.log(user)
        props.handleAddContacts(user)
    }
    return(
        <div >
        <div>
                <label>Name</label><br/>
                <input type="text" name="Name" value={state.Name}  onChange={handleonChange}/>
        </div>
        <div>
                <label >Phone number</label><br/>
                <input type="Number" name="Phone_number" value={state.Phone_number}  onChange={handleonChange}/>
        </div>
        <div>
                <label >Location</label><br/>
                <input type="Location" name="Location" value={state.Location}  onChange={handleonChange}/>
        </div><br/>
        <div>
            <button type="Submit"  onClick={handleonclick}>Save</button>
             
        </div>
    </div>
    )
}
export default ContactForm;