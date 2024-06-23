import React,{useState} from "react";
import InputComp from "../inputComponent/InputComp";
import RadioButton from "../buttons/RadioButton";
const BasicDetails=()=>{
     const [gender, setGender] = useState('');

    const handleGenderChange = (selectedGender) => {
      setGender(selectedGender);
    };
    const genderOptions = ['Male', 'Female'];
    return(
        <div>
      <h1>Basic Details</h1>     
            <InputComp type={'text'} labelname={'First Name'} name={'fname'} labelfor={'fname'} placeholder={'Enter your first name'}  />
            <InputComp type={'text'} labelname={'Last Name'} name={'lname'} labelfor={'lname'} placeholder={'Enter your last name'}  />
            <InputComp type={'text'} labelfor={'roll no'} labelname={'Roll No'} placeholder={'Enter your Roll no'} name={'rollno'} />
             <InputComp type={'text'} name={'phone'} labelfor={'phone'} labelname={'Contact Details'} placeholder={'enter your contact details'} />
            <InputComp type={'date'} name={'dob'} labelfor={'dob'} labelname={'Date Of Birth (DD-MM-YYYY)'}  />
            <p> Gender</p>
            <RadioButton  options={genderOptions} selectedOption={gender}  onOptionChange={handleGenderChange} />
            <div><label for='address'>Address</label><br />
            <textarea style={{border:'1px solid black'}} name="address" rows={3} cols={50}  />
            </div>
            <InputComp type={'email'} name={'email'} labelfor={'email'} labelname={'email'} placeholder={'enter your email'} />
        </div>
    )
}
export default BasicDetails;