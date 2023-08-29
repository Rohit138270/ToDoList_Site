import React, { useState } from "react";
import "./App.css";
import ListItems from "./ListItems";
const App = () =>{
  const [inputlist, Setinputlist] = useState();
  const [itemlist,Additemlist] = useState([]);

  const inputevent = (e) =>{
    Setinputlist(e.target.value);
  }
  const addItems = () =>{
    Additemlist((olddata) =>{
      return [...olddata, inputlist];
    });
    Setinputlist("");
  }
  const Deleteitems = (id) =>{
    Additemlist((olddata) =>{
      return olddata.filter((arrdata, index)=>{
        return index !== id;
      })
    })
  }
  return(
    <>
      <div className="maindiv"> 
        <div className="centerdiv">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="add a item" value={inputlist} onChange={inputevent}/>
        <button onClick={addItems}> + </button>
        <ol>
          
          {itemlist.map((itemvalue,index) =>{
            return <ListItems 
              data={itemvalue}
              key={index}
              id={index}
              onSelect = {Deleteitems}

            />
          })}
        </ol>

        </div>

      </div>
    </>
  );
}

export default App;
