import React from "react";

const ListItems = (props) =>{
 return (<>
 <div className="todostyle">
 <button className="btnstyle" onClick={() => {
    props.onSelect(props.id);
    }}> × 
 </button>
 <li>{props.data}</li>
 </div>
 </>
 );
}
export default ListItems;