import "./index.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";                                                           // './Filename'  >> this is the format.
import Content from "./Content";
import Footer from "./components/Footer";
import AddNotes from "./components/AddNotes";
import SearchNote from "./components/SearchNote";
import { Routes, Route ,useNavigate, json} from "react-router-dom";
import api from "./api/things";
import EditNote from "./components/EditNote";

// Uncomment for using normal fetchmethod
// import apiCrud from "./components/apiCrud";



//            USESTATES.

function App() {
  const [Items, setItems] = useState([]);                                                           // here we don't have to pass the api link bcaz that is in different format , instead in the Api fetching function we convert the data and pass that variable to the setState
  const [newNote, setNewnote] = useState("");
  const [search, setSearch] = useState("");
  const [editNote, setEditNote] = useState("");
  const [isProcessing, setProcessing] = useState(true);
  const navigateToHome=useNavigate()
  const len = Items.length;

  // Uncomment for using normal fetchmethod
  // const API_Fetcz = "http://localhost:3500/things";


  //Un comment for using Local storage version. and add it to the Main data use state which is Items.   //and remove api calling lines.
  //()=>{
  //  const storeLocal=localStorage.getItem('user');                                                    // get the local storage by giving the local storage name
  //  return storeLocal?JSON.parse(storeLocal):[]                                                       // then check anything present in local storage if yes parse it if no make it as empty []
  //}

  

  

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await api.get("/");                                                          // create a variable and use axios .get method inside paranthesis (give patha where the data needs to show)
        setItems(response.data);

        // UN COMMENT THIS FOR USING NORMAL FETCH OPERATIONS.
        // const Gettdata= await fetch(API_Fetcz)
        // if (!Gettdata.ok) throw Error("404 not found ");                                            
        // console.log(Gettdata)
        // const jsnCnvrt =await Gettdata.json();
        // console.log(jsnCnvrt)
        // setItems(jsnCnvrt);

      } catch (err) {
        if (err.response) {
          console.log(err.response.status);
        } else {
          console.log(err.message);
        }
      } finally {
        setProcessing(false);
      }
    };
    fetch_data();
  }, [setItems]);

  //uncomment thiis for using setting interval  
  //   setTimeout(() => {
  //                  (async (/** empty parameter */) => await fetch_data())();
  //                  }, 3000);
  //                }, [setItems]); // and here we are giving setItem as dependancy , if anything changed in this setItems , this will ask the useeffect to render and fetch the data again.
  //                                    u can directly call the function like fetch_data(), but same reason it has large data , so await then go for next line , we use async arrow function
  // const [streak,setStreak]=useState(Nuser);


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(Items));
  }, [Items]);


  //              FUNCTIONS

  const HandleCheck = async (id) => {
                                                                                                                      // the main state data which is Items is an array so you have iterate them

    try {
      const listOfitems = Items.map((itmIterator) =>
        itmIterator.id === id
          ? { ...itmIterator, cpl: !itmIterator.cpl }
          : itmIterator
      );                                                                                                              // inga antha id condition satisfied na map panra array la checked property uh change panniru nu solrom , adhu mattum thaan set state store aagum maththa property delete aagirum , to prevent that , ...itmIterator uh call panra so antha property um serthu add aagirum

      const selectedItm = listOfitems.filter((Litm) => Litm.id === id);                                               // here we are filtering only the object which we clicked by matching the id we get.
      const PatchApi = await api.patch(`/${id}`, { cpl: selectedItm[0].cpl });                                        // this .patch() is for updating only one property , to change entire property we have to use .put()
                                                                                                                      //... this is a spread operator that will create  a exact copy , and the variable going to copy is object then use {...CopyingVaraible}
      console.log(PatchApi);                                                                                          // for patch and delete  we have to send the id inside the paranthesis , which is we got from the onclicking  button whre we pass function
      setItems(listOfitems);
    } catch (err) {
      console.log(err.message);
    }

    // Uncomment this for normal patch method without axios
    // const UpdateOptions = {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ cpl: selectedItm[0].cpl }), // from the filered array we have multiple property , here we need to update the a specfic property cpl so we are getting value from the filtered array and passing it to the key cpl.
    // };

    // const selectedUrl = `${API_Fetcz}/${id}`;
    // const result = await apiCrud(selectedUrl, UpdateOptions);
    // if (result) setErrMsg(result);
  
  };

  const HandleDelete = async (id) => {
    try {
      const response = await api.delete(`${id}`);                                                                       // we don't need to delete specific property so just mention id , then entire content of array will be deleted
      console.log(response);
      const ItemToDelete = Items.filter((itdel) => itdel.id !== id);
      setItems(ItemToDelete);

      // Uncomment for using normal fetchmethod
      // const DeletOptions = { method: "DELETE" }; // while deleting we dont need all infos just give path and the method.
      // const selectedUrl = `${API_Fetcz}/${id}`; // we can directly just pass the api link if we are creating new one, but while deleting we need to mention the id so we use template literal 'Apilink/Id' this path is passed to the Crud api function.
      // const result = await apiCrud(selectedUrl, DeletOptions); // here we are calling the Api crud function and passing api link and the method we are going to do with it.
      // if (result) setErrMsg(result);

    } catch (err) {
      console.log(err.message);
    }
  };

  function HandleNewnote(e) {
    if (newNote.trim() !== "") {                                                                                      // this will check the new note column if it is not empty then only the below lines will run. .trim()will remove empty spaces
      e.preventDefault();                                                                                             // this will prevent the form from rendering everytime they get submitted bcaz of using forms
      AddnewNote();
      setNewnote("");                                                                                                 // setting the add note bar to empty once it is submitted.
    }                                                                                                                 // inga verum antha value va store panra function thaan kudukka porom
  }

  const AddnewNote = async (item) => {
    try {
      let id = Items.length ? Items[len - 1].id + 1 : 1;                                                              // this is for getting id
      const NewNoteFromUser = { id, cpl: false, item: newNote };                                                      // creating new object, passing the newNote's state to the item property.
      const postApi = await api.post("/", NewNoteFromUser);                                                           // Only adding the new data to the existing one 
      console.log(postApi);
      const NewListToExist = [...Items, NewNoteFromUser];                                                             // this because we want the old data too with the main State.
      setItems(NewListToExist);

      // Uncomment for using normal fetchmethod
      // const PostOptions = {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(NewNoteFromUser),
      // };
      // const result = await apiCrud(API_Fetcz, PostOptions); // here we are calling the Api crud function and passing api link and the method we are going to do with it.
      // if (result) setErrMsg(result); // this func will return value which is err msg , and we are storing it to the setErr if there is ny error thrown while fetching.
    
    } catch (err) {
      console.log(err.message);
    }
  };


  const HandleEditSubmit = async (id,e) => {
    const edittedNote = { id, item: editNote, cpl: false };                                                           // pass the entire property , and change the value of the property that you have editted. 
    try {
      const response = await api.put(`/${id}`, edittedNote);                                                          // updating the entire array so use put
      setItems(
        Items.map((SingleNote) =>
          SingleNote.id === id ? { ...response.data } : SingleNote)  );                                               // same spread operator the varaible we r going to copy is object so {...}  // we have to use response.data , so that data from the response link will copied
      setEditNote("");
      navigateToHome('/')
    } 
    catch (err) {
      console.log(err.message);
    }
  };
  

  return (
    <div className="App">
      <Header />
      <SearchNote search={search} setSearch={setSearch} />
      <AddNotes
        newNote={newNote}
        setNewnote={setNewnote}
        HandleNewnote={HandleNewnote}
        len={len}
      />
      
      <Content
        setItems={setItems}
        search={search}
        Items={Items.filter((Itm) =>
          Itm.item.toLowerCase().includes(search.toLowerCase())
        )}
        HandleCheck={HandleCheck}
        HandleDelete={HandleDelete}
      />
      <Routes>
        <Route
          path="/editNote/:id"
          element={
            <EditNote
              Items={Items}
              editNote={editNote}
              setEditNote={setEditNote}
              HandleEditSubmit={HandleEditSubmit}
            />
          }
        ></Route>
        {/** if any Link component with the same path as this route's path that will passed to the elemnt in this Route, the :id is used to get the id from the Link component and pass it to the target elemnt in the Route. By using use params we can get the id from route and use it to the target component */}
      </Routes>

      <Footer length={Items.length} Items={Items} />
      
    </div>
  );
}

export default App;
