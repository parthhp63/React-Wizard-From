import React from "react";

const       InputComp=({name,placeholder,type,labelfor,value,labelname})=>{
     return(
        <div>
            <label htmlFor={labelfor} >{labelname}</label><br />
            <input type={type} name={name} placeholder={placeholder}  value={value}/><br />
        </div>
     )
}

export default InputComp;