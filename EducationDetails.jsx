import React from "react";
import InputComp from "../inputComponent/InputComp";
const EducationDetails=()=>{
    return(
<div>
    <h1>Education Details</h1>
    <h2>SSC</h2>
    <InputComp  type={'text'}  labelfor={'board_name'} labelname={'Name of Board'} name={'board_name'} placeholder={'Enter your board name'} />
    <InputComp type={'number'} labelfor={'passing_year'} labelname={'Passing Year'} name={'passing_year'} placeholder={'Enter your Passing Year'} />
    <InputComp type={'float'} labelfor={'percentage'} labelname={'Percentage'} name={'percentage'} placeholder={'Enter your Percentage'} />
<hr />
    <h2>HSC</h2>
    <InputComp  type={'text'}  labelfor={'board_name'} labelname={'Name of Board'} name={'board_name'} placeholder={'Enter your board name'} />
    <InputComp type={'number'} labelfor={'passing_year'} labelname={'Passing Year'} name={'passing_year'} placeholder={'Enter your Passing Year'} />
    <InputComp type={'float'} labelfor={'percentage'} labelname={'Percentage'} name={'percentage'} placeholder={'Enter your Percentage'} />
<hr />
    <h2>BE</h2>
    <InputComp  type={'text'}  labelfor={'board_name'} labelname={'Name of Board'} name={'board_name'} placeholder={'Enter your board name'} />
    <InputComp type={'number'} labelfor={'passing_year'} labelname={'Passing Year'} name={'passing_year'} placeholder={'Enter your Passing Year'} />
    <InputComp type={'float'} labelfor={'percentage'} labelname={'Percentage'} name={'percentage'} placeholder={'Enter your Percentage'} />


                        {/* <label name="board_name" >Name of Board</label>
                        <input name="board_name" type="text" id="board_name_ssc" class="form-control"/>
                        <p class="ssc"></p>
                        <label name="passing_year" >Passing Year</label>
                        <input name="passing_year" type="text" id="passing_year_ssc" class="form-control"/>
                        <p class="ssc eduno_validation" ></p>
                        <label name="percentage" >Percentage</label>
                        <input name="percentage" type="text" id="percentage_ssc" class="form-control"/>
                        <p class="ssc eduno_validation"></p>
                    <p class="education_validation"></p> */}
</div>
    )
}

export default EducationDetails;