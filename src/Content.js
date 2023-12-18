import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";


const Content = ({ Items, HandleCheck, search, HandleDelete }) => {
 
  if (Items.length === 0) {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}> Things To Check </h2>
        <p style={{ textAlign: "center" }}>
          {" "}
          {search && Items.length === 0
            ? `No notes found :[`
            : "Please add a note..."}{" "}
        </p>{" "}
        {/** the usestate gets empty if all data is deleted , so we have to check both cases , if that searchbar's stae has value and if the main state is empty or not.  */}
      </div>
    );
  } else
    return (
      <div className="content">
        <h2 style={{ textAlign: "center" }}>Things To Check</h2>


        <ul>
          {Items.map((item) => (
            <li key={item.id} className="Box">
              <input
                className="Cbox"
                type="checkbox"
                checked={item.cpl}                                                    // checked is an html property for check boxes
                onChange={() => HandleCheck(item.id)}
                value={item.item}
              />
                                                                                      {/** this handle change is passed to this component as aprop thats why we are using props.HandleChange */}
                                                                                      {/** ithula props.eventname kudutha verum antha functioon mattum thaan call aagum , but adhula iruka properties like id, um namaku venum so adha access panna oru arrow function valiya event pass panni then  adhu valiya theva padra property uh PASS PANNI access panrom */}

              <label htmlFor="Cbox" style={{ marginRight: "20px" }}>
                {item.item}
              </label>
             
              {/** make edit button as links and get the id of the specific content which we clicked and direct it to the editing component */}
              <Link to={`/editNote/${item.id}`}><button
              className="edit"
              type='text'
              style={{ float: "inherit" }}>
                <FaEdit />
              </button></Link>
              
              <button
                type="text"
                style={{ float: "inherit" }}
                onClick={()=>HandleDelete(item.id)}
              >
                <MdDeleteSweep />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Content;
