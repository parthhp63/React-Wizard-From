import logo from './logo.svg';
import './App.css';
import BasicDetails from './components/forms/BasicDetails';
import Documents from './components/forms/Documents';
import EducationDetails from './components/forms/EducationDetails';
import WorkExperience from './components/forms/WorkExperience';
import Buttons from './components/buttons/Buttons';
import Header from './components/header/Header';
import { useState } from 'react';
function App() {

  const [currStep,SetCurrStep]=useState(1)


  const steps=[
    'Basic Details',
    'Education Details',
    'work Experience',
    'documents',
    'verify',
    'complete'
  ]

  const stepsDisplay=(step)=>{
    switch(step){
      case 1:
        return< BasicDetails/>
        case 21:
          return< EducationDetails/>
          case 3:
            return< WorkExperience/>
            case 4:
              return< Documents/>
              default:

    }
  }




  return (
    
    <div className=' md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
    <div className='conainer horizontal mt-5'>
    {/* <Header steps={steps} currStep={currStep} /> */}
    </div>
    {/* < BasicDetails /> */}
    {/* <EducationDetails /> */}
    {/* <WorkExperience /> */}
    < Documents />
    {/* <Buttons /> */}

    
    </div>
  )
}

export default App;
