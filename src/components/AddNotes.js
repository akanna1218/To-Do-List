import React from 'react'
import { FaRegCalendarPlus } from "react-icons/fa";


function AddNotes({newNote,setNewnote,HandleNewnote,len,setErr}){
    return(
        <form className='AddNote' style={{textAlign:'center'}}>
            
            <label htmlFor="addNote"></label>
            <input type="text"
                    style={{marginTop:"4px"}}
                    placeholder='Add Note'
                    value={newNote} 
                    required
                    onChange={(e)=>setNewnote(e.target.value)} // passing the value in the typing event target to the setState

            />

          {setNewnote&&
           <button 
                onClick={HandleNewnote} 
                style={{marginLeft:"10px"}}>
                    <FaRegCalendarPlus 
                    tabIndex={0}        />
            </button>
            }

        </form> // note here form not forms ,
    )
}

export default AddNotes