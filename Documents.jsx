import React from "react";
import InputComp from "../inputComponent/InputComp";
const Documents =()=>{
    return(
<div>
<h2> Documents </h2>


<InputComp type={'file'} labelfor={'profilephoto'} labelname={'Upload Photo'} name={'profilephoto'} placeholder={'Upload your profile Photo'}/>
<InputComp type={'file'} labelfor={'xmarksheet'} labelname={'X Marksheet'} name={'xmarksheet'} placeholder={'Upload your X Marksheet'}/>
<InputComp type={'file'} labelfor={'xiimarksheet'} labelname={' XII Marksheet'} name={'xiimarksheet'} placeholder={'Upload your XII marksheet'}/>

</div>

    )
}

export default Documents;