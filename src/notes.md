NEVER EVER USE COMPLETE AS APROPERTY TO AN OBJECT.
must important one if You are creating an use state const [Items,setItems]=useState , and first pass it to component by useStateName={useStateName} <Content
        Items={Items} />
         and in the component file it should be received inside a () with { curly braces} const Content = ({Items,HandleCheck,HandleDelete}) .

useEffect will run every time until you give some dependancy. the useEffect will mostly usd for like loading json file from local storage or , loading api link.

ErrMsg && <p>Error:{ErrMsg}</p>    intha dooublle and operator uh like if maarium use panlaam, errMsg variable tue uh iruntha idha run pannu nu kudukalaam.

useState la current variable , display panna like return jsx kula maximum use panuvom, setState variable uh , logical java script side use panvom. refer fetch aPI section  for more .

        e.preventDefault()  // this will prevent the form from rendering everytime they get submitted

const List=Items.map((Itm)=>{
    return(<TodoList key={Itm.id} value={Itm.item} Items={Itm} setItems={setItems} HandleCheck={HandleCheck}/>)})
    // inga we are mapping a UseState to component , intha list lairunthu antha component kku use aagura properties like id, value elaam pass panrom , then ipo antha itm iterator ula thaan useState iruku so adha apdiye pass panrom
  

              <input className="Cbox" type="checkbox" checked={Items.succss}  onChange={()=>HandleCheck(Items.id)} value={Items.item} />  {/** this handle change is passed to this component as aprop thats why we are using props.HandleChange */}  /// onChange kulla or any event habdler use opannalum call the function by using anonymous arrow function.

app js la iruka oru state or data va vera component la use pannanum na first pass it to the coponent like this //         <Footer length={Items.length} />      </div> // then antha component la poitu receve paniko

e means event , the action we are doing



