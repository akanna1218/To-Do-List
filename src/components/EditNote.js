import React from 'react'
import { useParams} from 'react-router-dom'
import { useEffect } from 'react'
const EditNote = ({Items,editNote,setEditNote,HandleEditSubmit}) => {

  const {id}=useParams();          // use params will get id from the link which sent by the routes and it is destructured here {}
  const editingNote=Items.find((Singlenote)=>(Singlenote.id).toString()===id);
                                  //above we compare the total data's state id with the id we get from the use params (), we use find method and we need to convert main data id to string because , the link id is string
  
  useEffect(()=>{
    if(editingNote){                // while using find if there is any element present . 
    setEditNote(editingNote.item)   // then we should set that element to the set edit
  }},[editingNote,setEditNote,Items])   // if we click different edit button the edit bar value should change so mention editing note, and if that changes that will be set to set edit so change setEdit , this editing will modify the entire data so mention Items , main state
  return (
    <div>
      <input
      value={editNote}
      onChange={(e)=>setEditNote(e.target.value)}>
      </input>
      <button
      type='submit'
      onClick={()=>HandleEditSubmit(editingNote.id)}
      tabIndex={0}>
    Submit
      </button>
    </div>
  )
}

export default EditNote