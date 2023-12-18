// import React from "react"

// class Users extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             Ndates:0
//         }
//         this.HandleNdates=this.HandleNdates.bind(this)
//     }
//     HandleNdates(){
//         this.setState(prevState=>{
//             return{
//                 Ndates:prevState.Ndates+1
//             }

//         })
//     }
//     render(){
//     return(
//         <div>
//             <p>{this.state.Ndates}</p>
//             <button onClick={this.HandleNdates}>Days</button>
//         </div>
//     )
// }}


//                  Changiing the state by useState



import React from "react"
import { GrPowerReset } from "react-icons/gr";

import {useState,useEffect} from "react"


function Users({Items,ErrMsg,isProcessing}){
    
    const [Nuser,setNuser]=useState(JSON.parse(localStorage.getItem('userr'))|| 0)
    localStorage.setItem('userr',JSON.stringify(Nuser))                                     // this setItem is a key word for localStorage operation to set value

    function Add(){
                
        setNuser(Nuser+1)
         
    }
    
    
    function HandleReset(){
                
        setNuser(0)
     }

   


    useEffect(()=>{
        
        console.log("the use effect will run everytime the screen renders means display")
        },[Nuser])                                                                                        // but if you give dependancy, which is , you have to mention a variable in a array , if it changes then only it renders again
    
    
    
  
    
    
    return(
        <div>
        
        <p>{Nuser}</p>
        <button 
        onClick={Add}>
            Days
        </button>

        <button  
        style={{backgroundColor:'blue',marginLeft:"10px"}} 
        onClick={HandleReset}>
            <GrPowerReset />

        </button>

        <br />
        
        {isProcessing && <p>Fetching....</p>}                           {/** This && means whether the given use state or variable is true then do this, */}
        {ErrMsg && <p>Error:{ErrMsg}</p>}

        </div>
    )
}



export default Users