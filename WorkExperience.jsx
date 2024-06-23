import React, { useState }  from "react";
import InputComp from "../inputComponent/InputComp";
const WorkExperience=()=>{
    const [exp,Setexp]=useState('');


return(
    <div>
    <h2>WorkExperience</h2>
    {/* <button onClick={Setexp}/> Add More</button> */}
    <button>Remove</button>

<InputComp type={'text'} labelfor={'company_name'} labelname={'Company Name'} name={'company_name'} placeholder={'Enter Company Name'} />
<InputComp type={'text'} labelfor={'designation'} labelname={'Designation'} name={'designation'} placeholder={'Enter your Designation'} />
<div className="flex">
<label htmlFor="from">From</label> 
<input type="text" name="from" placeholder="YYYY"/>
<label htmlFor="from">To</label>
<input type="text" name="from" placeholder="YYYY"/>
</div>
</div>
)
}
export default WorkExperience;